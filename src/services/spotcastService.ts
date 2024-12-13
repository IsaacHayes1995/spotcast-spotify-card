import { PlaylistItem } from "models/spotcast/PlaylistItem";
import { UseHomeAssistantStore } from "../store";
import { HomeAssistant } from "custom-card-helpers";
import { getActiveSpotcastPlayer } from "../helpers/helpers";

/**
 * Service to make service calls to Spotcast
 */
export class SpotcastService {
  _hass: HomeAssistant;

  constructor(hass: HomeAssistant) {
    this._hass = hass;
  }

  /**
   * Likes one or multiple tracks.
   * @param uris The URIs of the tracks to like.
   * @param account Optional account identifier.
   * @returns A promise resolving to the search results.
   */
  async likeMedia(spotify_uris: string[], account?: string) {
    await this._hass.callService('spotcast', 'like_media', {
      account,
      spotify_uris
    });
  }

  /**
   * Plays media on a specified media player.
   * @param spotify_uri The URI of the Spotify media (album, track, or playlist).
   * @param media_player The Home Assistant entity ID of the media player.
   * @param account Optional Spotify account identifier.
   * @param extras Optional extras to pass with the data payload.
   */
  async playMedia(
    activeMedia: PlaylistItem,
    mediaPlayer: string,
    account?: string,
    extras?: Record<string, any> // Flexible for additional extras
  ) {
    
    var player = getActiveSpotcastPlayer();
    const serviceData: Record<string, any> = {
      spotify_uri: activeMedia.uri, 
      media_player: { entity_id: [player] },
      account,
      extras
    };

    await this._hass.callService('spotcast', 'play_media', serviceData);
    // UseHomeAssistantStore.setState({activeMedia: {item: activeMedia, start: true}});
  }  
}
