import * as spotify from '$lib/spotify.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders, params }) => {
    const { id } = params;

    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    const data = await spotify.getArtistData(id);

    if (!data.artist) {
        throw error(404, 'Artista no encontrado');
    }

    return {
        artist: data.artist,
        albums: data.albums,
        singles: data.singles
    };
};