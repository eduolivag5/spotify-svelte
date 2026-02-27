<script lang="ts">
    let { isMenuOpen = $bindable() } = $props();
</script>

<nav class="shrink-0 h-[64px] md:h-auto md:col-span-2 flex items-center justify-between px-4 md:px-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl z-50">
    <div class="flex items-center gap-3 md:gap-6 w-full md:w-auto">
        <div class="hidden md:flex gap-3">
            <button onclick={() => history.back()} aria-label="Ir atrás" class="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/10 border border-white/5 transition-all">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-zinc-400"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button onclick={() => history.forward()} aria-label="Ir adelante" class="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/10 border border-white/5 transition-all">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-zinc-400"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
        </div>

        <div class="relative group flex-1 md:flex-none">
            <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <input type="text" placeholder="Buscar..." class="bg-white/5 border border-white/10 rounded-2xl py-2 pl-11 pr-4 w-full md:w-[450px] text-sm focus:ring-2 focus:ring-[#1DB954]/50 transition-all outline-none" />
        </div>
    </div>

    <button onclick={() => isMenuOpen = !isMenuOpen} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir biblioteca"} class="md:hidden ml-3 p-2 bg-white/10 rounded-xl active:scale-95 transition-transform">
         <svg viewBox="0 0 24 24" class="w-6 h-6 fill-white"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    </button>

    <div class="hidden md:flex items-center gap-5">
        <button class="bg-white text-black font-bold py-2.5 px-7 rounded-2xl hover:scale-105 transition-all">Explorar</button>
    </div>
</nav>