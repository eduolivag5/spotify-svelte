<script lang="ts">
    import LibraryList from './LibraryList.svelte';
    let { data, contentEl = $bindable() } = $props();
</script>

<aside class="hidden md:flex flex-col relative h-full w-full overflow-hidden">
    <div bind:this={contentEl} class="flex flex-col h-full w-full overflow-y-auto no-scrollbar p-6"> 
        <LibraryList albums={data?.savedAlbums} />
    </div>
</aside>