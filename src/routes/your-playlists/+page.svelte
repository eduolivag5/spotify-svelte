<script lang="ts">
    import PlaylistGrid from '$lib/components/PlaylistGrid.svelte';
    let { data } = $props();
</script>

<PlaylistGrid 
    title="Tus Playlists" 
    playlists={data.playlists || []} 
/>