import * as spotify from '$lib/spotify.server';
import type { PageServerLoad } from './$types';
import { SPOTIFY_HIGHLIGHTED_ALBUM_ID } from '$env/static/private';

export const load: PageServerLoad = async () => {
    // Cargamos todo en paralelo, incluyendo el álbum destacado
    const [topArtists, playlists, highlightedAlbum] = await Promise.all([
        spotify.getTopArtists(6),
        spotify.getUserSavedPlaylists(15),
        spotify.getAlbum(SPOTIFY_HIGHLIGHTED_ALBUM_ID)
    ]);

    return {
        topArtists,
        playlists,
        highlightedAlbum // Pasamos el objeto completo, no solo la ID
    };
};