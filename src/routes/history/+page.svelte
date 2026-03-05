<script lang="ts">
    import TrackList from '$lib/components/TrackList.svelte';
    let { data } = $props();

    const allTracks = $derived(data.topTracks || []);
</script>

<div id="history-container" class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden relative flex flex-col">
    
    <header class="rounded-t-3xl bg-zinc-900 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 shrink-0">
        <div class="flex flex-col gap-2 w-full text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-3">
                <span class="h-1 w-8 bg-[#1DB954] rounded-full"></span>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954]">Historial</span>
            </div>
            <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
                Tu Actividad
            </h1>
            <div class="flex items-center justify-center md:justify-start gap-3 mt-2 text-sm font-bold text-zinc-400">
                <span class="text-zinc-100">{allTracks.length} canciones</span>
                <span class="opacity-20">•</span>
                <span class="font-medium">Lista completa</span>
            </div>
        </div>
    </header>

    <TrackList 
        tracks={allTracks} 
        showAlbumColumn={true} 
        showImage={true} 
        offset={0}
    />

    <span class="p-12 border-t border-white/5 flex justify-center opacity-20 text-[10px] font-black uppercase tracking-[0.2em]">Fin del historial</span>
</div>