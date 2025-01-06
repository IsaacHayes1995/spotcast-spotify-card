import { SpotcastService } from "../services/spotcastService";
import { StoreState, UseHomeAssistantStore } from "../store";
import { SpotcastWebsocketService } from "../services/spotcastWebsocketService";
import { HomeAssistant } from "custom-card-helpers";
import { PlayerResponse } from "../models/spotcast/player";
import { ViewResponse } from "../models/spotcast/view";
import { Account } from "../models/spotcast/account";
import { areObjectsEqual, delay, filterHassObject } from "../helpers/helpers";
import { ActivePlaylist } from "../models/activePlaylist";
import { TableData } from "../models/tableData";
import { TrackResponse } from "../models/spotcast/track";
import { html } from "lit";

export class SpotcastHandler {
    private _spotcastService: SpotcastService;
    private _spotcastWebsocketService: SpotcastWebsocketService;

    private _activeAccount: Account;

    constructor() {

        UseHomeAssistantStore.subscribe(async (state, prevState) => {
            if (state.storeState === StoreState.FINISHED || !state.hass || !state.config) return;

            //Register services if needed, and fetch initial data if needed.
            await this.startup(state.hass);

            if(state.storeState === StoreState.PLAYMEDIA) {
                this.changeActiveMedia(state.changeData, prevState.changeData);
            }

            if (state.storeState === StoreState.UPDATEHASS && this.spotifyStateChanged(state.hass, prevState.hass)) {
                this.updateMedia();
            }

            if (state.storeState === StoreState.OPENPLAYLIST) {
                this.openPlaylist(state.changeData);
            }
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

        var player = await this._spotcastWebsocketService.fetchPlayer();
        var view = await this._spotcastWebsocketService.fetchView();
        UseHomeAssistantStore.setState({
            accounts,
            view,
            activeTrack: { track: player.state.item, isPlaying: player.state.is_playing },
            tableData: this.createTableData(view, player),
            storeState: StoreState.FINISHED
        });
    }

    private async updateMedia() {
        var player = await this._spotcastWebsocketService.fetchPlayer();
        var view = await this._spotcastWebsocketService.fetchView();

        UseHomeAssistantStore.setState({
            view,
            tableData: this.createTableData(view, player)
        })

        this.setActiveTrack(player);
    }



    private spotifyStateChanged(state: HomeAssistant, prevState: HomeAssistant) {
        var stateMediaPlayers = filterHassObject(state, 'media_player.spotify', this._activeAccount?.spotify_id);
        var prevStateMediaPlayers = filterHassObject(prevState, 'media_player.spotify', this._activeAccount?.spotify_id);

        return !areObjectsEqual(stateMediaPlayers, prevStateMediaPlayers);
    }

    private async openPlaylist(data: string) {
        var player = await this._spotcastWebsocketService.fetchPlayer();
        var trackResponse= await this._spotcastWebsocketService.fetchTracks(player?.account, data);
        var tableData = this.createTableData(trackResponse, player);

        UseHomeAssistantStore.setState({
            openTracks: trackResponse.tracks,
            tableData,
            storeState: StoreState.FINISHED
        });
    }

    private async changeActiveMedia(changeData: string, prevChangeData: string) {
        if (changeData === null || changeData ==  prevChangeData) {
            return;
        }

        this._spotcastService.playMedia(changeData, this._activeAccount.entry_id);
        var player = await this._spotcastWebsocketService.fetchPlayer();
        var view = await this._spotcastWebsocketService.fetchView();

        UseHomeAssistantStore.setState({
            tableData: this.createTableData(view, player),
        })

        delay(1, this.setActiveTrack, null, this._spotcastWebsocketService);
    }

    private async setActiveTrack(player?: PlayerResponse, context?: SpotcastWebsocketService) {
        if (player == null) player = await context.fetchPlayer();

        UseHomeAssistantStore.setState({
            activeTrack: { track: player.state.item, isPlaying: player.state.is_playing },
            storeState: StoreState.FINISHED
        });
    }

    private createTableData(source: ViewResponse | TrackResponse, player: PlayerResponse): TableData[] {
        const { state } = player;
        const activePlaylistUri = state?.context?.uri;
        const activeTrackUri = state?.item?.uri;
        const isPlaying = state?.is_playing;

        const mapItemToTableData = (item: any, isTrack: boolean): TableData => ({
            id: item.id,
            name: item.name,
            img: isTrack ? item.album?.images?.[0]?.url : item.icon,
            description: isTrack
                ? item.artists?.map((artist: { name: string }) => artist.name).join(', ')
                : item.description,
            uri: item.uri,
            icons: isTrack
                ? []
                : [html`<play-pause-icon .data="${item}"></play-pause-icon>`],
            isActive: isTrack
                ? item.uri == activeTrackUri
                : item.uri == activePlaylistUri,
            isPlaying: isPlaying && (item.uri == activeTrackUri || item.uri == activePlaylistUri),
            rowAction: isTrack ? null : StoreState.OPENPLAYLIST,
        });

        if ('tracks' in source && Array.isArray(source.tracks)) {
            return source.tracks.map(track => mapItemToTableData(track, true));
        } else if ('playlists' in source && Array.isArray(source.playlists)) {
            return source.playlists.map(playlist => mapItemToTableData(playlist, false));
        }

        throw new Error('Invalid source data');
    }
}