export interface AlbumImage {
    height: number;
    url: string;
    width: number;
}

export interface Album {
    id: string;
    images: AlbumImage[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    uri: string;
}