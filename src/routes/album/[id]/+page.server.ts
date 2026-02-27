// Cambiamos 'spotify' por 'spotify.server'
import * as spotify from '$lib/spotify.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    // Usamos las funciones del servidor directamente
    const album = await spotify.getAlbum(params.id);
    const tracks = await spotify.getAlbumTracks(params.id);

    if (!album) {
        throw error(404, 'Álbum no encontrado');
    }

    return { 
        album, 
        tracks 
    };
};