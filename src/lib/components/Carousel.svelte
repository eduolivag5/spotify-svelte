<script lang="ts">
    interface Props {
        children: import('svelte').Snippet;
    }
    let { children }: Props = $props();
</script>

<div class="carousel-wrapper relative w-full"> 
    <div class="carousel-container flex overflow-x-auto gap-4 md:gap-6 pb-6 scroll-smooth px-1">
        {@render children()}
    </div>
</div>