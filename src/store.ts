import { createStore } from 'zustand/vanilla'
import { HomeAssistant } from 'custom-card-helpers';
import { ViewResponse } from './models/spotcast/view';
import { PlaylistItem } from 'models/spotcast/PlaylistItem';

export enum RetrieveState{
    INITIAL = "INITIAL",
    START = "START",
    FAILED = "FAILED",
    FINISHED = "FINISHED",
    RETRIEVING = "RETRIEVING"
}

export interface IHomeAssistantState { 
    hass: HomeAssistant;
    prevState: IHomeAssistantState;
    config: any;
    accounts: any[];
    retrieveState: RetrieveState;
    view: ViewResponse;
    activeMedia: {item: PlaylistItem, start: boolean};
    username: string;
}
  
const UseHomeAssistantStore = createStore<IHomeAssistantState>((set) => ({
    hass: null,
    prevState: null,
    config: null,
    retrieveState: RetrieveState.INITIAL,
    view: null,
    activeMedia: null,
    startPlayback: false,
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