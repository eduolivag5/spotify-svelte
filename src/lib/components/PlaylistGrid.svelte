<script lang="ts">
    import MediaCard from "./MediaCard.svelte";

    let { title = "Tus playlists", playlists } = $props();
</script>

<section class="flex flex-col gap-8 py-8 px-4 md:px-8">
    <div class="flex flex-col gap-1 md:gap-0 md:flex-row items-start md:items-end justify-between border-b border-white/5 pb-6">
        <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
            {title}
        </h1>
        <span class="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            {playlists.length} guardadas
        </span>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {#each playlists as playlist}
            <MediaCard 
                href="/playlist/{playlist.id}"
                title={playlist.name}
                subtitle="De {playlist.owner?.display_name || 'Spotify'}"
                image={playlist.images[0]?.url}
                transitionName="playlist-{playlist.id}"
            />
        {/each}
    </div>
</section>

<style>
    section {
        contain: content;
    }
</style>