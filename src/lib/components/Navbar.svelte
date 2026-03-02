<script lang="ts">
    let { isMenuOpen = $bindable() } = $props();
</script>

<nav class="shrink-0 h-[64px] md:h-[72px] md:col-span-2 flex items-center justify-between px-4 md:px-6 rounded-xl bg-[#121212] border border-white/5 shadow-xl z-50">
    
    <div class="flex items-center gap-4 md:gap-6 w-full md:w-auto">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="/" class="flex items-center text-white cursor-pointer shrink-0">
            <svg viewBox="0 0 24 24" class="w-8 h-8 fill-current">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.465-1.027.249-2.858-1.747-6.456-2.142-10.693-1.173-.404.092-.811-.159-.904-.562-.092-.403.159-.811.562-.904 4.634-1.06 8.608-.611 11.813 1.347.353.216.464.675.249 1.027zm1.467-3.258c-.271.44-.846.577-1.286.307-3.272-2.012-8.259-2.593-12.127-1.417-.497.151-1.023-.127-1.174-.624-.151-.498.127-1.023.624-1.174 4.417-1.34 9.904-.69 13.656 1.62.44.272.578.846.307 1.288zm.127-3.39c-3.924-2.33-10.404-2.545-14.175-1.4c-.602.183-1.238-.162-1.421-.764-.183-.603.162-1.238.764-1.421 4.331-1.315 11.488-1.065 15.991 1.609.541.321.718 1.02.397 1.56-.321.541-1.02.719-1.56.398z"/>
            </svg>
        </a>

        <div class="hidden md:flex gap-2">
            <button onclick={() => history.back()} aria-label="Ir atrás" class="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-[#282828] transition-colors active:scale-95">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-zinc-400"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button onclick={() => history.forward()} aria-label="Ir adelante" class="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-[#282828] transition-colors active:scale-95">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-zinc-400"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
        </div>

        <div class="relative group flex-1 md:flex-none">
            <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
                <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <input 
                type="text" 
                placeholder="¿Qué quieres escuchar?" 
                class="bg-[#242424] border border-transparent rounded-full py-2.5 pl-11 pr-4 w-full md:w-[350px] text-sm focus:bg-[#2a2a2a] focus:border-zinc-600 transition-all outline-none text-white placeholder:text-zinc-500" 
            />
        </div>
    </div>

    <div class="flex items-center gap-3">
        <div class="hidden md:flex items-center gap-3">
            <button disabled class="text-zinc-500 font-bold py-2 px-4 text-sm cursor-not-allowed">
                Explorar
            </button>
            
            <button class="w-8 h-8 rounded-full bg-purple-400 font-bold text-black">
                E
            </button>
        </div>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button onclick={() => isMenuOpen = !isMenuOpen} class="md:hidden p-2 bg-[#242424] rounded-full active:bg-[#333] transition-colors">
             <svg viewBox="0 0 24 24" class="w-6 h-6 fill-white"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
    </div>
</nav>