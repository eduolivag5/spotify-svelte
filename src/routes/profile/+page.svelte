<script lang="ts">
    // Datos actualizados con tu identidad
    const user = {
        name: "Edu Oliva",
        email: "eduolivag5@gmail.com",
        plan: "Premium Individual",
        image: "/profile.jpg", // Ruta local a tu imagen
        stats: [
            { label: "Playlists", value: "32" },
            { label: "Siguiendo", value: "245" },
            { label: "Seguidores", value: "112" }
        ],
        topGenres: [
            { name: "Pop Rock", percentage: 92 },
            { name: "Urbano", percentage: 88 },
            { name: "Reggaeton", percentage: 75 },
            { name: "Indie", percentage: 60 },
            { name: "Electrónica", percentage: 45 }
        ]
    };
</script>

<div class="relative z-10 flex flex-col gap-6 pb-20 max-w-6xl mx-auto">
    
    <header class="relative w-full p-8 md:p-12 rounded-[3rem] bg-white/[0.01] border border-white/[0.03] border-t-white/[0.08] backdrop-blur-3xl overflow-hidden group">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
        
        <div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div class="relative group/avatar">
                <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full blur-md opacity-40 transition-colors duration-500 group-hover/avatar:opacity-70 transition-opacity"></div>
                <img 
                    src={user.image} 
                    alt={user.name} 
                    fetchpriority="high"
                    loading="eager"
                    decoding="sync"
                    class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 relative z-10 shadow-2xl" 
                />
            </div>

            <div class="flex flex-col items-center md:items-start gap-1">
                <span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {user.plan}
                </span>
                <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    {user.name}
                </h1>
                <p class="text-white/40 text-sm font-medium lowercase tracking-wide mb-4">
                    {user.email}
                </p>
                
                <div class="flex gap-8">
                    {#each user.stats as stat}
                        <div class="flex flex-col items-center md:items-start">
                            <span class="text-xl font-bold text-white">{stat.value}</span>
                            <span class="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{stat.label}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="lg:col-span-2 p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.03] backdrop-blur-3xl shadow-xl">
            <h3 class="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center md:text-left">Análisis de Escucha</h3>
            <div class="space-y-6">
                {#each user.topGenres as genre}
                    <div class="space-y-2">
                        <div class="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                            <span class="text-white/80">{genre.name}</span>
                            <span class="text-indigo-400">{genre.percentage}%</span>
                        </div>
                        <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-indigo-500/40 to-indigo-500/70 rounded-full" 
                                 style="width: {genre.percentage}%"></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <div class="p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 backdrop-blur-3xl flex-1 flex flex-col justify-center items-center text-center shadow-lg">
                <div class="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <span class="text-3xl font-black text-white tracking-tighter">2,850</span>
                <span class="text-[10px] text-indigo-300/50 uppercase font-bold tracking-[0.2em]">Minutos este mes</span>
            </div>

            <div class="p-6 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.03] backdrop-blur-3xl shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-[10px] font-bold text-white/20 uppercase tracking-widest">Dispositivo</span>
                    <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                </div>
                <p class="text-sm font-bold text-white/90">AirPods Pro de Edu</p>
                <p class="text-[10px] text-zinc-500 uppercase tracking-widest">Conectado • Audio Espacial</p>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center gap-4 p-6 rounded-[2rem] bg-white/[0.01] border border-white/[0.03] transition-all hover:bg-white/[0.02]">
            <div class="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <div>
                <h3 class="text-white/80 font-bold text-sm">Privacidad</h3>
                <p class="text-[10px] text-zinc-600 uppercase tracking-wider font-medium">Perfil público activo</p>
            </div>
        </div>
        <div class="flex items-center gap-4 p-6 rounded-[2rem] bg-white/[0.01] border border-white/[0.03] transition-all hover:bg-white/[0.02]">
            <div class="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
            </div>
            <div>
                <h3 class="text-white/80 font-bold text-sm">Almacenamiento</h3>
                <p class="text-[10px] text-zinc-600 uppercase tracking-wider font-medium">1.2 GB de música descargada</p>
            </div>
        </div>
    </div>
</div>