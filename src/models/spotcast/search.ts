import { PlaylistItem } from "./PlaylistItem";
import { WebSocketResponse } from "./websocketResponse";

export interface SearchResponse extends WebSocketResponse<PlaylistItem[]> {
    playlists?: PlaylistItem[];
    tracks?: PlaylistItem[];
}