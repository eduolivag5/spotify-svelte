import * as spotify from '$lib/spotify.server'; // ✅ Importación de servidor
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params;

    // Llamamos a la función consolidada directamente en el servidor
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