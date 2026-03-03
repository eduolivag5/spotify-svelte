<footer class="w-full bg-black/80 backdrop-blur-3xl border border-white/10 flex items-center px-4 md:px-8 z-50 rounded-2xl">
    <div class="flex items-center justify-between w-full h-[80px]">
        <div class="flex items-center gap-3 md:gap-5 w-[60%] md:w-[30%]">
            <div class="w-10 h-10 md:w-16 md:h-16 bg-white/10 rounded-lg md:rounded-2xl animate-pulse shrink-0"></div>
            <div class="space-y-1 overflow-hidden">
                <div class="h-3 md:h-4 w-24 md:w-32 bg-white/20 rounded-full"></div>
                <div class="h-2 md:h-3 w-16 md:w-20 bg-white/10 rounded-full"></div>
            </div>
        </div>
        
        <div class="flex flex-col items-center gap-1 md:gap-3">
            <div class="flex items-center gap-4 md:gap-6">
                <button aria-label="Atrás" class="hidden md:block text-white/60 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 9.2500 47.0898 L 14.5703 47.0898 C 16.6328 47.0898 17.6875 46.0117 17.6875 43.9492 L 17.6875 28.8789 C 17.6172 28.5976 17.5703 28.2930 17.5703 27.9883 C 17.5703 27.6602 17.6172 27.3555 17.6875 27.0742 L 17.6875 12.0273 C 17.6875 9.8945 16.6328 8.9102 14.5703 8.9102 L 9.2500 8.9102 C 7.1875 8.9102 6.1094 9.9883 6.1094 12.0273 L 6.1094 43.9492 C 6.1094 46.0117 7.1875 47.0898 9.2500 47.0898 Z M 46.5157 46.3867 C 48.3671 46.3867 49.8906 45.0039 49.8906 42.3789 L 49.8906 13.5976 C 49.8906 10.9727 48.3671 9.5664 46.5157 9.5664 C 45.5781 9.5664 44.7813 9.8711 43.8203 10.4336 L 19.9375 24.4961 C 18.6719 25.2461 17.9688 26.1133 17.6875 27.0742 L 17.6875 28.8789 C 17.9688 29.8633 18.6719 30.7071 19.9375 31.4805 L 43.8203 45.5195 C 44.7813 46.0820 45.5781 46.3867 46.5157 46.3867 Z"/>
                    </svg>
                </button>

                <button aria-label="Reproducir" class="text-white hover:scale-110 active:scale-95 transition-transform">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
                    </svg>
                </button>

                <button aria-label="Siguiente" class="hidden md:block text-white/60 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 9.4844 46.3867 C 10.4453 46.3867 11.2422 46.0820 12.1797 45.5195 L 36.0625 31.4805 C 37.3516 30.7071 38.0547 29.8633 38.3125 28.8789 L 38.3125 43.9492 C 38.3125 46.0117 39.3906 47.0898 41.4532 47.0898 L 46.7735 47.0898 C 48.8360 47.0898 49.8906 46.0117 49.8906 43.9492 L 49.8906 12.0273 C 49.8906 9.8945 48.8360 8.9102 46.7735 8.9102 L 41.4532 8.9102 C 39.3906 8.9102 38.3125 9.9883 38.3125 12.0273 L 38.3125 27.0742 C 38.0547 26.1133 37.3516 25.2461 36.0625 24.4961 L 12.1797 10.4336 C 11.2188 9.8711 10.4453 9.5664 9.4844 9.5664 C 7.6563 9.5664 6.1094 10.9727 6.1094 13.5976 L 6.1094 42.3789 C 6.1094 45.0039 7.6563 46.3867 9.4844 46.3867 Z"/>
                    </svg>
                </button>
            </div>
            <div class="hidden md:block w-[300px] lg:w-[400px] h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-white w-1/3 rounded-full"></div>
            </div>
        </div>
        
        <div class="hidden md:flex w-[30%] items-center justify-end gap-3 group/vol">
            <button aria-label="Volumen" class="text-zinc-500 hover:text-white transition-colors duration-300">
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="w-5 h-5"
                >
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
            </button>
            
            <div class="relative w-24 h-1 bg-white/5 rounded-full overflow-hidden cursor-pointer">
                <div class="absolute inset-y-0 left-0 w-[65%] bg-zinc-400 group-hover/vol:bg-[#1DB954] transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.1)]"></div>
            </div>
        </div>
    </div>
</footer>