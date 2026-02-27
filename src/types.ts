// src/types/spotify.ts

export interface SpotifyTrack {
  item: {
    id: string;
    name: string;
    external_urls: { spotify: string };
    album: {
      id: string; // Añadido id para navegación
      name: string;
      images: { url: string }[];
      release_date: string;
    };
    artists: { 
      id: string;
      name: string;
      external_urls: { spotify: string };
    }[];
    duration_ms: number;
    explicit: boolean;
    preview_url: string | null;
  };
  is_playing: boolean;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  external_urls: { spotify: string };
  images: { url: string; height?: number; width?: number; }[];
  genres?: string[];
  followers?: { total: number };
  popularity?: number;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  album_type: 'album' | 'single' | 'compilation';
  release_date: string;
  total_tracks: number;
  external_urls: { spotify: string };
  images: { url: string }[];
  artists: SpotifyArtist[];
  tracks?: {
    items: SpotifyTrack['item'][];
  };
}

export interface RecentlyPlayed {
  items: {
    track: SpotifyTrack['item'];
    played_at: string;
  }[];
}

// src/types/spotify.ts
// src/types/spotify.ts

// Interfaz para el "envoltorio" de canciones en Playlists
// La canción real (lo que tú llamabas item.item o item.track)
export interface SpotifyTrackData {
    id: string;
    name: string;
    duration_ms: number;
    explicit: boolean;
    preview_url: string | null;
    album: {
        id: string;
        name: string;
        images: { url: string }[];
    };
    artists: {
        id: string;
        name: string;
    }[];
}

// El objeto que representa la fila de la playlist
export interface SpotifyPlaylistItem {
    added_at: string;
    is_local: boolean;
    // Según tu JSON, viene duplicado como 'item' y como 'track'
    track: SpotifyTrackData; 
    item: SpotifyTrackData;
}

// El objeto Playlist principal
export interface SpotifyPlaylist {
    id: string;
    name: string;
    description: string;
    images: { url: string }[];
    owner: { display_name: string };
    // OJO AQUÍ: Tu JSON dice que hay un nivel 'items' que contiene otro 'items'
    items: {
        items: SpotifyPlaylistItem[];
        total: number;
    };
    // También suele venir como 'tracks'
    tracks: {
        items: SpotifyPlaylistItem[];
        total: number;
    };
}

// Interfaz Genérica de Paginación (esta ya la tenías, asegúrate de que esté así)
export interface SpotifyPaging<T> {
    href: string;
    items: T[]; 
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}