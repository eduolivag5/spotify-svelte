<script lang="ts">
    interface Props {
        children: import('svelte').Snippet;
        onclick?: () => void;
        class?: string;
    }

    let { children, onclick, class: className = '' }: Props = $props();
</script>

<div 
    {onclick}
    onkeydown={(e) => e.key === 'Enter' && onclick?.()}
    role="button"
    tabindex="0"
    class="group relative flex items-center gap-3 p-2 rounded-xl cursor-pointer 
           bg-white/[0.03] border border-white/10 overflow-hidden
           transition-all duration-300 ease-out
           hover:bg-white/[0.08] hover:border-white/20
           w-full {className}" 
    style="transform: translateZ(0); will-change: transform, background-color;"
>
    {@render children()}
</div>

<style>
    div {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        /* Quitamos el outline por defecto para que no afee el diseño */
        outline: none;
    }
    
    /* Añadimos un feedback visual de foco para accesibilidad */
    div:focus-visible {
        border-color: rgba(255, 255, 255, 0.4);
    }
</style>