<script lang="ts">
    import type { SimpleTrack } from "../../types";

    let { track }: { track: SimpleTrack } = $props();

    const formatDuration = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
</script>

<div 
    class="group relative flex items-center gap-3 p-2 rounded-xl cursor-pointer 
           bg-white/[0.03] border border-white/10 overflow-hidden
           transition-all duration-300 ease-out
           hover:bg-white/[0.08] hover:border-white/20
           w-full" 
    style="transform: translateZ(0); will-change: transform, background-color;"
>
    <div class="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
        <img 
            src={track.album.images[2]?.url || track.album.images[0]?.url} 
            alt={track.name}
            class="w-full h-full rounded-lg object-cover shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            loading="lazy"
        />
    </div>

    <div class="flex-1 min-w-0 z-10">
        <h4 class="text-white font-semibold text-[13px] sm:text-sm truncate tracking-wide">
            {track.name}
        </h4>
        <p class="text-white/40 text-[10px] sm:text-[11px] truncate uppercase tracking-tighter hidden sm:block">
            {track.artists.map(a => a.name).join(' • ')}
        </p>
    </div>

    <div class="text-white/30 font-mono text-[10px] pr-2 z-10 tabular-nums hidden sm:block">
        {formatDuration(track.duration_ms)}
    </div>
</div>

<style>
    div {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
</style>