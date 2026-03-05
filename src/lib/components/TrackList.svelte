<script lang="ts">
    import type { SpotifyTrack } from '../../types';

    interface Props {
        tracks: any[]; // Acepta tanto track directo como el objeto envoltorio de playlist
        showAlbumColumn?: boolean;
        showImage?: boolean;
        offset?: number; // Propiedad añadida para la numeración en paginación
    }

    let { tracks, showAlbumColumn = false, showImage = false, offset = 0 }: Props = $props();

    const formatDuration = (ms: number) => {
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
</script>

<table class="w-full text-left border-collapse table-fixed">
    <thead class="sticky top-0 z-20 border-b border-white/5 bg-zinc-900">
        <tr class="text-zinc-500 text-[11px] uppercase tracking-widest font-black">
            <th class="py-4 pl-4 w-12 text-center">#</th>
            <th class="py-4">Título</th>
            {#if showAlbumColumn}
                <th class="py-4 hidden md:table-cell">Álbum</th>
            {/if}
            <th class="py-4 pr-4 text-right w-20 hidden sm:table-cell"> <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current inline-block opacity-40"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
            </th>
        </tr>
    </thead>
    <tbody class="divide-y divide-white/[0.02]">
    {#each tracks as row, i}
        {@const track = (typeof row.track === 'object' ? row.track : null) || row}
        
        {#if track && typeof track === 'object' && track.name}
            <tr class="group transition-colors duration-75 hover:bg-white/[0.03] cursor-pointer">
                <td class="py-4 pl-4 text-zinc-600 group-hover:text-zinc-400 font-mono text-xs text-center">
                    {offset + i + 1}
                </td>
                <td class="py-4 truncate">
                    <div class="flex items-center gap-4 pr-4">
                        {#if showImage && track.album?.images?.[0]?.url}
                            <img src={track.album.images[0].url} alt="" class="w-10 h-10 rounded shadow-md shrink-0 object-cover" />
                        {/if}
                        <div class="flex flex-col truncate">
                            <span class="text-zinc-200 font-semibold truncate group-hover:text-white transition-colors">
                                {track.name}
                            </span>
                            <span class="text-zinc-500 text-xs truncate group-hover:text-zinc-400">
                                {track.artists?.map((a: any) => a.name).join(', ')}
                            </span>
                        </div>
                    </div>
                </td>
                {#if showAlbumColumn}
                    <td class="py-4 hidden md:table-cell truncate">
                        <span class="text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors truncate">
                            {track.album?.name || ''}
                        </span>
                    </td>
                {/if}
                <td class="py-4 pr-4 text-right text-zinc-500 group-hover:text-zinc-300 font-medium text-xs hidden sm:table-cell"> 
                    {formatDuration(track.duration_ms)}
                </td>
            </tr>
        {/if}
    {/each}
</tbody>
</table>

<style>
    table {
        contain: content;
        text-rendering: optimizeLegibility;
    }
    tr {
        contain: layout paint;
    }
</style>