<script lang="ts">
    import HighlightedAlbum from '$lib/components/HighlightedAlbum.svelte';
    import MediaCard from '$lib/components/MediaCard.svelte';
    import SectionContainer from '$lib/components/SectionContainer.svelte';
    
    let { data } = $props();
</script>

<div class="relative z-10 flex flex-col gap-12">

    <SectionContainer title="Tus Artistas Top" href="/top-artists">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
            {#each data.topArtists as artist}
                <MediaCard 
                    href="/artist/{artist.id}"
                    title={artist.name}
                    subtitle="Artista verificado"
                    image={artist.images[0]?.url}
                    transitionName="artist-{artist.id}"
                />
            {/each}
        </div>
    </SectionContainer>

    {#if data.highlightedAlbum}
        <HighlightedAlbum album={data.highlightedAlbum} />
    {/if}

    <SectionContainer title="Hecho para ti" href="/foryou">
        {#each (data.playlists?.slice(0, 4) || []) as playlist}
            <MediaCard 
                href="/playlist/{playlist.id}"
                title={playlist.name}
                subtitle={playlist.description || "Basado en tu actividad reciente"}
                image={playlist.images[0]?.url}
                transitionName="playlist-{playlist.id}"
            />
        {/each}
    </SectionContainer>
</div>