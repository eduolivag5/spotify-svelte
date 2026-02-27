<script lang="ts">
    import AlbumGrid from '$lib/components/AlbumGrid.svelte';
    
    let { data } = $props();

    const artist = $derived(data.artist);
    const albums = $derived(data.albums);
    const singles = $derived(data.singles);
</script>

<svelte:head>
    <title>{artist.name} | Spotify</title>
</svelte:head>

<div class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden">
    <header class="relative p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8 border-b border-white/[0.02]">
        <div class="shrink-0 relative">
            <img 
                src={artist.images[0]?.url} 
                alt={artist.name}
                class="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white/5"
                loading="eager"
            />
        </div>

        <div class="flex flex-col gap-2 text-center md:text-left w-full overflow-hidden">
            <div class="flex items-center justify-center md:justify-start gap-2 text-[#1DB954]">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span class="text-[10px] font-black uppercase tracking-[0.2em]">Artista verificado</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none truncate">
                {artist.name}
            </h1>
        </div>
    </header>

    <div class="flex items-center justify-center md:justify-start gap-6 px-8 py-8">
        <button 
            aria-label="Reproducir {artist.name}"
            class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1DB954] flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-black translate-x-0.5" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        </button>
        
        <button class="px-8 py-2.5 border border-zinc-800 rounded-full text-xs font-black uppercase tracking-widest hover:border-zinc-600 transition-all active:scale-95">
            Seguir
        </button>
        
        <button 
            aria-label="Más opciones para {artist.name}"
            class="text-zinc-500 hover:text-white transition-colors p-2"
        >
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-current" aria-hidden="true"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
    </div>

    <main class="flex flex-col gap-12 px-6 md:px-8 pb-32">
        {#if albums.length > 0}
            <section aria-labelledby="albums-title">
                <AlbumGrid title="Discografía" {albums} />
            </section>
        {/if}

        {#if singles.length > 0}
            <section aria-labelledby="singles-title">
                <AlbumGrid title="Sencillos y EPs" albums={singles} />
            </section>
        {/if}
    </main>
</div>

<style>
    /* Optimizaciones de renderizado final */
    :global(html) {
        scrollbar-gutter: stable;
        background-color: #0a0a0a;
    }

    /* Forzamos a que el navegador trate estas secciones como capas independientes */
    header, main {
        contain: layout style;
    }

    /* Reducimos el coste de pintura del avatar */
    img {
        content-visibility: auto;
        transform: translateZ(0); /* Hint para composición por GPU */
    }

    /* Scrollbar ultra-ligera */
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #222;
        border-radius: 10px;
    }
</style>