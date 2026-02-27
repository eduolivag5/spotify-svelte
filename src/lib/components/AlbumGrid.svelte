<script lang="ts">
    import MediaCard from "./MediaCard.svelte";

    let { title, albums } = $props();
</script>

<section class="flex flex-col gap-6">
    <div class="flex items-center justify-between">
        <h2 class="text-2xl font-black tracking-tight text-white">{title}</h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {#each albums as album}
            <MediaCard 
                href="/album/{album.id}"
                title={album.name}
                subtitle={album.release_date.split('-')[0]}
                image={album.images[0]?.url}
                transitionName="album-{album.id}"
            />
        {/each}
    </div>
</section>

<style>
    section {
        /* Optimizamos para que el navegador no sufra con listas largas */
        contain: content;
    }
</style>