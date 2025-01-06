import { PlaylistItem } from "./playlistItem";
import { WebSocketResponse } from "./websocketResponse";

export interface ViewResponse extends WebSocketResponse<PlaylistItem[]> {
    playlists: PlaylistItem[];
}