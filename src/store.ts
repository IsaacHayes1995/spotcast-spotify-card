import { createStore } from 'zustand/vanilla'
import { HomeAssistant } from 'custom-card-helpers';
import { ViewResponse } from './models/spotcast/view';
import { ActivePlaylist } from './models/activePlaylist';
import { AccountResponse } from './models/spotcast/account';
import { ActiveTrack } from './models/activeTrack';
import { OpenPlaylist } from './models/openPlaylist';
import { PlaylistItem } from 'models/spotcast/playlistItem';
import { Track } from 'models/spotcast/track';
import { TableData } from 'models/tableData';

export enum RetrieveState{
    INITIAL = "INITIAL",
    FINISHED = "FINISHED",
    CHANGEPLAYLIST = "CHANGEPLAYLIST",
    OPENPLAYLIST = "OPENPLAYLIST",
    CHANGETRACK = "CHANGETRACK",
    UPDATEHASS = "UPDATEHASS",
    UPDATECONFIG = "UPDATECONFIG",
}

export interface IHomeAssistantState {
    hass: HomeAssistant;
    prevState: IHomeAssistantState;
    config: any;
    accounts: AccountResponse;
    retrieveState: RetrieveState;
    view: ViewResponse;
    tableData: TableData[];
    openPlaylist: PlaylistItem;
    openTracks: Track[];
    activePlaylist: ActivePlaylist;
    activeTrack: ActiveTrack;
    username: string;
    changeData: string;
}

const UseHomeAssistantStore = createStore<IHomeAssistantState>((set) => ({
    hass: null,
    prevState: null,
    config: null,
    retrieveState: RetrieveState.INITIAL,
    view: null,
    tableData: null,
    openPlaylist: null,
    openTracks: null,
    activePlaylist: null,
    activeTrack: null,
    username: null,
    accounts: null,
    changeData: null
}));

const HomeAssistantStoreInitialState = UseHomeAssistantStore.getInitialState();
export { HomeAssistantStoreInitialState, UseHomeAssistantStore };


export interface IViewState {
    playlistViewReady: boolean;
    headerViewReady: boolean;
    currentlyPlayingViewReady: boolean;
}

const UseViewStore = createStore<IViewState>((set) => ({
    playlistViewReady: false,
    headerViewReady: false,
    currentlyPlayingViewReady: false
}))

const ViewStoreInitialState = UseViewStore.getInitialState();
export { ViewStoreInitialState, UseViewStore };