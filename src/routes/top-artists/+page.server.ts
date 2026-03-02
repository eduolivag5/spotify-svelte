import * as spotify from '$lib/spotify.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Usamos la misma función de tu servidor, pero con un límite mayor
    const topArtists = await spotify.getTopArtists(50);

    return {
        topArtists
    };
};