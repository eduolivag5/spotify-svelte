<script lang="ts">
    import HighlightedAlbum from '$lib/components/HighlightedAlbum.svelte';
    import MediaCard from '$lib/components/MediaCard.svelte';
    import SectionContainer from '$lib/components/SectionContainer.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    
    let { data } = $props();
</script>

<div class="relative z-10 flex flex-col gap-6">

    <SectionContainer title="Tus Artistas Top" href="/top-artists">
        <Carousel>
            {#each (data.topArtists?.slice(0, 10) || []) as artist}
                <MediaCard 
                    href="/artist/{artist.id}"
                    title={artist.name}
                    subtitle="Artista verificado"
                    image={artist.images[0]?.url}
                    transitionName="artist-{artist.id}"
                />
            {/each}
        </Carousel>
    </SectionContainer>

    {#if data.highlightedAlbum}
        <HighlightedAlbum album={data.highlightedAlbum} />
    {/if}

    <SectionContainer title="Tus playlists" href="/your-playlists">
        <Carousel>
            {#each (data.playlists?.slice(0, 10) || []) as playlist}
                <MediaCard 
                    href="/playlist/{playlist.id}"
                    title={playlist.name}
                    subtitle={playlist.description || "Playlist"}
                    image={playlist.images[0]?.url}
                    transitionName="playlist-{playlist.id}"
                />
            {/each}
        </Carousel>
    </SectionContainer>
</div>