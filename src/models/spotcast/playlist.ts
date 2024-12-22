import { PlaylistItem } from "./PlaylistItem";
import { WebSocketResponse } from "./websocketResponse";


export interface PlaylistsResponse extends WebSocketResponse<PlaylistItem[]> {
    category: string;
    playlists: PlaylistItem[];
}
