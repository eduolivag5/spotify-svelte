<script lang="ts">
    let { title, href, children } = $props();
</script>

<section class="group/section">
    <div class="flex items-end justify-between mb-5 px-1">
        <div class="space-y-1">
            <h2 class="text-2xl md:text-3xl font-black tracking-tighter text-white">
                <a {href} class="inline-flex items-center group/title transition-all duration-300 hover:text-[#1DB954]">
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-2 opacity-0 -translate-x-3 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </h2>
        </div>
        
        <a {href} class="text-[11px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest px-3 py-1.5 border border-zinc-800 hover:border-[#1DB954] rounded-full transition-all duration-300 bg-zinc-900/50">
            Mostrar todos
        </a>
    </div>
    
    <div class="relative">
        <div class="flex gap-5 md:gap-7 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory mask-fade">
            {@render children()}
        </div>
    </div>
</section>

<style>
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .mask-fade {
        mask-image: linear-gradient(
            to right,
            black 0%,
            black 92%,
            transparent 100%
        );
    }

    :global(.mask-fade > *) {
        snap-align: start;
    }
</style>