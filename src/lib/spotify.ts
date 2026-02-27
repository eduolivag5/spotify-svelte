import type { SpotifyAlbum, SpotifyArtist, SpotifyPlaylist } from '../types';

/**
 * Cliente seguro para el navegador.
 * Llama a tus propios endpoints (/api/...) para no exponer tokens.
 */
async function apiFetch<T>(path: string): Promise<T | null> {
    try {
        const response = await fetch(`/api/spotify${path}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (e) {
        console.error('Error fetching API:', e);
        return null;
    }
}

// Estas son las funciones que usará tu componente HighlightedAlbum
export const getAlbum = async (id: string) => {
    return await apiFetch<SpotifyAlbum>(`/album/${id}`);
};

export const getArtist = async (id: string) => {
    return await apiFetch<SpotifyArtist>(`/artist/${id}`);
};

export const getPlaylist = async (id: string) => {
    return await apiFetch<SpotifyPlaylist>(`/playlist/${id}`);
};