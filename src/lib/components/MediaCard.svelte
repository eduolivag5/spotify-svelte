<script lang="ts">
    let { href, title, subtitle, image, transitionName = '' } = $props();
</script>

<a 
    {href} 
    class="group relative flex flex-col gap-3 p-3 w-full
           rounded-xl transition-colors duration-200
           bg-[#121212] hover:bg-[#1e1e1e]
           border border-white/[0.03]"
>
    <div class="relative w-full aspect-square overflow-hidden rounded-lg bg-zinc-800 shadow-lg shrink-0">
        {#if image}
            <img 
                src={image} 
                alt={title} 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style="view-transition-name: {transitionName};"
                loading="lazy"
                decoding="async"
            />
        {:else}
            <div class="w-full h-full flex items-center justify-center">
                <svg class="w-10 h-10 text-white/10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </div>
        {/if}
        
        <button 
            aria-label="Reproducir {title}"
            class="absolute right-2 bottom-2 w-10 h-10 bg-[#1DB954] rounded-full shadow-xl flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95"
        >
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-black"><path d="M8 5v14l11-7z"/></svg>
        </button>
    </div>

    <div class="flex flex-col gap-1 min-w-0 h-[40px]">
        <span class="font-bold truncate text-zinc-100 text-sm tracking-tight">{title}</span>
        <span class="text-xs text-zinc-400 line-clamp-1 leading-snug">{subtitle}</span>
    </div>
</a>

<style>
    a { contain: layout paint; -webkit-tap-highlight-color: transparent; }
</style>