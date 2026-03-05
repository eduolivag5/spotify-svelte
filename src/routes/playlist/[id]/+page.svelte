<script lang="ts">
    import TrackList from '$lib/components/TrackList.svelte';

    let { data } = $props();

    const playlist = $derived(data.playlist);

    //console.log(playlist.items.items);

    // Extraemos los tracks usando la propiedad "item" que nos mostraste
    const tracksToRender = $derived(
        (playlist.items?.items || playlist.tracks?.items || [])
            .map((entry: any) => entry.item) // Cambiamos .track por .item
            .filter((t: any) => t && t.id)    
    );
</script>

<svelte:head>
    <style>
        :root, html, body {
            background-color: #09090b !important;
            color-scheme: dark;
        }
    </style>
</svelte:head>

<div class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden flex flex-col bg-zinc-950">
    <header class="bg-zinc-900 p-8 md:p-12 border-b border-white/5 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 shrink-0">
        <div class="flex flex-col md:flex-row items-center md:items-end gap-8 w-full">
            <div class="relative shrink-0">
                <img 
                    src={playlist.images?.[0]?.url || ''} 
                    alt={playlist.name}
                    class="w-48 h-48 md:w-52 md:h-52 object-cover shadow-2xl rounded-lg bg-zinc-800"
                />
            </div>

            <div class="flex flex-col gap-2 w-full text-center md:text-left">
                <div class="flex items-center justify-center md:justify-start gap-3">
                    <span class="h-1 w-8 bg-[#1DB954] rounded-full"></span>
                    <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954]">Playlist</span>
                </div>

                <h1 class="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                    {playlist.name}
                </h1>

                <div class="flex items-center justify-center md:justify-start gap-3 mt-2 text-sm font-bold text-zinc-400">
                    <span class="text-zinc-100">{playlist.owner?.display_name || 'Spotify'}</span>
                    <span class="opacity-20">•</span>
                    <span class="font-medium">{tracksToRender.length} canciones</span>
                </div>
            </div>
        </div>
    </header>

    <main class="flex-grow bg-zinc-950">
        {#if tracksToRender.length > 0}
            <TrackList 
                tracks={tracksToRender} 
                showAlbumColumn={true} 
                showImage={true} 
                offset={0}
            />
        {:else}
            <div class="p-20 text-center text-zinc-500 font-bold uppercase tracking-widest text-xs">
                No se encontraron canciones
            </div>
        {/if}
    </main>

    <footer class="p-12 border-t border-white/5 flex justify-center bg-zinc-950 opacity-20">
        <span class="text-[10px] font-black uppercase tracking-[0.2em]">Fin de la playlist</span>
    </footer>
</div>