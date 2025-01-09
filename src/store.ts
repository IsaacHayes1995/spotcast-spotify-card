import { createStore } from 'zustand/vanilla'
import { HomeAssistant } from 'custom-card-helpers';
import { AccountResponse } from './models/spotcast/account';
import { ActiveTrack } from './models/activeTrack';
import { TableData } from './models/tableData';
import { likedMediaResponse } from './models/spotcast/likedMedia';

export enum StoreState{
    INITIAL,
    FINISHED,
    CHANGEPLAYLIST,
    OPENPLAYLIST,
    CHANGETRACK,
    LIKEMEDIA,
    UPDATEHASS,
    UPDATECONFIG,
    PLAYMEDIA,
    ERROR
}

export interface IHomeAssistantState {
    hass: HomeAssistant;
    prevState: IHomeAssistantState;
    config: any;
    accounts: AccountResponse;
    storeState: StoreState;
    tableData: TableData[];
    activeTrack: ActiveTrack;
    changeData: string;
    likedMedia: likedMediaResponse;
}

const UseHomeAssistantStore = createStore<IHomeAssistantState>((set) => ({
    hass: null,
    prevState: null,
    config: null,
    storeState: StoreState.INITIAL,
    view: null,
    tableData: null,
    activeTrack: null,
    accounts: null,
    changeData: null,
    likedMedia: null
}));

const HomeAssistantStoreInitialState = UseHomeAssistantStore.getInitialState();
export { HomeAssistantStoreInitialState, UseHomeAssistantStore };


export enum ViewMode{
    PLAYLIST,
    VIEW,
    TRACK
}

export interface IViewState {
    ViewMode: ViewMode;
    TableReady: boolean;
    currentlyPlayingViewReady: boolean;
}

const UseViewStore = createStore<IViewState>((set) => ({
    ViewMode: ViewMode.VIEW,
    TableReady: false,
    currentlyPlayingViewReady: false
}))

const ViewStoreInitialState = UseViewStore.getInitialState();
export { ViewStoreInitialState, UseViewStore };