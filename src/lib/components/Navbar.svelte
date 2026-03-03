<script lang="ts">
    import { page } from '$app/stores';
    let { isMenuOpen = $bindable() } = $props();
    let isSearchOpen = $state(false);

    function focusOnMount(node: HTMLInputElement) {
        if (!node.disabled) node.focus();
    }

    // Función auxiliar para verificar si la ruta está activa
    const isActive = (path: string) => $page.url.pathname === path;
</script>

<div class="md:hidden flex flex-col gap-3 w-full max-w-[94vw] mx-auto">
    {#if isSearchOpen}
        <div class="px-2 animate-in fade-in zoom-in-95 duration-300">
            <div class="relative">
                <div class="absolute inset-y-0 left-4 flex items-center text-white/40">
                    <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                </div>
                <input 
                    disabled
                    type="text"
                    use:focusOnMount
                    placeholder="¿Qué te apetece escuchar?" 
                    class="w-full bg-black/20 backdrop-blur-3xl border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-sm outline-none text-white/40"
                />
            </div>
        </div>
    {/if}

    <nav class="relative flex items-center justify-around h-16 
        bg-black/25 
        backdrop-blur-2xl 
        border border-white/15 
        rounded-[2rem] 
        px-2 
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        overflow-hidden">
        
        <div class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

        <a href="/" 
           class="z-10 flex flex-col items-center gap-0.5 transition-all active:scale-90 min-w-[60px] 
           {isActive('/') ? 'text-[#1DB954]' : 'text-zinc-400'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span class="text-[8px] font-bold uppercase tracking-widest">Inicio</span>
        </a>

        <button disabled 
            class="z-10 flex flex-col items-center gap-0.5 opacity-20 cursor-not-allowed min-w-[60px]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span class="text-[8px] font-bold uppercase tracking-widest">Buscar</span>
        </button>

        <a href="/library" 
            class="z-10 flex flex-col items-center gap-0.5 transition-all active:scale-90 min-w-[60px] 
            {isActive('/library') ? 'text-[#1DB954]' : 'text-zinc-400'}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <span class="text-[8px] font-bold uppercase tracking-widest">Librería</span>
        </a>

        <a href="/profile" 
           class="z-10 flex flex-col items-center gap-0.5 transition-all active:scale-90 min-w-[60px]
           {isActive('/profile') ? 'text-[#1DB954]' : 'text-zinc-400'}">
            <div class="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-[8px] text-black font-black shadow-lg {isActive('/profile') ? 'ring-2 ring-[#1DB954] ring-offset-2 ring-offset-black/20' : ''}">
                E
            </div>
            <span class="text-[8px] font-bold uppercase tracking-widest">Perfil</span>
        </a>
    </nav>
</div>

<nav class="hidden md:flex h-14 items-center justify-between px-6 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 transition-all duration-500">
    <div class="flex items-center gap-8">
        <a href="/" aria-label="Inicio" class="hover:scale-105 transition-all {isActive('/') ? 'text-[#1DB954]' : 'text-white/40 hover:text-white/70'}">
            <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current drop-shadow-[0_0_8px_rgba(29,185,84,0.4)]">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.465-1.027.249-2.858-1.747-6.456-2.142-10.693-1.173-.404.092-.811-.159-.904-.562-.092-.403.159-.811.562-.904 4.634-1.06 8.608-.611 11.813 1.347.353.216.464.675.249 1.027zm1.467-3.258c-.271.44-.846.577-1.286.307-3.272-2.012-8.259-2.593-12.127-1.417-.497.151-1.023-.127-1.174-.624-.151-.498.127-1.023.624-1.174 4.417-1.34 9.904-.69 13.656 1.62.44.272.578.846.307 1.288zm.127-3.39c-3.924-2.33-10.404-2.545-14.175-1.4c-.602.183-1.238-.162-1.421-.764-.183-.603.162-1.238.764-1.421 4.331-1.315 11.488-1.065 15.991 1.609.541.321.718 1.02.397 1.56-.321.541-1.02.719-1.56.398z"/>
            </svg>
        </a>
        <div class="relative opacity-20 pointer-events-none">
            <div class="absolute inset-y-0 left-4 flex items-center text-white/20">
                <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <input disabled type="text" placeholder="¿Qué te apetece escuchar?" class="bg-white/5 border border-white/5 rounded-full py-1.5 pl-10 pr-4 w-[280px] text-xs outline-none" />
        </div>
    </div>
    <a href="/profile" class="flex items-center gap-2.5 p-1 pr-3 rounded-full hover:bg-white/5 transition-all group {isActive('/profile') ? 'bg-white/5' : ''}">
        <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-[10px] text-black font-black shadow-inner {isActive('/profile') ? 'ring-2 ring-[#1DB954]' : ''}">
            E
        </div>
        <span class="text-[10px] font-bold uppercase tracking-widest transition-colors {isActive('/profile') ? 'text-[#1DB954]' : 'text-white/40 group-hover:text-white/80'}">Perfil</span>
    </a>
</nav>