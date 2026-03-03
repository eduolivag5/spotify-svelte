<script lang="ts">
    import { goto } from '$app/navigation';
    import Container from '$lib/components/Container.svelte';
    let { albums = [] } = $props();
</script>

<div class="flex flex-col gap-5">
    <header class="flex items-center gap-2.5 shrink-0 px-1">
        <div class="w-1 h-5 bg-[#1DB954] rounded-full shadow-[0_0_8px_rgba(29,185,84,0.4)]"></div>
        <h1 class="text-lg font-bold tracking-tight text-zinc-100">Tu Biblioteca</h1>
    </header>

    <div class="grid grid-cols-1 gap-1.5">
        {#each albums as album}
            <Container 
                onclick={() => goto(`/album/${album.id}`)}
                class="!gap-3" 
            >
                <img 
                    src={album.images[0]?.url} 
                    class="w-11 h-11 rounded-lg object-cover shadow-md transition-transform group-hover:scale-105" 
                    alt={album.name} 
                />
                
                <div class="flex flex-col min-w-0 leading-tight">
                    <span class="font-semibold text-zinc-100 truncate text-[13px]">
                        {album.name}
                    </span>
                    <span class="text-zinc-500 text-[10px] uppercase tracking-[0.05em] truncate mt-0.5">
                        {album.artists[0]?.name}
                    </span>
                </div>
            </Container>
        {/each}
    </div>
</div>