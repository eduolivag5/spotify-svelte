// src/routes/playlist/[id]/+page.server.ts
import * as spotify from '$lib/spotify.server'; // ✅ Importación de servidor
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    // Usamos el id directamente de params
    const playlist = await spotify.getPlaylist(params.id);

    if (!playlist) {
        throw error(404, 'Playlist no encontrada');
    }

    return { 
        playlist 
    };
};