import { Album } from "./album";
import { Artist } from "./artist";

export interface Track {
    id: string;
    name: string;
    uri: string;
    type: string;
    artists: Artist[];
    album: Album;
    is_playing: boolean;
}
