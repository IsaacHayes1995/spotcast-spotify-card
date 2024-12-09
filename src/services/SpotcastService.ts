// import { HomeAssistant } from 'custom-card-helpers';
// import useSpotcastStore from '../store';
// import { SpotcastWebsocketService } from './spotcastWebsocketService';

// export class SpotcastService {
//   private spotcastWebsocketService: SpotcastWebsocketService;

//   constructor() {
//     this.spotcastWebsocketService = new SpotcastWebsocketService();

//     // Subscribe to Zustand store changes
//     useSpotcastStore.subscribe(
//         (state) => {
//             if (state.state.hass) {
//                 this.fetchData(state.state.hass);
//             }
//         }
//     );
//   }

//   // Method to start fetching data when hass is available
//   private async fetchData(hass: HomeAssistant) {
//     try {
//       console.log('Fetching data for Spotcast...');

//       // Triggering the data fetching based on the current `hass` value
//       await this.spotcastWebsocketService.fetchDevices();
//       await this.spotcastWebsocketService.fetchPlayer();
//       await this.spotcastWebsocketService.fetchChromecasts();
//       await this.spotcastWebsocketService.fetchCategories();
//       await this.spotcastWebsocketService.fetchPlaylists();
//       await this.spotcastWebsocketService.fetchView();
//       await this.spotcastWebsocketService.fetchSearch('example query');

//       // Optionally reset `shouldRetrieve` after fetching
//       useSpotcastStore.getState().setShouldRetrieve(false);
//     } catch (error) {
//       console.error('Error fetching Spotcast data:', error);
//     }
//   }
// }

// // Instantiate SpotcastService to trigger fetching when `hass` is set
// const spotcastService = new SpotcastService();
