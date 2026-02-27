// src/routes/api/spotify/artist/[id]/+server.ts
import { json, type RequestHandler } from '@sveltejs/kit';
import { getArtistData } from '$lib/spotify.server'; // ✅ Cambiamos getArtist por getArtistData

export const GET: RequestHandler = async ({ params }) => {
    // Obtenemos el objeto completo que incluye artist, albums y singles
    const data = await getArtistData(params.id!);

    console.log(data)
    
    if (!data.artist) {
        return new Response('Artist Not Found', { status: 404 });
    }

    return json(data);
};