// src/routes/+layout.server.ts
import * as spotify from '$lib/spotify.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ setHeaders }) => {
    // Cache a nivel de navegador para evitar peticiones si se navega atrás/adelante
    setHeaders({
        'cache-control': 'private, max-age=3600' // 1 hora de caché privada
    });

    console.log("--- 🔄 CARGANDO BIBLIOTECA (UNA SOLA VEZ) ---");
    
    try {
        const savedItems = await spotify.getUserSavedAlbums(20);
        return {
            savedAlbums: savedItems.map(item => item.album)
        };
    } catch (error) {
        return { savedAlbums: [] };
    }
};