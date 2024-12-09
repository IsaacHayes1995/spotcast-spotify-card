import { createStore } from 'zustand/vanilla'
import { HomeAssistant } from 'custom-card-helpers';

export enum RetrieveState{
    INITIAL = "INITIAL",
    START = "START",
    FAILED = "FAILED",
    FINISHED = "FINISHED",
    RETRIEVING = "RETRIEVING"
}

export interface IHomeAssistantState { 
    hass: HomeAssistant;
    setHass: (hass: HomeAssistant) => void;

    config: any;
    setConfig: (config: any) => void;

    retrieveState: RetrieveState;
    setRetrieveState: (retrieveState: RetrieveState) => void;
}
  
const UseHomeAssistantStore = createStore<IHomeAssistantState>((set) => ({
    hass: null,
    setHass: (hass) => set({ hass }),

    config: null,
    setConfig: (config) => set({ config }),

    retrieveState: RetrieveState.INITIAL,
    setRetrieveState: (retrieveState) => set({ retrieveState }),
}));

const HomeAssistantStoreInitialState = UseHomeAssistantStore.getInitialState();
export { HomeAssistantStoreInitialState, UseHomeAssistantStore };
  