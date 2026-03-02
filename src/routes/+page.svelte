<script lang="ts">
    import HighlightedAlbum from '$lib/components/HighlightedAlbum.svelte';
    import MediaCard from '$lib/components/MediaCard.svelte';
    import SectionContainer from '$lib/components/SectionContainer.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import TrackRow from '$lib/components/TrackRow.svelte';
    
    let { data } = $props();

    // Lógica de saludo dinámico
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Buenos días' : hour < 20 ? 'Buenas tardes' : 'Buenas noches';
</script>

<div class="relative z-10 flex flex-col gap-10">

    <SectionContainer title="Escuchado recientemente" href="/history">
        <div class="grid grid-cols-2 gap-x-3 md:gap-x-8 gap-y-2 w-full md:w-max max-w-full">
            {#each (data.topTracks?.slice(0, 8) || []) as track}
                <TrackRow {track} />
            {/each}
        </div>
    </SectionContainer>
    
    <SectionContainer title="Tus Artistas Top" href="/top-artists">
        <Carousel>
            {#each (data.topArtists?.slice(0, 10) || []) as artist}
                <MediaCard 
                    href="/artist/{artist.id}"
                    title={artist.name}
                    subtitle="Artista"
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