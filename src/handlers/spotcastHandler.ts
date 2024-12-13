import { SpotcastService } from "../services/spotcastService";
import { RetrieveState, UseHomeAssistantStore } from "../store";
import { SpotcastWebsocketService } from "../services/spotcastWebsocketService";
import { HomeAssistant } from "custom-card-helpers";
import { PlayerResponse } from "../models/spotcast/player";
import { ViewResponse } from "../models/spotcast/view";

export class SpotcastHandler {
    private _spotcastService: SpotcastService;
    private _spotcastWebsocketService: SpotcastWebsocketService;

    constructor() {
        UseHomeAssistantStore.subscribe(async (state) => {
            if (state.retrieveState === RetrieveState.INITIAL && state.hass && state.config) { 
              UseHomeAssistantStore.setState({retrieveState: RetrieveState.RETRIEVING});
              this.registerServices(state.hass);
              this.initialStartup();
              UseHomeAssistantStore.setState({retrieveState: RetrieveState.FINISHED});
            }
        })
    }

    private registerServices(hass: HomeAssistant) {
        this._spotcastService = new SpotcastService(hass);
        this._spotcastWebsocketService = new SpotcastWebsocketService(hass);
    }

    private async initialStartup() {
        // var devices = await this.fetchDevices();
        // var search = await this.fetchSearch("mikeve97", "This is adele", "playlist");
        // var tracks = await this.fetchTracks("mikeve97", "37i9dQZF1E8KQMxdQmr5oL");
        // var chromecasts = await this.fetchChromecasts();
        // var categories = await this.fetchCategories();
        // var categoryPlaylists = await this.fetchPlaylists("mikeve97", categories.categories[0].name);

        var accounts = await this._spotcastWebsocketService.fetchAccounts();
        console.log(accounts);

        var player = await this._spotcastWebsocketService.fetchPlayer();
        var view = await this._spotcastWebsocketService.fetchView();

        var liked_tracks = await this._spotcastWebsocketService.fetchLikedMedia();
        console.log(liked_tracks);

        this.setActiveMedia(player, view);
    }

    setActiveMedia(player: PlayerResponse, view: ViewResponse) {
        console.log("player is state 2:", player.state);
        if( player.state.context.uri == null ) {
            return;
        }

        var activeMedia = view.playlists.filter((playlist) => playlist.uri == player.state.context.uri)[0];
        UseHomeAssistantStore.setState({activeMedia: {item: activeMedia, start: false}});
    }
}