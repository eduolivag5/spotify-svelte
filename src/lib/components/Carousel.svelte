<script lang="ts">
    interface Props {
        children: import('svelte').Snippet;
    }
    let { children }: Props = $props();
</script>

<div class="carousel-wrapper relative w-full overflow-hidden"> 
    <div class="carousel-container flex overflow-x-auto gap-4 md:gap-6 pb-6 scroll-smooth px-1 mask-edge">
        {@render children()}
    </div>
</div>

<style>
    .carousel-container {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .carousel-container::-webkit-scrollbar {
        display: none;
    }

    /* Esta máscara hace que el contenido se desvanezca.
       Al ser una máscara de transparencia, no importa qué color 
       tengas de fondo (negro, gris o cristal), funcionará siempre.
    */
    .mask-edge {
        -webkit-mask-image: linear-gradient(
            to right, 
            black 0%, 
            black 85%, 
            transparent 100%
        );
        mask-image: linear-gradient(
            to right, 
            black 0%, 
            black 85%, 
            transparent 100%
        );
    }

    /* En escritorio, donde el espacio es mayor, podemos hacer el desvanecimiento más sutil */
    @media (min-width: 768px) {
        .mask-edge {
            -webkit-mask-image: linear-gradient(
                to right, 
                black 0%, 
                black 90%, 
                transparent 100%
            );
            mask-image: linear-gradient(
                to right, 
                black 0%, 
                black 90%, 
                transparent 100%
            );
        }
    }
</style>