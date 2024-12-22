import { AccountResponse } from "models/spotcast/account";
import { ViewResponse } from "../models/spotcast/view";
import { UseHomeAssistantStore, UseViewStore } from "../store";

export class viewHandler {
    constructor() {
        UseHomeAssistantStore.subscribe((state) => {
            this.isPlayListViewReady(state.view);
            this.isCurrentlyPlayingViewReady(state.accounts);
        })
    }

    isPlayListViewReady(state: ViewResponse) {
        UseViewStore.setState({playlistViewReady: state?.playlists?.length > 0});
    }

    isCurrentlyPlayingViewReady(state: AccountResponse) {
        UseViewStore.setState({currentlyPlayingViewReady: state?.accounts?.length > 0});
    }
}