import { WebSocketResponse } from "./websocketResponse";

export interface Account {
    country: string;
    entry_id: string;
    is_default: boolean;
    spotify_id: string;
    spotify_name: string;
}

export interface AccountResponse extends WebSocketResponse<Account[]> {
    accounts: Account[];
}