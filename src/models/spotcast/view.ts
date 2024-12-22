import { PlaylistItem } from "./PlaylistItem";
import { WebSocketResponse } from "./websocketResponse";

export interface ViewResponse extends WebSocketResponse<PlaylistItem[]> {
    playlists: PlaylistItem[];
}