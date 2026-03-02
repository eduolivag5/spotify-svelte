<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Player from '$lib/components/Player.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { onMount } from 'svelte';
    
    let { data, children } = $props();
    let isMenuOpen = $state(false);
    
    let sidebarContentEl = $state<HTMLElement>(); 
    let sidebarWidth = $state(300); 
    let isResizing = $state(false);

    onMount(() => {
        const saved = localStorage.getItem('sidebarWidth');
        if (saved) {
            const parsed = parseInt(saved);
            sidebarWidth = parsed < 180 ? 300 : parsed;
        }
    });

    function startResizing() {
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
        if (!isResizing || !sidebarContentEl) return;
        const minWidthNeeded = sidebarContentEl.offsetWidth;
        let newWidth = e.clientX - 16; 
        if (newWidth >= minWidthNeeded && newWidth <= 600) {
            sidebarWidth = newWidth;
        }
    }
</script>

<svelte:window onmousemove={onMouseMove} onmouseup={stopResizing} />

<div class="min-h-screen w-full bg-[#050505] font-sans text-white relative
            md:h-screen md:grid md:p-2 md:gap-2 md:overflow-hidden"
    style="grid-template-columns: {sidebarWidth}px 4px 1fr; grid-template-rows: auto 1fr auto;">
    
    <div class="hidden md:block col-span-3">
        <Navbar bind:isMenuOpen />
    </div>

    <Sidebar {data} bind:isMenuOpen bind:contentEl={sidebarContentEl} />

    <div onmousedown={startResizing} role="none" 
        class="hidden md:flex w-[4px] cursor-col-resize items-center justify-center group z-50">
        <div class="w-[1px] transition-all duration-300 {isResizing ? 'bg-[#1DB954] h-full shadow-[0_0_15px_#1DB954]' : 'bg-white/5 h-12 group-hover:bg-white/20'}"></div>
    </div>

    <main class="relative w-full pt-4 pb-32 px-4 
             md:px-8 md:p-8 md:overflow-y-auto 
             bg-transparent md:bg-white/[0.03] md:backdrop-blur-md
             rounded-none md:rounded-3xl
             md:border md:border-white/10
             md:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
    {@render children()}
</main>

<div class="md:col-span-3">
    <div class="hidden md:block"> 
        <Player />
    </div>
    
    <div class="md:hidden fixed bottom-0 left-0 right-0 p-4 z-[110] bg-[#050505]/95 backdrop-blur-xl border-t border-white/5">
        <Navbar bind:isMenuOpen />
    </div>
</div>
</div>

<style>
    :global(html, body) { 
        background-color: #050505;
        overscroll-behavior-y: none;
    }

    main {
        scrollbar-width: none;
        -ms-overflow-style: none;
        /* Optimización GPU para scroll */
        transform: translateZ(0);
        will-change: scroll-position;
    }
    main::-webkit-scrollbar {
        display: none;
    }
</style>