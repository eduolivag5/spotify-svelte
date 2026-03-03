<script lang="ts">
    let { href, title, subtitle, image, transitionName = '' } = $props();
</script>

<a 
    {href} 
    class="group relative flex flex-col gap-2 p-2.5 
           w-fit shrink-0 
           rounded-[1.2rem] transition-colors duration-300
           bg-white/[0.03] hover:bg-white/[0.08]
           border border-white/[0.05] hover:border-white/[0.1]
           isolate overflow-hidden"
>
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.05] to-transparent z-10"></div>

    <div class="relative w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-[0.8rem] bg-zinc-900 shrink-0 will-change-transform">
        {#if image}
            <img 
                src={image} 
                alt={title} 
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                style="view-transition-name: {transitionName};"
                loading="lazy"
            />
        {:else}
            <div class="w-full h-full flex items-center justify-center bg-zinc-800">
                <svg class="w-8 h-8 text-white/5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </div>
        {/if}
        
        <button 
            aria-label="Reproducir {title}"
            class="absolute right-2 bottom-2 w-9 h-9 
                   bg-[#1DB954] rounded-full
                   flex items-center justify-center 
                   opacity-0 translate-y-2 scale-90
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 
                   transition-all duration-300 ease-out z-20 will-change-transform"
        >
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-black"><path d="M8 5v14l11-7z"/></svg>
        </button>
    </div>

    <div class="flex flex-col gap-0 w-32 md:w-36 px-1">
        <span class="font-bold truncate text-white text-[13px] tracking-tight group-hover:text-[#1DB954] transition-colors duration-300">
            {title}
        </span>
        <span class="text-[10px] font-medium text-zinc-500 truncate uppercase tracking-wider opacity-80">
            {subtitle}
        </span>
    </div>
</a>

<style>
    a {
        transform: translateZ(0);
        backface-visibility: hidden;
        -webkit-tap-highlight-color: transparent;
    }

    img {
        image-rendering: -webkit-optimize-contrast;
        will-change: transform;
    }

    button {
        will-change: transform, opacity;
    }
</style>