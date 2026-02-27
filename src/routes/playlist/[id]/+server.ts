// src/routes/api/spotify/playlist/[id]/+server.ts
import { json, type RequestHandler } from '@sveltejs/kit';
import { getPlaylist } from '$lib/spotify.server'; // ✅ Importación de servidor

export const GET: RequestHandler = async ({ params }) => {
    // El '!' al final de id le dice a TS que estamos seguros de que existe
    const playlist = await getPlaylist(params.id!);
    
    if (!playlist) {
        return new Response('Playlist not found', { status: 404 });
    }

    return json(playlist);
};