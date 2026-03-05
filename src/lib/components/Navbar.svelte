<script lang="ts">
    import { page } from '$app/stores';
    import { crossfade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    const [send, receive] = crossfade({
        duration: 400,
        easing: cubicOut
    });

    const isActive = (path: string) => $page.url.pathname === path;

    const menuItems = [
        { path: '/', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { path: '/library', label: 'Librería', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { path: '/profile', label: 'Perfil', isProfile: true }
    ];
</script>

<header class="hidden md:flex w-full h-12 items-center justify-between px-4">
    <a href="/" class="flex items-center gap-2 text-white min-w-[160px] hover:opacity-80 transition-opacity active:scale-95 duration-200">
        <svg viewBox="0 0 24 24" class="w-7 h-7 fill-[#1DB954]">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.465-1.027.249-2.858-1.747-6.456-2.142-10.693-1.173-.404.092-.811-.159-.904-.562-.092-.403.159-.811.562-.904 4.634-1.06 8.608-.611 11.813 1.347.353.216.464.675.249 1.027zm1.467-3.258c-.271.44-.846.577-1.286.307-3.272-2.012-8.259-2.593-12.127-1.417-.497.151-1.023-.127-1.174-.624-.151-.498.127-1.023.624-1.174 4.417-1.34 9.904-.69 13.656 1.62.44.272.578.846.307 1.288zm.127-3.39c-3.924-2.33-10.404-2.545-14.175-1.4c-.602.183-1.238-.162-1.421-.764-.183-.603.162-1.238.764-1.421 4.331-1.315 11.488-1.065 15.991 1.609.541.321.718 1.02.397 1.56-.321.541-1.02.719-1.56.398z"/>
        </svg>
        <span class="font-black text-base tracking-tighter">Spotify</span>
    </a>

    <div class="flex-1 max-w-md mx-auto">
        <div class="relative opacity-40 cursor-not-allowed">
            <div class="absolute inset-y-0 left-3.5 flex items-center text-white/30">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>
            <input 
                type="text" 
                disabled
                placeholder="¿Qué te apetece escuchar?" 
                class="w-full bg-white/[0.05] border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-xs text-white/50 outline-none cursor-not-allowed"
            />
        </div>
    </div>

    <div class="min-w-[160px] flex justify-end">
        <a href="/profile" class="flex items-center gap-2 p-0.5 pr-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] transition-all group">
            <div class="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-[9px] text-black font-black">
                E
            </div>
            <span class="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors">Perfil</span>
        </a>
    </div>
</header>

<div class="md:hidden fixed bottom-6 left-0 right-0 px-4 z-[100] flex items-center justify-center gap-2.5 max-w-[480px] mx-auto pointer-events-none">
    
    <nav class="relative flex-[4] flex items-center justify-around h-[64px] 
        bg-zinc-800/50 backdrop-blur-2xl 
        border border-white/10 
        rounded-[24px] px-1.5 
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        pointer-events-auto">
        
        {#each menuItems as item}
            <a href={item.path} 
               class="relative flex flex-col items-center justify-center flex-1 h-[52px] z-10 transition-all duration-300
               {isActive(item.path) ? 'scale-105' : 'opacity-70'}">
                
                {#if isActive(item.path)}
                    <div 
                        in:receive={{ key: 'active-pill' }}
                        out:send={{ key: 'active-pill' }}
                        class="absolute inset-0 bg-white/10 rounded-[18px] -z-10 mx-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    </div>
                {/if}

                {#if item.isProfile}
                    <div class="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center text-[9px] text-black font-black">
                        E
                    </div>
                {:else}
                    <svg class="w-5 h-5 transition-colors" 
                        fill='none'
                        stroke={isActive(item.path) ? '#60a5fa' : 'white'} 
                        stroke-width="2" 
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d={item.icon}/>
                    </svg>
                {/if}
                
                <span class={`${isActive(item.path) ? 'text-blue-400' : 'text-white'} text-[9px] font-bold uppercase tracking-tight mt-1`}>
                    {item.label}
                </span>
            </a>
        {/each}
    </nav>

    <button aria-label="Buscar" disabled class="w-[64px] h-[64px] flex items-center justify-center bg-zinc-800/50 backdrop-blur-2xl border border-white/10 rounded-[24px] cursor-not-allowed pointer-events-auto shadow-lg">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
    </button>
</div>