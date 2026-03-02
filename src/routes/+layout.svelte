<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Player from '$lib/components/Player.svelte';
    import { onMount } from 'svelte';
    
    let { data, children } = $props();
    let isMenuOpen = $state(false);

    // Estado para el ancho del sidebar
    let sidebarWidth = $state(300); 
    let isResizing = $state(false);

    const minWidth = 200;
    const maxWidth = 600;

    // Cargar ancho guardado al montar
    onMount(() => {
        const saved = localStorage.getItem('sidebarWidth');
        if (saved) sidebarWidth = parseInt(saved);
    });

    function startResizing(e: MouseEvent) {
        isResizing = true;
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
    }

    function stopResizing() {
        if (!isResizing) return;
        isResizing = false;
        document.body.style.userSelect = 'auto';
        document.body.style.cursor = 'auto';
        localStorage.setItem('sidebarWidth', sidebarWidth.toString());
    }

    function onMouseMove(e: MouseEvent) {
        if (!isResizing) return;
        let newWidth = e.clientX - 12; // Compensamos el padding del contenedor
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            sidebarWidth = newWidth;
        }
    }
</script>

<svelte:window onmousemove={onMouseMove} onmouseup={stopResizing} />

<div 
    class="h-screen w-full bg-[#050505] p-2 md:p-3 flex flex-col md:grid gap-2 overflow-hidden font-sans text-white"
    style="grid-template-columns: {sidebarWidth}px 8px 1fr; grid-template-rows: 72px 1fr 100px;"
>
    
    <div class="col-span-3">
        <Navbar bind:isMenuOpen />
    </div>

    <aside class="
        {isMenuOpen ? 'flex' : 'hidden'} md:flex
        fixed inset-0 top-[80px] z-40 m-2 bg-black/95 md:relative md:top-0 md:m-0 
        flex-col gap-4 overflow-hidden md:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-4 shadow-xl">
        
        <header class="px-4 py-2 text-white/90 font-black text-lg flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-2 h-6 bg-[#1DB954] rounded-full"></div>
                <span class="truncate">Tu Biblioteca</span>
            </div>
            <button onclick={() => isMenuOpen = false} class="md:hidden text-zinc-400 text-sm font-bold p-2">Cerrar</button>
        </header>
        
        <div class="flex-1 overflow-y-auto space-y-1 pr-2 custom-scroll">
            {#if data.savedAlbums}
                {#each data.savedAlbums as album}
                    <a href="/album/{album.id}" onclick={() => isMenuOpen = false} class="flex items-center gap-4 p-1 hover:bg-white/10 rounded-2xl transition-all group">
                        <img src={album.images[0]?.url} class="w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-2xl object-cover shrink-0" alt={album.name} />
                        <div class="flex flex-col overflow-hidden">
                            <span class="text-sm font-bold truncate group-hover:text-[#1DB954]">{album.name}</span>
                            <span class="text-xs text-white/40 truncate">Álbum • {album.artists[0]?.name}</span>
                        </div>
                    </a>
                {/each}
            {/if}
        </div>
    </aside>

    <div 
        role="slider"
        aria-label="Ancho de la biblioteca"
        aria-valuenow={sidebarWidth}
        aria-valuemin={minWidth}
        aria-valuemax={maxWidth}
        tabindex="0"
        onmousedown={startResizing}
        onkeydown={(e) => {
            if (e.key === 'ArrowLeft') sidebarWidth = Math.max(minWidth, sidebarWidth - 10);
            if (e.key === 'ArrowRight') sidebarWidth = Math.min(maxWidth, sidebarWidth + 10);
        }}
        class="hidden md:flex w-[8px] group cursor-col-resize items-center justify-center transition-all z-50 focus:outline-none"
    >
        <div class="w-[2px] h-12 rounded-full bg-white/0 group-hover:bg-[#1DB954]/50 
                    {isResizing ? 'bg-[#1DB954] h-24' : ''} 
                    group-focus:bg-[#1DB954]/50 transition-all duration-300">
        </div>
    </div>

    <main class="main-scroll flex-1 md:flex-none bg-white/[0.03] backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-white/5 overflow-y-auto relative p-4 md:p-8 shadow-inner">
        {@render children()}
    </main>

    <div class="col-span-3 flex items-center justify-center overflow-hidden">
        <Player />
    </div>
</div>

<style>
    /* ... Tus estilos de scrollbar se mantienen iguales ... */
    :global(body) { 
        background-color: #000; 
        overscroll-behavior-y: contain; 
    }
    .custom-scroll::-webkit-scrollbar, .main-scroll::-webkit-scrollbar { width: 14px; }
    .custom-scroll::-webkit-scrollbar-button, .main-scroll::-webkit-scrollbar-button { display: none; }
    .custom-scroll::-webkit-scrollbar-thumb, .main-scroll::-webkit-scrollbar-thumb { 
        border: 4px solid transparent; background-clip: padding-box; border-radius: 12px; background-color: transparent; transition: background-color 0.2s ease;
    }
    aside:hover .custom-scroll::-webkit-scrollbar-thumb, .main-scroll:hover::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.15); }
    .custom-scroll::-webkit-scrollbar-thumb:hover, .main-scroll::-webkit-scrollbar-thumb:hover { background-color: rgba(255, 255, 255, 0.3) !important; }
    .main-scroll { scrollbar-gutter: stable; }
</style>