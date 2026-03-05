<script lang="ts">
    import TrackList from '$lib/components/TrackList.svelte';

    let { data } = $props();

    const album = $derived(data.album);
    const tracks = $derived(data.tracks);
</script>

<div class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden flex flex-col">
    <header class="rounded-t-3xl bg-zinc-900 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 shrink-0">
        <div class="flex flex-col md:flex-row items-center md:items-end gap-8 w-full">
            <div class="relative shrink-0">
                <img 
                    src={album.images[0]?.url} 
                    alt={album.name}
                    class="w-48 h-48 md:w-52 md:h-52 object-cover shadow-2xl rounded-lg"
                    loading="eager"
                />
            </div>

            <div class="flex flex-col gap-2 w-full text-center md:text-left">
                <div class="flex items-center justify-center md:justify-start gap-3">
                    <span class="h-1 w-8 bg-[#1DB954] rounded-full"></span>
                    <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954]">Álbum</span>
                </div>

                <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
                    {album.name}
                </h1>

                <div class="flex items-center justify-center md:justify-start gap-3 mt-2 text-sm font-bold text-zinc-400">
                    <span class="text-zinc-100 hover:underline cursor-pointer transition-colors">
                        {album.artists[0].name}
                    </span>
                    <span class="opacity-20">•</span>
                    <span class="font-medium">{new Date(album.release_date).getFullYear()}</span>
                    <span class="opacity-20">•</span>
                    <span class="font-medium">{album.total_tracks} canciones</span>
                </div>
            </div>
        </div>
    </header>

    <TrackList 
        tracks={tracks} 
        showAlbumColumn={false} 
        showImage={false} 
        offset={0}
    />

    <span class="p-12 border-t border-white/5 flex justify-center opacity-20 text-[10px] font-black uppercase tracking-[0.2em]">Fin del álbum</span>
</div>