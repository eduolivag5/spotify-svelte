<footer class="shrink-0 h-[85px] md:h-auto md:col-span-2 bg-black/80 backdrop-blur-3xl border-t border-white/10 flex items-center px-4 md:px-8 z-50">
    <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-3 md:gap-5 w-[60%] md:w-[30%]">
            <div class="w-10 h-10 md:w-16 md:h-16 bg-white/10 rounded-lg md:rounded-2xl animate-pulse shrink-0"></div>
            <div class="space-y-1 overflow-hidden">
                <div class="h-3 md:h-4 w-24 md:w-32 bg-white/20 rounded-full"></div>
                <div class="h-2 md:h-3 w-16 md:w-20 bg-white/10 rounded-full"></div>
            </div>
        </div>
        
        <div class="flex flex-col items-center gap-1 md:gap-3">
            <div class="flex items-center gap-4 md:gap-6 text-white/60">
                <button aria-label="Repetir" class="hidden md:block hover:text-white">
                    <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
                </button>
                <button aria-label="Reproducir" class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <button aria-label="Aleatorio" class="hidden md:block hover:text-white">
                    <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41z"/></svg>
                </button>
            </div>
            <div class="hidden md:block w-[300px] lg:w-[400px] h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-white w-1/3 rounded-full"></div>
            </div>
        </div>
        
        <div class="hidden md:flex w-[30%] justify-end gap-4 text-white/40">
            <button aria-label="Silenciar" class="hover:text-white">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </button>
            <div class="w-24 h-1.5 bg-white/10 rounded-full mt-2"></div>
        </div>
    </div>
</footer>