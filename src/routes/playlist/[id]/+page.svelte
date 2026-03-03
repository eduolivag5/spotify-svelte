<script lang="ts">
    import TrackList from '$lib/components/TrackList.svelte';

    let { data } = $props();

    const playlist = $derived(data.playlist);
    
    // Lógica de tracks robusta
    const trackRows = $derived(
        playlist.tracks?.items ?? 
        (playlist as any).items?.items ?? 
        []
    );

    const formatDuration = (ms: number) => {
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
</script>

<div class="w-full h-full text-zinc-100 overflow-y-auto overflow-x-hidden">
    <header class="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end gap-8 bg-zinc-900 rounded-t-3xl">
        <div class="relative shrink-0">
            <img 
                src={playlist.images?.[0]?.url} 
                alt={playlist.name}
                class="w-48 h-48 md:w-60 md:h-60 object-cover shadow-2xl rounded-lg"
                loading="eager"
            />
        </div>

        <div class="flex flex-col gap-2 w-full text-center md:text-left">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#1DB954]">Playlist</span>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none truncate">
                {playlist.name}
            </h1>
            <div class="flex items-center justify-center md:justify-start gap-3 mt-2 text-sm font-bold text-zinc-400">
                <span class="text-zinc-100">{playlist.owner?.display_name || 'Spotify'}</span>
                <span class="opacity-20">•</span>
                <span class="font-medium italic line-clamp-1 max-w-[300px]">
                    {@html playlist.description || ''}
                </span>
                <span class="opacity-20">•</span>
                <span class="font-medium">{trackRows.length} canciones</span>
            </div>
        </div>
    </header>

    <TrackList 
        tracks={trackRows} 
        showAlbumColumn={true} 
        showImage={true} 
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