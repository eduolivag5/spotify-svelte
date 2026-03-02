<script lang="ts">
    import type { SpotifyAlbum } from '../../types';

    let { album } = $props<{ album: SpotifyAlbum | null }>();

    const topTracks = $derived(album?.tracks?.items?.slice(0, 3) ?? []);

    function formatDuration(ms: number | undefined) {
        if (!ms) return '0:00';
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
</script>

<div class="highlighted-album-container">
    {#if album && album.images && album.images.length > 0}
        <div class="relative overflow-hidden rounded-3xl bg-zinc-900/20 p-6 md:p-10 mb-8 border border-white/5 group shadow-lg transition-all hover:border-white/10">
            <div class="flex flex-col md:flex-row gap-10 items-start relative z-10">
                
                <div class="flex-shrink-0 mx-auto md:mx-0">
                    <div class="relative group/cover">
                        <img 
                            src={album.images[0].url} 
                            alt={album.name} 
                            class="w-64 h-64 shadow-[0_10px_15px_rgba(0,0,0,0.3)] rounded-lg object-cover" 
                        />
                    </div>
                </div>

                <div class="flex-1 flex flex-col w-full h-full">
                    <header class="mb-6">
                        <span class="text-[10px] font-black uppercase tracking-[0.4em] text-[#1DB954] mb-3 block">Álbum Recomendado</span>
                        <h2 class="text-3xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-2">
                            {album.name}
                        </h2>
                        <div class="flex items-center gap-2 text-zinc-400 font-bold text-sm">
                            <span class="text-white hover:underline cursor-pointer transition-all">{album.artists[0]?.name ?? 'Artista'}</span>
                            <span class="opacity-20">•</span>
                            <span class="font-medium">{album.release_date?.split('-')[0] ?? ''}</span>
                        </div>
                    </header>

                    <div class="flex flex-col gap-0.5">
                        {#each topTracks as track, i (track.id)} 
                            <div class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors group/track cursor-pointer">
                                <span class="text-zinc-600 text-xs font-mono w-4">{i + 1}</span>
                                <div class="flex-1 min-w-0">
                                    <p class="text-zinc-200 text-sm font-semibold truncate group-hover/track:text-white transition-colors">{track.name}</p>
                                </div>
                                <span class="text-zinc-500 text-xs font-mono group-hover/track:text-zinc-300">
                                    {formatDuration(track.duration_ms)}
                                </span>
                            </div>
                        {/each}
                    </div>

                    <div class="mt-8 pt-4">
                        <a href="/album/{album.id}" class="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-all group/link">
                            Ver álbum completo
                            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current transform group-hover/link:translate-x-1 transition-transform"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1DB954]/5 rounded-full blur-[100px] pointer-events-none opacity-40"></div>
        </div>
    {/if}
</div>