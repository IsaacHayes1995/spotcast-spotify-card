import { PlaylistItem } from "./playlistItem";
import { WebSocketResponse } from "./websocketResponse";

export interface SearchResponse extends WebSocketResponse<PlaylistItem[]> {
    playlists?: PlaylistItem[];
    tracks?: PlaylistItem[];
}