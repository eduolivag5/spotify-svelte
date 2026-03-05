import * as spotify from '$lib/spotify.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    const playlists = await spotify.getUserSavedPlaylists(50);

    return {
        playlists
    };
};