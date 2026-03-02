import * as spotify from '$lib/spotify.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Misma función, mayor cobertura
    const playlists = await spotify.getUserSavedPlaylists(50);

    return {
        playlists
    };
};