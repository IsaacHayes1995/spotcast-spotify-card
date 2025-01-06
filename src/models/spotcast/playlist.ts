import { PlaylistItem } from "./playlistItem";
import { WebSocketResponse } from "./websocketResponse";


export interface PlaylistsResponse extends WebSocketResponse<PlaylistItem[]> {
    category: string;
    playlists: PlaylistItem[];
}
