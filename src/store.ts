// import create, { createStore } from 'zustand';
// import { DevicesResponse } from "./models/spotcast/device";
// import { ChromecastResponse } from "./models/spotcast/device";
// import { PlayerResponse } from "./models/spotcast/player";
// import { PlaylistsResponse } from "./models/spotcast/playlist";
// import { SearchResponse } from "./models/spotcast/search";
// import { ViewResponse } from "./models/spotcast/view";
// import { CategoriesResponse } from './models/spotcast/category';
// import { HomeAssistant } from 'custom-card-helpers';

// // Defining the SpotcastState interface for type safety
// export interface ISpotcastState {
//   shouldRetrieve: boolean;
//   hass: HomeAssistant;
//   devices: DevicesResponse;
//   player: PlayerResponse;
//   chromecasts: ChromecastResponse;
//   categories: CategoriesResponse;
//   playlists: PlaylistsResponse;
//   view: ViewResponse;
//   search: SearchResponse;KAK
// }

// // Defining the actions in the SpotcastStore interface
// export interface ISpotcastStore {
//   state: ISpotcastState;
//   setHass: (hass: HomeAssistant) => void;
//   Reset: () => void;
//   setShouldRetrieve: (shouldRetrieve: boolean) => void;
//   setDevices: (devices: DevicesResponse) => void;
//   setPlayer: (player: PlayerResponse) => void;
//   setChromecasts: (chromecasts: ChromecastResponse) => void;
//   setCategories: (categories: CategoriesResponse) => void;
//   setPlaylists: (playlists: PlaylistsResponse) => void;
//   setView: (view: ViewResponse) => void;
//   setSearch: (search: SearchResponse) => void;
// }

// const initialState = {
//     shouldRetrieve: true,
//     hass: null,
//     devices: null,
//     player: null,
//     chromecasts: null,
//     categories: null,
//     playlists: null,
//     view: null,
//     search: null,
// };

// // Creating the store with actions and state
// const useSpotcastStore = createStore<ISpotcastStore>((set) => ({
//   state: initialState,
//   Reset: () => set({
//     state: initialState
//   }),

//   setHass: (hass) => set((state) => ({ state: { ...state.state, hass } })),
//   setShouldRetrieve: (shouldRetrieve) => set((state) => ({ state: { ...state.state, shouldRetrieve } })),
//   setDevices: (devices) => set((state) => ({ state: { ...state.state, devices } })),
//   setPlayer: (player) => set((state) => ({ state: { ...state.state, player } })),
//   setChromecasts: (chromecasts) => set((state) => ({ state: { ...state.state, chromecasts } })),
//   setCategories: (categories) => set((state) => ({ state: { ...state.state, categories } })),
//   setPlaylists: (playlists) => set((state) => ({ state: { ...state.state, playlists } })),
//   setView: (view) => set((state) => ({ state: { ...state.state, view } })),
//   setSearch: (search) => set((state) => ({ state: { ...state.state, search } })),
// }));

// export default useSpotcastStore;
