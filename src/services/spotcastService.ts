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
   * @param account Optional spotify account ID (entry_id).
   * @param media_player Optional the Home Assistant entity ID of the media player.
   * @param extras Optional extras to pass with the data payload.
   */
  async playMedia(
    activeMedia: PlaylistItem,
    account?: string,
    mediaPlayer?: string,
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
  }
}
