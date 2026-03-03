<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Player from '$lib/components/Player.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { onMount } from 'svelte';
    
    let { data, children } = $props();
    
    // Configuración de límites para el Sidebar
    const MIN_WIDTH = 300; 
    const MAX_WIDTH = 600;

    let sidebarWidth = $state(300); 
    let isResizing = $state(false);

    onMount(() => {
        const saved = localStorage.getItem('sidebarWidth');
        if (saved) {
            const parsed = parseInt(saved);
            // Validamos que el valor guardado esté dentro de los rangos permitidos
            sidebarWidth = Math.max(MIN_WIDTH, Math.min(parsed, MAX_WIDTH));
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
        if (!isResizing) return;
        
        // Calculamos el nuevo ancho basándonos en la posición del ratón
        // Restamos 16px que suele ser el margen/padding del contenedor externo
        let newWidth = e.clientX - 16; 
        
        if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
            sidebarWidth = newWidth;
        }
    }
</script>

<svelte:window onmousemove={onMouseMove} onmouseup={stopResizing} />

<div class="min-h-screen w-full bg-[#050505] font-sans text-white relative
            md:h-screen md:grid md:p-4 md:gap-4 md:overflow-hidden"
    style="grid-template-columns: {sidebarWidth}px 4px 1fr; grid-template-rows: auto 1fr auto;">
    
    <div class="hidden md:block col-span-3">
        <Navbar />
    </div>

    <div class="hidden md:flex flex-col min-h-0 
                bg-white/[0.03] backdrop-blur-md
                rounded-3xl border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
        <Sidebar {data} />
    </div>

    <div onmousedown={startResizing} role="none" 
        class="hidden md:flex w-[4px] cursor-col-resize items-center justify-center group z-50">
        <div class="w-[1px] transition-all duration-300 
            {isResizing ? 'bg-[#1DB954] h-full shadow-[0_0_15px_#1DB954]' : 'bg-white/5 h-12 group-hover:bg-white/20'}">
        </div>
    </div>

    <main class="relative w-full pt-4 pb-32 px-4 
                 md:px-8 md:p-8 md:overflow-y-auto 
                 md:bg-white/[0.03] md:backdrop-blur-md
                 rounded-none md:rounded-3xl
                 md:border md:border-white/10
                 md:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {@render children()}
    </main>

    <div class="md:col-span-3">
        <div class="hidden md:block"> 
            <Player />
        </div>
        
        <div class="md:hidden fixed bottom-6 left-0 right-0 px-4 z-[110] pointer-events-none">
            <div class="pointer-events-auto">
                <Navbar />
            </div>
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
        transform: translateZ(0);
        will-change: scroll-position;
    }
    
    main::-webkit-scrollbar {
        display: none;
    }
</style>