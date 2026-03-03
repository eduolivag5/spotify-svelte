<script lang="ts">
    import AlbumGrid from '$lib/components/AlbumGrid.svelte';
    
    let { data } = $props();

    const artist = $derived(data.artist);
    const albums = $derived(data.albums || []);
    const singles = $derived(data.singles || []);

    let activeFilter = $state('todos');

    const filteredDiscography = $derived(() => {
        if (activeFilter === 'albumes') return albums;
        if (activeFilter === 'singles') return singles;
        return [...albums, ...singles];
    });

    const filters = [
        { id: 'todos', label: 'Todos' },
        { id: 'albumes', label: 'Álbumes' },
        { id: 'singles', label: 'Sencillos y EPs' }
    ];
</script>

<svelte:head>
    <title>{artist.name} | Spotify</title>
</svelte:head>

<div class="w-full bg-transparent text-zinc-100">
    
    <header class="relative p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8 overflow-hidden">
        <div class="shrink-0 relative">
            <img 
                src={artist.images[0]?.url} 
                alt={artist.name}
                class="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border border-white/5 z-10"
                loading="eager"
            />
        </div>

        <div class="relative z-10 flex flex-col gap-2 text-center md:text-left w-full">
            <div class="flex items-center justify-center md:justify-start gap-2 text-[#1DB954]">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span class="text-[10px] font-bold uppercase tracking-[0.2em]">Artista verificado</span>
            </div>
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none break-words">
                {artist.name}
            </h1>
        </div>
    </header>

    <div class="flex items-center justify-center md:justify-start gap-6 px-8 py-8 relative">
        <button aria-label="Reproducir" class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1DB954] flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl">
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-black translate-x-0.5"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button class="px-8 py-2.5 border border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95">
            Seguir
        </button>
    </div>

    <nav class="sticky top-0 z-30 px-8 py-4 mb-4 flex gap-2 overflow-x-auto no-scrollbar bg-transparent">
        {#each filters as filter}
            <button 
                onclick={() => activeFilter = filter.id}
                class="relative px-4 py-1.5 rounded-full
                    text-[10px] font-bold uppercase tracking-[0.15em]
                    transition-all duration-300
                    backdrop-blur-sm border
                    will-change-transform active:scale-95 whitespace-nowrap
                    {activeFilter === filter.id 
                        ? 'bg-white text-black border-white shadow-lg' 
                        : 'bg-white/[0.02] text-zinc-400 hover:bg-white/[0.06] hover:text-white border-white/5 border-t-white/10 hover:border-white/20'}"
            >
                <span class="relative z-10">{filter.label}</span>
            </button>
        {/each}
    </nav>

    <main class="flex flex-col gap-12 px-6 md:px-8 pb-32 relative z-10">
        <section>
            <AlbumGrid 
                title={filters.find(f => f.id === activeFilter)?.label} 
                albums={filteredDiscography()} 
            />
        </section>

        {#if filteredDiscography().length === 0}
            <div class="py-20 text-center opacity-40 uppercase tracking-[0.2em] text-[10px] font-bold">
                Sin resultados
            </div>
        {/if}
    </main>
</div>

<style>
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    /* Optimizaciones de renderizado para evitar saltos en el sticky */
    nav {
        transform: translateZ(0);
    }
</style>