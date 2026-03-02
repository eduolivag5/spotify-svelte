<script lang="ts">
    import MediaCard from "./MediaCard.svelte";

    let { title = "Tus artistas", artists } = $props();
</script>

<section class="flex flex-col gap-8 py-8 px-4 md:px-8">
    <div class="flex items-end justify-between border-b border-white/5 pb-6">
        <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
            {title}
        </h1>
        <span class="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            {artists.length} artistas
        </span>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {#each artists as artist}
            <MediaCard 
                href="/artist/{artist.id}"
                title={artist.name}
                subtitle={artist.genres?.[0] || "Artista"}
                image={artist.images[0]?.url}
                transitionName="artist-{artist.id}"
            />
        {/each}
    </div>
</section>

<style>
    section {
        contain: content;
    }

    /* Si tu MediaCard acepta pasar clases, esto hará que las fotos sean redondas */
    :global(.artist-card img) {
        border-radius: 9999px !important;
    }
</style>