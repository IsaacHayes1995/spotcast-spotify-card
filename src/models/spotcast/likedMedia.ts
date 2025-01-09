import { WebSocketResponse } from "./websocketResponse";

export interface likedMediaResponse extends WebSocketResponse<string[]> {
    tracks: string[];
}
