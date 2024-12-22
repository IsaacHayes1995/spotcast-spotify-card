export interface PlaylistItem {
    id: string | null;
    name: string;
    description: string | null;
    uri: string;
    icon?: string | null;
    is_playing: boolean;
}
