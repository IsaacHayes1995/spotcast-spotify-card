import { Track } from "./track";

export interface PlayerResponse {
    account: string;
    state: PlayerState;
}

interface PlayerState {
    context: {
        href: string;
        type: string;
        uri: string;
    };

    item: Track;

    repeat: string;
    shuffle_state: boolean;
    is_playing: boolean;
}