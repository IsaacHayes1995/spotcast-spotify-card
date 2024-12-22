import { SpotcastService } from "../services/spotcastService";
import { RetrieveState, UseHomeAssistantStore } from "../store";
import { SpotcastWebsocketService } from "../services/spotcastWebsocketService";
import { HomeAssistant } from "custom-card-helpers";
import { PlayerResponse } from "../models/spotcast/player";
import { ViewResponse } from "../models/spotcast/view";
import { Account } from "../models/spotcast/account";
import { areObjectsEqual, delay, filterHassObject } from "../helpers/helpers";
import { ActivePlaylist } from "../models/activePlaylist";

export class SpotcastHandler {
    private _spotcastService: SpotcastService;
    private _spotcastWebsocketService: SpotcastWebsocketService;

    private _activeAccount: Account;

    constructor() {

        UseHomeAssistantStore.subscribe(async (state, prevState) => {
            if (state.retrieveState === RetrieveState.FINISHED || !state.hass || !state.config) return;

            //Register services if needed, and fetch initial data if needed.
            await this.startup(state.hass);

            if(state.retrieveState === RetrieveState.CHANGEPLAYLIST) {
                this.changeActiveMedia(state.activePlaylist, prevState.activePlaylist);
            }

            if (state.retrieveState === RetrieveState.UPDATEHASS &&
                this.spotifyStateChanged(state.hass, prevState.hass)) {
                this.updateMedia();
            }

            UseHomeAssistantStore.setState({retrieveState: RetrieveState.FINISHED});
        })
    }

    private async startup(hass: HomeAssistant) {
        if (this._spotcastService && this._spotcastWebsocketService) return;

        this._spotcastService = new SpotcastService(hass);
        this._spotcastWebsocketService = new SpotcastWebsocketService(hass);

        // var devices = await this.fetchDevices();
        // var search = await this.fetchSearch("mikeve97", "This is adele", "playlist");
        // var tracks = await this.fetchTracks("mikeve97", "37i9dQZF1E8KQMxdQmr5oL");
        // var chromecasts = await this.fetchChromecasts();
        // var categories = await this.fetchCategories();
        // var categoryPlaylists = await this.fetchPlaylists("mikeve97", categories.categories[0].name);
        // var liked_tracks = await this._spotcastWebsocketService.fetchLikedMedia();

        var accounts = await this._spotcastWebsocketService.fetchAccounts();
        this._activeAccount = accounts?.accounts?.filter(x => x.is_default)[0];

        console.log("active account: ", this._activeAccount);

        var player = await this._spotcastWebsocketService.fetchPlayer();
        var view = await this._spotcastWebsocketService.fetchView();

        UseHomeAssistantStore.setState({ accounts: accounts });
        UseHomeAssistantStore.setState({ view })
        UseHomeAssistantStore.setState({ activeTrack: { track: player.state.item, isPlaying: player.state.is_playing } });
        this.setActivePlaylist(player, view);
    }

    private async updateMedia() {
        var player = await this._spotcastWebsocketService.fetchPlayer();
        var view = await this._spotcastWebsocketService.fetchView();

        UseHomeAssistantStore.setState({ view })
        this.setActivePlaylist(player, view);
        this.setActiveTrack(player);
    }

    private spotifyStateChanged(state: HomeAssistant, prevState: HomeAssistant) {
        var stateMediaPlayers = filterHassObject(state, 'media_player.spotify', this._activeAccount?.spotify_id);
        var prevStateMediaPlayers = filterHassObject(prevState, 'media_player.spotify', this._activeAccount?.spotify_id);

        return !areObjectsEqual(stateMediaPlayers, prevStateMediaPlayers);
    }

    private setActivePlaylist(player: PlayerResponse, view: ViewResponse) {
        if( player?.state?.context?.uri == null ) {
            return;
        }

        var activePlaylist = view.playlists.filter((playlist) => playlist.uri == player.state.context.uri)[0];
        activePlaylist.is_playing = player.state.is_playing;

        UseHomeAssistantStore.setState({activePlaylist: {item: activePlaylist, start: false}});
    }

    private changeActiveMedia(newActivePlaylist: ActivePlaylist, prevActivePlaylist: ActivePlaylist) {
        if (newActivePlaylist === null ||
            !newActivePlaylist.start ||
            areObjectsEqual(newActivePlaylist.item, prevActivePlaylist?.item)) {
            return;
        }

        this._spotcastService.playMedia(newActivePlaylist.item, this._activeAccount.entry_id);
        delay(1, this.setActiveTrack, null, this._spotcastWebsocketService);
    }

    private async setActiveTrack(player?: PlayerResponse, context?: SpotcastWebsocketService) {
        if (player == null) player = await context.fetchPlayer();
        console.log(player);
        UseHomeAssistantStore.setState({ activeTrack: { track: player.state.item, isPlaying: player.state.is_playing } });
    }
}