import * as spotify from '$lib/spotify.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    setHeaders({
        'cache-control': 'public, max-age=3600'
    });

    const playlist = await spotify.getPlaylist(params.id);

    if (!playlist) {
        throw error(404, 'Playlist no encontrada');
    }

    return { 
        playlist 
    };
};