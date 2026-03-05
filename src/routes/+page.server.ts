import * as spotify from '$lib/spotify.server';
import type { PageServerLoad } from './$types';
import { SPOTIFY_HIGHLIGHTED_ALBUM_ID } from '$env/static/private';

export const load: PageServerLoad = async ({setHeaders}) => {
    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    const [topArtists, playlists, highlightedAlbum, topTracks] = await Promise.all([
        spotify.getTopArtists(20),
        spotify.getUserSavedPlaylists(20),
        spotify.getAlbum(SPOTIFY_HIGHLIGHTED_ALBUM_ID),
        spotify.getTopTracks(20)
    ]);

    return {
        topArtists,
        playlists,
        highlightedAlbum,
        topTracks
    };
};