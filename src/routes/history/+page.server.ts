import * as spotify from '$lib/spotify.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    const topTracks = await spotify.getTopTracks(50);

    return {
        topTracks
    };
};