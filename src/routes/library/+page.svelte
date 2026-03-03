<script lang="ts">
    import LibraryList from '$lib/components/LibraryList.svelte';
    let { data } = $props();
</script>

<LibraryList albums={data.savedAlbums} />