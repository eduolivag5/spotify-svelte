<script lang="ts">
    import type { SpotifyAlbum } from '../../types';

    let { album } = $props<{ album: SpotifyAlbum | null }>();

    // Usamos un fallback seguro para evitar que topTracks rompa el renderizado
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
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#282828] to-[#121212] p-6 md:p-10 mb-8 border border-white/5 group shadow-2xl">
            <div class="flex flex-col md:flex-row gap-10 items-start relative z-10">
                
                <div class="flex-shrink-0 mx-auto md:mx-0">
                    <div class="relative group/cover">
                        <img 
                            src={album.images[0].url} 
                            alt={album.name} 
                            class="w-64 h-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-lg object-cover" 
                        />
                    </div>
                </div>

                <div class="flex-1 flex flex-col w-full h-full">
                    <header class="mb-6">
                        <span class="text-xs font-bold uppercase tracking-[0.3em] text-[#1DB954] mb-3 block">Álbum Recomendado</span>
                        <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight mb-2 truncate">
                            {album.name}
                        </h2>
                        <div class="flex items-center gap-2 text-white/70 font-bold">
                            <span class="hover:underline cursor-pointer transition-all">{album.artists[0]?.name ?? 'Artista'}</span>
                            <span class="text-white/20">•</span>
                            <span>{album.release_date?.split('-')[0] ?? ''}</span>
                        </div>
                    </header>

                    <div class="flex flex-col gap-0.5">
                        {#each topTracks as track, i (track.id)} <div class="flex items-center gap-4 p-3 rounded-md hover:bg-white/5 transition-colors group/track cursor-pointer">
                                <span class="text-white/30 text-sm font-bold w-4">{i + 1}</span>
                                <div class="flex-1 min-w-0">
                                    <p class="text-white text-sm font-semibold truncate">{track.name}</p>
                                </div>
                                <span class="text-white/30 text-xs font-mono group-hover/track:text-white/60">
                                    {formatDuration(track.duration_ms)}
                                </span>
                            </div>
                        {/each}
                    </div>

                    <div class="mt-auto pt-6">
                        <a href="/album/{album.id}" class="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2">
                            Ver álbum completo
                            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1DB954]/5 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
    {/if}
</div>