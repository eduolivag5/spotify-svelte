import * as spotify from '$lib/spotify.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    try {
        const savedItems = await spotify.getUserSavedAlbums(20);
        return {
            savedAlbums: savedItems.map(item => item.album)
        };
    } catch (error) {
        console.error("Error cargando librería en Layout:", error);
        return { savedAlbums: [] };
    }
};