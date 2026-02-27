<script lang="ts">
    let { data } = $props();

    const playlist = $derived(data.playlist);
    
    // Lógica de tracks robusta y reactiva
    const trackRows = $derived(
        playlist.tracks?.items ?? 
        (playlist as any).items?.items ?? 
        []
    );

    const formatDuration = (ms: number) => {
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
</script>

<div class="relative w-full min-h-full">
    <header class="relative h-[45vh] min-h-[380px] flex items-end px-8 pb-10 gap-8 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src={playlist.images?.[0]?.url} alt="" class="w-full h-full object-cover blur-[120px] saturate-[1.8] opacity-40 scale-125" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20"></div>
        </div>

        <div class="shrink-0 z-10 relative group">
            <img 
                src={playlist.images?.[0]?.url} 
                alt={playlist.name}
                class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1"
                style="will-change: transform; transform: translateZ(0);"
            />
        </div>

        <div class="flex flex-col gap-4 z-10 mb-2">
            <span class="px-3 py-1 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/80 w-fit">
                Playlist
            </span>
            <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white drop-shadow-2xl">
                {playlist.name}
            </h1>
            <div class="text-white/50 text-sm font-medium max-w-2xl line-clamp-2 leading-relaxed drop-shadow-md">
                {@html playlist.description || ''}
            </div>
        </div>
    </header>

    <div class="px-8 pt-6 pb-24 relative z-10">
        <div class="bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
            <table class="w-full text-left border-separate border-spacing-0">
                <thead>
                    <tr class="text-white/30 text-[11px] font-black uppercase tracking-[0.15em] border-b border-white/5">
                        <th class="py-6 pl-8 w-16">#</th>
                        <th class="py-6">Título</th>
                        <th class="py-6 hidden md:table-cell">Álbum</th>
                        <th class="py-6 pr-8 text-right">
                             <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current inline-block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-sm">
                    {#each trackRows as row, i}
                        {@const track = row.track || row.item}
                        {#if track}
                            <tr class="group hover:bg-white/[0.08] transition-all duration-300 cursor-default relative">
                                <td class="py-4 pl-8 text-white/20 group-hover:text-white/90 transition-colors rounded-l-2xl">
                                    {i + 1}
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center gap-4">
                                        <div class="relative w-12 h-12 shrink-0 overflow-hidden rounded-xl shadow-lg">
                                            <img 
                                                src={track.album?.images?.[0]?.url} 
                                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                alt="" 
                                                loading="lazy"
                                            />
                                        </div>
                                        <div class="flex flex-col overflow-hidden">
                                            <span class="text-white font-bold truncate group-hover:text-[#1DB954] transition-colors tracking-tight">
                                                {track.name}
                                            </span>
                                            <span class="text-white/40 text-xs font-semibold group-hover:text-white/70 transition-colors">
                                                {track.artists?.map(a => a.name).join(', ')}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4 hidden md:table-cell">
                                    <span class="text-white/40 group-hover:text-white/70 transition-colors font-medium">
                                        {track.album?.name}
                                    </span>
                                </td>
                                <td class="py-4 pr-8 text-right text-white/30 group-hover:text-white font-mono rounded-r-2xl">
                                    {formatDuration(track.duration_ms)}
                                </td>
                            </tr>
                        {/if}
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    /* Optimizaciones GPU */
    tr {
        contain: layout paint;
        transform: translateZ(0); /* Capa de composición propia */
    }

    /* Efecto LiquidGlass de "selección fundida" */
    tr::after {
        content: '';
        position: absolute;
        inset: 4px;
        background: linear-gradient(90deg, rgba(255,255,255,0.05), transparent);
        opacity: 0;
        border-radius: 1.5rem;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    tr:hover::after {
        opacity: 1;
    }
</style>