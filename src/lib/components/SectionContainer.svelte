<script lang="ts">
    let { title, href, children } = $props();
</script>

<section class="mb-10 group/section">
    <div class="flex items-end justify-between mb-5 px-1">
        <div class="space-y-1">
            <h2 class="text-2xl md:text-3xl font-black tracking-tighter text-white">
                <a {href} class="hover:underline decoration-[#1DB954] decoration-4 underline-offset-8 transition-all">
                    {title}
                </a>
            </h2>
        </div>
        
        <a {href} class="relative overflow-hidden text-[11px] font-black text-zinc-400 hover:text-white uppercase tracking-[0.15em] transition-colors pb-1 group/link">
            Mostrar todos
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#1DB954] translate-x-[-105%] group-hover/link:translate-x-0 transition-transform duration-300"></span>
        </a>
    </div>
    
    <div class="relative">
        <div class="flex gap-5 md:gap-7 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory mask-fade">
            {@render children()}
        </div>
    </div>
</section>

<style>
    /* Ocultar scrollbar pero mantener funcionalidad */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    /* Efecto de desvanecimiento en los bordes para el scroll */
    .mask-fade {
        mask-image: linear-gradient(
            to right,
            black 0%,
            black 90%,
            transparent 100%
        );
    }

    /* Opcional: snap para que las cards se detengan suavemente */
    :global(.mask-fade > *) {
        snap-align: start;
    }
</style>