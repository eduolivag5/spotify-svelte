<script lang="ts">
    let { data, isMenuOpen = $bindable(), contentEl = $bindable() } = $props();
</script>

<aside 
    class="fixed inset-0 z-[150] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
    {isMenuOpen ? 'translate-y-0' : 'translate-y-full'} 
    md:relative md:translate-y-0 md:flex md:z-auto
    flex flex-col overflow-hidden bg-black/95 backdrop-blur-3xl
    md:bg-white/[0.03] md:border md:border-white/10 md:rounded-[2.5rem] will-change-transform">
    
    <div bind:this={contentEl} class="flex flex-col h-full w-max"> 
        <header class="px-6 py-8 md:py-5 flex items-center shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-1 h-5 bg-[#1DB954] rounded-full shadow-[0_0_10px_rgba(29,185,84,0.3)] shrink-0"></div>
                <span class="text-lg font-bold tracking-tight text-white/90 whitespace-nowrap">
                    Tu Biblioteca
                </span>
            </div>
            <button onclick={() => isMenuOpen = false} class="md:hidden ml-auto px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/5">
                Cerrar
            </button>
        </header>
        
        <div class="flex-1 overflow-y-auto px-3 pb-32 md:pb-4 space-y-1 custom-scroll">
            {#if data.savedAlbums}
                {#each data.savedAlbums as album}
                    <a href="/album/{album.id}" 
                       onclick={() => isMenuOpen = false} 
                       class="flex items-center gap-3 p-2 rounded-xl transition-all duration-300 group 
                              hover:bg-white/[0.04] border border-transparent hover:border-white/5 hover:border-t-white/10">
                        
                        <div class="relative shrink-0">
                            <img src={album.images[0]?.url} 
                                 class="w-12 h-12 md:w-10 md:h-10 rounded-lg object-cover shrink-0 z-0" 
                                 alt={album.name} 
                                 loading="lazy"
                            />
                            <div class="absolute inset-0 rounded-lg border border-white/10 border-t-white/20 pointer-events-none"></div>
                        </div>

                        <div class="flex flex-col min-w-0 pr-4">
                            <span class="text-sm font-medium text-white/80 group-hover:text-[#1DB954] transition-colors truncate whitespace-nowrap">
                                {album.name}
                            </span>
                            <span class="text-[11px] text-white/30 truncate whitespace-nowrap uppercase tracking-wider">
                                {album.artists[0]?.name}
                            </span>
                        </div>
                    </a>
                {/each}
            {/if}
        </div>
    </div>
</aside>

<style>
    /* Optimización de Scroll para GPU */
    .custom-scroll {
        scrollbar-width: none;
        -ms-overflow-style: none;
        -webkit-overflow-scrolling: touch;
        /* Mejora el rendimiento al renderizar listas largas */
        content-visibility: auto;
    }
    .custom-scroll::-webkit-scrollbar {
        display: none;
    }

    aside {
        /* Fuerza renderizado en capa independiente */
        transform: translateZ(0);
        contain: layout paint;
    }
</style>