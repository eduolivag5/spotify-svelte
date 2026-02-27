import { json } from '@sveltejs/kit';
import { getAlbum } from '$lib/spotify.server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const album = await getAlbum(params.id);
    return json(album);
};