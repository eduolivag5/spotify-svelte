<script lang="ts">
    import ArtistGrid from '$lib/components/ArtistGrid.svelte';
    let { data } = $props();
</script>

<ArtistGrid 
    title="Tus Artistas Top" 
    artists={data.topArtists || []} 
/>