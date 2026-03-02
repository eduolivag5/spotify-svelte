import { 
    SPOTIFY_CLIENT_ID, 
    SPOTIFY_CLIENT_SECRET, 
    SPOTIFY_REFRESH_TOKEN,
    SPOTIFY_HIGHLIGHTED_ALBUM_ID 
} from '$env/static/private';
import type { 
    SpotifyArtist, 
    SpotifyAlbum, 
    SpotifyTrack, 
    SpotifyPaging, 
    SpotifyPlaylist, 
    SimpleTrack
} from '../types';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const API_BASE = 'https://api.spotify.com/v1';
const BASIC_AUTH = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

let cachedToken: string | null = null;
let tokenPromise: Promise<string> | null = null;

export const HIGHLIGHTED_ALBUM_ID = SPOTIFY_HIGHLIGHTED_ALBUM_ID;

async function getAccessToken(): Promise<string> {
    if (cachedToken) return cachedToken;
    if (tokenPromise) return tokenPromise;

    tokenPromise = (async () => {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${BASIC_AUTH}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: SPOTIFY_REFRESH_TOKEN,
            }),
        });

        const data = await response.json();
        cachedToken = data.access_token;

        setTimeout(() => {
            cachedToken = null;
            tokenPromise = null;
        }, (data.expires_in - 300) * 1000);

        return data.access_token;
    })();

    return tokenPromise;
}

export async function spotifyFetch<T>(endpoint: string): Promise<T | null> {
    const token = await getAccessToken();
    const url = `${API_BASE}${endpoint}`;
    
    console.log(`📡 Realizando fetch a: ${url}`);

    const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
        // Este log es el más importante: nos dirá si es 401, 404, 400, etc.
        console.error(`🚨 ERROR en spotifyFetch [${endpoint}]: status ${response.status} - ${response.statusText}`);
        return null;
    }
    
    return await response.json();
}

// --- ARTISTAS ---
export const getTopArtists = async (limit = 10) => {
    const data = await spotifyFetch<{ items: SpotifyArtist[] }>(
        `/me/top/artists?limit=${limit}&time_range=short_term`
    );
    return data?.items ?? [];
};

export const getTopTracks = async (limit = 10) => {
    const data = await spotifyFetch<{ items: SimpleTrack[] }>(
        `/me/top/tracks?limit=${limit}&time_range=short_term`
    );
    return data?.items ?? [];
};

export const getArtist = async (id: string) => {
    return await spotifyFetch<SpotifyArtist>(`/artists/${id}`);
};

// En src/lib/spotify.server.ts
export const getArtistData = async (id: string) => {
    console.log(`\n--- 🛠️  PROCESANDO ARTISTA: ${id} ---`);

    const [artist, allAlbumsData] = await Promise.all([
        getArtist(id),
        spotifyFetch<{ items: any[] }>(
            `/artists/${id}/albums?include_groups=album,single&market=ES&limit=50`
        )
    ]);

    if (!artist) console.error("❌ No se pudo obtener la info del Artista");
    if (!allAlbumsData) console.error("❌ No se pudo obtener el listado de Álbumes");

    const allItems = allAlbumsData?.items ?? [];
    
    // Log para ver qué campos trae Spotify realmente
    if (allItems.length > 0) {
        console.log(`✅ Items crudos recibidos: ${allItems.length}`);
        console.log(`🔍 Ejemplo del primer item - Nombre: "${allItems[0].name}", Type: "${allItems[0].album_type}", Group: "${allItems[0].album_group}"`);
    } else {
        console.warn("⚠️  La API devolvió 0 items.");
    }

    const albums = allItems.filter(item => 
        item.album_group === 'album' || item.album_type === 'album'
    );
    const singles = allItems.filter(item => 
        item.album_group === 'single' || item.album_type === 'single'
    );

    console.log(`📊 Filtrado final -> Álbumes: ${albums.length}, Singles: ${singles.length}`);
    console.log(`-------------------------------------------\n`);

    return {
        artist,
        albums,
        singles
    };
};

export const getArtistTopTracks = async (id: string) => {
    const data = await spotifyFetch<{ tracks: SpotifyTrack['item'][] }>(
        `/artists/${id}/top-tracks?market=ES`
    );
    return data?.tracks ?? [];
};

export const getRelatedArtists = async (id: string) => {
    const data = await spotifyFetch<{ artists: SpotifyArtist[] }>(
        `/artists/${id}/related-artists`
    );
    return data?.artists ?? [];
};

// --- ÁLBUMES ---
export const getAlbum = async (id: string) => {
    return await spotifyFetch<SpotifyAlbum>(`/albums/${id}?market=ES`);
};

// ESTA ES LA QUE FALTABA
export const getAlbumTracks = async (id: string) => {
    const data = await spotifyFetch<{ items: SpotifyTrack['item'][] }>(
        `/albums/${id}/tracks?limit=50&market=ES`
    );
    return data?.items ?? [];
};

export const getUserSavedAlbums = async (limit = 10, offset = 0) => {
    const data = await spotifyFetch<{ items: { added_at: string; album: SpotifyAlbum }[] }>(
        `/me/albums?limit=${limit}&offset=${offset}&market=ES`
    );
    return data?.items ?? [];
};

// --- PLAYLISTS ---
export const getUserSavedPlaylists = async (limit = 10) => {
    const data = await spotifyFetch<SpotifyPaging<SpotifyPlaylist>>(
        `/me/playlists?limit=${limit}`
    );
    return data?.items ?? [];
};

export const getPlaylist = async (id: string) => {
    return await spotifyFetch<SpotifyPlaylist>(`/playlists/${id}?market=ES`);
};

export const getPlaylistTracks = async (id: string) => {
    const data = await spotifyFetch<SpotifyPaging<{ added_at: string; track: SpotifyTrack['item'] }>>(
        `/playlists/${id}/tracks?limit=50&market=ES`
    );
    return data?.items ?? [];
};