<script lang="ts">
    let { href, title, subtitle, image, transitionName = '' } = $props();
</script>

<a 
    {href} 
    class="group relative flex flex-col gap-3 p-3 w-full
           rounded-[2rem] transition-all duration-500
           bg-white/[0.03] hover:bg-white/[0.08]
           border border-white/[0.05] hover:border-white/[0.1]
           hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
           isolate overflow-hidden"
>
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/[0.05] via-transparent to-transparent z-10"></div>

    <div class="relative w-full aspect-square overflow-hidden rounded-[1.5rem] bg-zinc-900 shadow-inner shrink-0">
        {#if image}
            <img 
                src={image} 
                alt={title} 
                class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                style="view-transition-name: {transitionName};"
                loading="lazy"
                decoding="async"
            />
        {:else}
            <div class="w-full h-full flex items-center justify-center bg-zinc-800">
                <svg class="w-10 h-10 text-white/5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </div>
        {/if}
        
        <button 
            aria-label="Reproducir {title}"
            class="absolute right-3 bottom-3 w-12 h-12 
                   bg-[#1DB954] border border-white/20
                   rounded-full shadow-[0_8px_24px_rgba(29,185,84,0.5)]
                   flex items-center justify-center 
                   opacity-0 scale-90
                   group-hover:opacity-100 group-hover:scale-100 
                   transition-all duration-300 ease-out
                   hover:scale-110 active:scale-95 z-20"
        >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-black"><path d="M8 5v14l11-7z"/></svg>
        </button>
    </div>

    <div class="flex flex-col gap-0.5 min-w-0 px-1 py-1">
        <span class="font-bold truncate text-white text-sm tracking-tight group-hover:text-[#1DB954] transition-colors duration-300">
            {title}
        </span>
        <span class="text-[11px] font-medium text-zinc-500 truncate uppercase tracking-[0.05em]">
            {subtitle}
        </span>
    </div>
</a>

<style>
    a { 
        contain: content; 
        -webkit-tap-highlight-color: transparent;
        transform: translateZ(0);
    }

    /* Refuerzo del borde orgánico */
    a::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
    }
</style>