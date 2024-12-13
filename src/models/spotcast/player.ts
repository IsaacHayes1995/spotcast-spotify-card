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

    item: {
        id: string;
        name: string;
        uri: string;
        type: string;
    };

    repeat: string;
    shuffle_state: boolean;
}