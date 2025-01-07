import { TableData } from "models/tableData";
import { UseHomeAssistantStore, UseViewStore } from "../store";
import { ActiveTrack } from "models/activeTrack";

export class viewHandler {
    constructor() {
        UseHomeAssistantStore.subscribe((state) => {
            this.isTableReady(state.tableData);
            this.isCurrentlyPlayingViewReady(state.activeTrack);
        })
    }

    isTableReady(data: TableData[]) {
        UseViewStore.setState({ TableReady: data?.length > 0 });
    }

    isCurrentlyPlayingViewReady(activeTrack: ActiveTrack) {
        UseViewStore.setState({ currentlyPlayingViewReady: activeTrack?.track !== undefined });
    }
}