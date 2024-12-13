import { IHomeAssistantState, UseHomeAssistantStore, UseViewStore } from "../store";

export class viewHandler {
    constructor() {
        UseHomeAssistantStore.subscribe((state) => {
            this.isPlayListViewReady(state);
        })
    }

    isPlayListViewReady(state: IHomeAssistantState) {
        UseViewStore.setState({playlistViewReady: state.view?.playlists.length > 0});
    }
}