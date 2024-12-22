import { ViewResponse } from "../models/spotcast/view";
import { UseHomeAssistantStore, UseViewStore } from "../store";
import { ActiveTrack } from "models/activeTrack";

export class viewHandler {
    constructor() {
        UseHomeAssistantStore.subscribe((state) => {
            this.isPlayListViewReady(state.view);
            this.isCurrentlyPlayingViewReady(state.activeTrack);
        })
    }

    isPlayListViewReady(state: ViewResponse) {
        UseViewStore.setState({playlistViewReady: state?.playlists?.length > 0});
    }

    isCurrentlyPlayingViewReady(activeTrack: ActiveTrack) {
        UseViewStore.setState({ currentlyPlayingViewReady: activeTrack?.track !== undefined });
    }
}