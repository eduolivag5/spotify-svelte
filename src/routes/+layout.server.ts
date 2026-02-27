import * as spotify from '$lib/spotify.server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ setHeaders }) => {
    // 1. Eliminamos 'depends' para que SvelteKit no tenga un "gancho" para invalidar esto manualmente.
    
    // 2. Opcional: Cachear la respuesta a nivel de cabeceras HTTP (30 segundos de gracia)
    // Esto evita re-ejecuciones si el usuario refresca la página muy rápido.
    setHeaders({
        'cache-control': 'public, max-age=30'
    });

    console.log("--- 🔄 CARGANDO BIBLIOTECA (SOLO DEBERÍAS VER ESTO UNA VEZ) ---");
    
    try {
        const savedItems = await spotify.getUserSavedAlbums(20);
        
        return {
            // Mapeamos los datos para que el cliente reciba solo lo necesario
            savedAlbums: savedItems.map(item => item.album)
        };
    } catch (error) {
        console.error("Error cargando biblioteca:", error);
        return {
            savedAlbums: []
        };
    }
};