<script lang="ts">
    import Container from '$lib/components/Container.svelte';
    import type { SimpleTrack } from "../../types";

    let { track }: { track: SimpleTrack } = $props();

    const formatDuration = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
</script>

<Container onclick={() => console.log('Reproduciendo:', track.name)}>
    <div class="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11">
        <img 
            src={track.album.images[2]?.url || track.album.images[0]?.url} 
            alt={track.name}
            class="w-full h-full rounded-lg object-cover shadow-2xl group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
        />
    </div>

    <div class="flex-1 min-w-0 z-10">
        <h4 class="text-zinc-100 font-semibold text-[13px] truncate tracking-wide">
            {track.name}
        </h4>
        <p class="text-zinc-500 text-[10px] sm:text-[11px] truncate uppercase tracking-tighter hidden sm:block">
            {track.artists.map(a => a.name).join(' • ')}
        </p>
    </div>

    <div class="text-zinc-500 font-mono text-[10px] pr-2 z-10 tabular-nums hidden sm:block">
        {formatDuration(track.duration_ms)}
    </div>
</Container>