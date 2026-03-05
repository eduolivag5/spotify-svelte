<script lang="ts">
    import TrackList from '$lib/components/TrackList.svelte';

    let { data } = $props();

    const album = $derived(data.album);
    const tracks = $derived(data.tracks);

    const formatDuration = (ms: number) => {
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
</script>

<div class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden">
    <header class="rounded-t-3xl bg-zinc-900 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8">
        <div class="relative shrink-0">
            <img 
                src={album.images[0]?.url} 
                alt={album.name}
                class="w-48 h-48 md:w-60 md:h-60 object-cover shadow-2xl rounded-lg"
                loading="eager"
            />
        </div>

        <div class="flex flex-col gap-2 w-full text-center md:text-left">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954]">Álbum</span>
            <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-none">
                {album.name}
            </h1>
            <div class="flex items-center justify-center md:justify-start gap-3 mt-2 text-sm font-bold text-zinc-400">
                <span class="text-zinc-100 hover:underline cursor-pointer transition-colors">{album.artists[0].name}</span>
                <span class="opacity-20">•</span>
                <span class="font-medium">{new Date(album.release_date).getFullYear()}</span>
                <span class="opacity-20">•</span>
                <span class="font-medium">{album.total_tracks} canciones</span>
            </div>
        </div>
    </header>

    <TrackList 
        tracks={data.tracks} 
        showAlbumColumn={false} 
        showImage={false} 
    />
</div>

<style>
    :global(html) {
        scrollbar-gutter: stable;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #2a2a2a;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #333;
    }
</style>