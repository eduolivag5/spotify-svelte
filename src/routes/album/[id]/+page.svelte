<script lang="ts">
    let { data } = $props();

    const album = $derived(data.album);
    const tracks = $derived(data.tracks);

    const formatDuration = (ms: number) => {
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
</script>

<div class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden">
    <header class="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8">
        <div class="relative shrink-0">
            <img 
                src={album.images[0]?.url} 
                alt={album.name}
                class="w-48 h-48 md:w-60 md:h-60 object-cover shadow-2xl rounded-lg"
                loading="eager"
            />
        </div>

        <div class="flex flex-col gap-2 w-full text-center md:text-left">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954]">Álbum</span>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none truncate">
                {album.name}
            </h1>
            <div class="flex items-center justify-center md:justify-start gap-3 mt-2 text-sm font-bold text-zinc-400">
                <span class="text-zinc-100 hover:underline cursor-pointer transition-colors">{album.artists[0].name}</span>
                <span class="opacity-20">•</span>
                <span class="font-medium">{new Date(album.release_date).getFullYear()}</span>
                <span class="opacity-20">•</span>
                <span class="font-medium">{album.total_tracks} canciones</span>
            </div>
        </div>
    </header>

    <main class="px-4 md:px-8 pb-20">
        <table class="w-full text-left border-collapse table-fixed">
            <thead class="sticky top-0 z-20 border-b border-zinc-800/50 bg-zinc-900">
                <tr class="text-zinc-500 text-[11px] uppercase tracking-widest font-black">
                    <th class="py-4 pl-4 w-12">#</th>
                    <th class="py-4">Título</th>
                    <th class="py-4 pr-4 text-right w-20">
                        <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current inline-block opacity-40"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-zinc-900/50">
                {#each tracks as track, i}
                    <tr class="group transition-colors duration-75">
                        <td class="py-4 pl-4 text-zinc-600 group-hover:text-zinc-400 font-mono text-xs">
                            {i + 1}
                        </td>
                        <td class="py-4 truncate">
                            <div class="flex flex-col truncate pr-4">
                                <span class="text-zinc-200 font-semibold truncate group-hover:text-white transition-colors">
                                    {track.name}
                                </span>
                                <span class="text-zinc-500 text-xs truncate group-hover:text-zinc-400">
                                    {track.artists.map(a => a.name).join(', ')}
                                </span>
                            </div>
                        </td>
                        <td class="py-4 pr-4 text-right text-zinc-500 group-hover:text-zinc-300 font-medium text-xs">
                            {formatDuration(track.duration_ms)}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </main>
</div>

<style>
    /* Eliminamos cualquier filtro de blur que castigue la GPU */
    :global(html) {
        scrollbar-gutter: stable;
    }

    /* Optimización de tabla */
    table {
        contain: content;
        text-rendering: optimizeLegibility;
    }

    tr {
        contain: layout paint;
    }

    /* Scrollbar ultra-simple */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #2a2a2a;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #333;
    }
</style>