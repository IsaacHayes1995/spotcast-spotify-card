import { Album } from "./album";
import { Artist } from "./artist";
import { WebSocketResponse } from "./websocketResponse";

export interface Track {
    id: string;
    name: string;
    uri: string;
    type: string;
    artists: Artist[];
    album: Album;
    is_playing: boolean;
}

export interface TrackResponse extends WebSocketResponse<Track[]> {
    tracks: Track[];
}
