<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Player from '$lib/components/Player.svelte';
    
    let { data, children } = $props();
    let isMenuOpen = $state(false);
</script>

<div class="h-screen w-full bg-[#050505] p-2 md:p-3 flex flex-col md:grid md:grid-cols-[300px_1fr] md:grid-rows-[72px_1fr_100px] gap-2 md:gap-3 overflow-hidden font-sans text-white">
    
    <Navbar bind:isMenuOpen />

    <aside class="
        {isMenuOpen ? 'flex' : 'hidden'} md:flex
        fixed inset-0 top-[80px] z-40 m-2 bg-black/95 md:relative md:top-0 md:m-0 
        flex-col gap-4 overflow-hidden md:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-4 shadow-xl">
        
        <header class="px-4 py-2 text-white/90 font-black text-lg flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-2 h-6 bg-[#1DB954] rounded-full"></div>
                Tu Biblioteca
            </div>
            <button onclick={() => isMenuOpen = false} class="md:hidden text-zinc-400 text-sm font-bold p-2">Cerrar</button>
        </header>
        
        <div class="flex-1 overflow-y-auto space-y-2 pr-2 custom-scroll">
            {#if data.savedAlbums}
                {#each data.savedAlbums as album}
                    <a href="/album/{album.id}" onclick={() => isMenuOpen = false} class="flex items-center gap-4 p-3 hover:bg-white/10 rounded-2xl transition-all group">
                        <img src={album.images[0]?.url} class="w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-2xl object-cover" alt={album.name} />
                        <div class="flex flex-col overflow-hidden">
                            <span class="text-sm font-bold truncate group-hover:text-[#1DB954]">{album.name}</span>
                            <span class="text-xs text-white/40 truncate">Álbum • {album.artists[0]?.name}</span>
                        </div>
                    </a>
                {/each}
            {/if}
        </div>
    </aside>

    <main class="flex-1 md:flex-none bg-white/[0.03] backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-white/5 overflow-y-auto relative p-4 md:p-8 shadow-inner">
        <div class="absolute inset-0 bg-gradient-to-tr from-[#1DB954]/5 to-transparent pointer-events-none"></div>
        {@render children()}
    </main>

    <Player />
</div>

<style>
    :global(body) { background-color: #000; overscroll-behavior-y: contain; }
    .custom-scroll::-webkit-scrollbar { width: 4px; }
    .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
</style>