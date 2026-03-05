<script lang="ts">
    interface Props {
        greeting: string;
    }

    let { greeting }: Props = $props();

    let selectedFilter = $state('Todo');
    const filters = ['Todo', 'Música', 'Podcasts', 'Focus', 'Relajación'];
</script>

<header class="relative -mx-4 md:-mx-8 -mt-4 md:-mt-8 pt-8 pb-8 overflow-hidden">
    
    <div class="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-600/5 to-transparent -z-10"></div>
    
    <div class="flex flex-col gap-8 relative">
        <div class="flex items-center justify-between px-4 md:px-8">
            <div class="flex items-center gap-5">
                <div class="relative group">
                    <div class="w-14 h-14 md:w-16 md:h-16 rounded-full p-[1px] bg-gradient-to-b from-white/30 to-transparent">
                        <div class="w-full h-full rounded-full bg-white/[0.03] backdrop-blur-2xl flex items-center justify-center relative overflow-hidden text-xl font-black text-white">
                            <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent"></div>
                            E
                        </div>
                    </div>
                    <div class="absolute -bottom-0.5 -right-0.5 w-6 h-6 bg-[#1DB954] rounded-full border-[3px] border-[#050505] flex items-center justify-center">
                        <svg class="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M10.8 17.6l-5-5 1.4-1.4 3.6 3.6 7.6-7.6 1.4 1.4z"/></svg>
                    </div>
                </div>
                
                <div class="flex flex-col">
                    <h1 class="text-3xl md:text-5xl font-black tracking-tighter text-white">
                        <span class="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
                            {greeting}
                        </span>
                    </h1>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#1DB954]"></span>
                        <p class="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            Premium
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden">
            <div class="flex items-center gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
                {#each filters as label}
                    {@const active = selectedFilter === label}
                    <button 
                        onclick={() => selectedFilter = label}
                        class="cursor-pointer px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 whitespace-nowrap border
                        {active 
                            ? 'bg-white/95 text-black border-white' 
                            : 'bg-white/[0.04] backdrop-blur-md border-white/[0.06] text-white/60 hover:bg-white/[0.08] hover:text-white'}"
                    >
                        {label}
                    </button>
                {/each}
                <div class="min-w-[8px] h-full"></div>
            </div>
        </div>
    </div>
</header>

<style>
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { 
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
</style>