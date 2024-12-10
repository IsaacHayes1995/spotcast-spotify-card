import { HomeAssistantStoreInitialState, RetrieveState, UseHomeAssistantStore } from "../store";
import { HomeAssistant } from "custom-card-helpers";

/**
 * Service to make service calls to Spotcast
 */
export class SpotcastService {
  _hass: HomeAssistant;

  constructor() {
    console.log("spotcastwebsocket constructor");
    UseHomeAssistantStore.subscribe(async (state) => {
      if (state.hass) {
        this._hass = state.hass;
      }

      if (state.retrieveState === RetrieveState.INITIAL && state.hass && state.config) { 
        await this.likeMedia(["spotify:track:716qIdh6lLnhoYvvZXFYlJ"])
      }
    })
  }

  /**
   * Likes one or multiple tracks.
   * @param uris The URIs of the tracks to like.
   * @param account Optional account identifier.
   * @returns A promise resolving to the search results.
   */
  async likeMedia(spotify_uris: string[], account?: string) {
    console.log("liking media:", spotify_uris);
    await this._hass.callService('spotcast', 'like_media', {
      account,
      spotify_uris
    });
  }
}
