import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, untrack }) => {
    // untrack evita que SvelteKit rastree dependencias de forma automática
    // dentro de esta función load del lado del cliente.
    
    return {
        ...untrack(() => data)
    };
};

// Si no necesitas trailingSlash por un motivo específico, 
// lo mejor es dejarlo en 'never' o el valor por defecto para evitar redirecciones que disparen loaders.
export const trailingSlash = 'never';