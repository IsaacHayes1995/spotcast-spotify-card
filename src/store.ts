import { createStore } from 'zustand/vanilla'
import { HomeAssistant } from 'custom-card-helpers';
import { ViewResponse } from './models/spotcast/view';
import { ActivePlaylist } from './models/activePlaylist';
import { AccountResponse } from './models/spotcast/account';
import { ActiveTrack } from './models/activeTrack';

export enum RetrieveState{
    INITIAL = "INITIAL",
    FINISHED = "FINISHED",
    CHANGEPLAYLIST = "CHANGEPLAYLIST",
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
    activePlaylist: ActivePlaylist;
    activeTrack: ActiveTrack;
    username: string;
}

const UseHomeAssistantStore = createStore<IHomeAssistantState>((set) => ({
    hass: null,
    prevState: null,
    config: null,
    retrieveState: RetrieveState.INITIAL,
    view: null,
    activePlaylist: null,
    activeTrack: null,
    username: null,
    accounts: null,
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