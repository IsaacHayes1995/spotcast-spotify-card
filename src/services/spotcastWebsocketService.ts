import { CategoriesResponse } from "../models/spotcast/category";
import { ChromecastResponse, DevicesResponse } from "../models/spotcast/device";
import { PlayerResponse } from "../models/spotcast/player";
import { PlaylistsResponse } from "../models/spotcast/playlist";
import { SearchResponse } from "../models/spotcast/search";
import { ViewResponse } from "../models/spotcast/view";
import { HomeAssistant } from "custom-card-helpers";
import { AccountResponse } from "models/spotcast/account";
import { TrackResponse } from "models/spotcast/track";

/**
 * Service to handle WebSocket requests for Spotcast integration.
 */
export class SpotcastWebsocketService {

  _hass: HomeAssistant;

  constructor(hass: HomeAssistant) {
    this._hass = hass;
  }

  /**
   * General method to handle WebSocket requests.
   * @param type The type of WebSocket request.
   * @param payload Additional payload for the request.
   * @returns A promise resolving to the WebSocket response.
   */
  private async _callWebSocket<T>(type: string, payload: Record<string, unknown> = {}): Promise<T> {
    const message = {
      type,
      ...payload,
    };

    try {
      return await this._hass.callWS<T>(message);
    } catch (error: any) {
      throw new Error(`Failed to fetch ${type} (payload: ${JSON.stringify(message)}): ${JSON.stringify(error)}`);
    }
  }

  /**
   * Fetches the list of devices from Spotcast.
   * @param account Optional account identifier.
   * @returns A promise resolving to an array of devices.
   */
  async fetchDevices(account?: string): Promise<DevicesResponse> {
    return await this._callWebSocket<DevicesResponse>('spotcast/devices', { account });
  }

  /**
   * Fetches the current player from Spotcast.
   * @param account Optional account identifier.
   * @returns A promise resolving to the current player.
   */
  async fetchPlayer(account?: string): Promise<PlayerResponse> {
    return await this._callWebSocket<PlayerResponse>('spotcast/player', { account });
  }

  /**
   * Fetches the list of available Chromecast devices.
   * @returns A promise resolving to an array of Chromecast devices.
   */
  async fetchChromecasts(): Promise<ChromecastResponse> {
    return await this._callWebSocket<ChromecastResponse>('spotcast/castdevices');
  }

  /**
   * Fetches categories from Spotcast.
   * @param account Optional account identifier.
   * @returns A promise resolving to the categories.
   */
  async fetchCategories(account?: string): Promise<CategoriesResponse> {
    return await this._callWebSocket<CategoriesResponse>('spotcast/categories', { account });
  }

  /**
   * Fetches playlists from a specific category in Spotcast.
   * @param account Optional account identifier.
   * @param category The category to fetch playlists from.
   * @returns A promise resolving to the playlists.
   */
  async fetchPlaylists(account?: string, category?: string): Promise<PlaylistsResponse> {
    return await this._callWebSocket<PlaylistsResponse>('spotcast/playlists', { account, category });
  }

  /**
   * Fetches a specific view from Spotcast.
   * @param account Optional account identifier.
   * @param url The URL of the view to fetch.
   * @returns A promise resolving to the view data.
   */
  async fetchView(account?: string, name: string = 'recently-played'): Promise<ViewResponse> {
    return await this._callWebSocket<ViewResponse>('spotcast/view', {
      account,
      name,
      limit: 20
    });
  }

  /**
   * Searches Spotcast for a specific query.
   * @param account Optional account identifier.
   * @param query The search query string.
   * @param searchType The type of search (e.g., 'track', 'album', 'playlist').
   * @returns A promise resolving to the search results.
   */
  async fetchSearch(account?: string, query: string = '', searchType: string = 'playlist'): Promise<SearchResponse> {
    return await this._callWebSocket<SearchResponse>('spotcast/search', { account, query, searchType });
  }

  /**
   * Returns the tracks of an playlist
   * @param account Optional account identifier.
   * @param url The url of the playlist
   * @returns A promise resolving to the search results.
   */
  async fetchTracks(account?: string, playlistId: string = ''): Promise<TrackResponse> {
    return await this._callWebSocket<any>('spotcast/tracks', { account, playlist_id: playlistId });
  }

  /**
   * Gets the users liked media
   * @param account Optional account identifier.
   * @returns A promise resolving to the search results.
   */
  async fetchLikedMedia(account?: string): Promise<any> {
    return await this._callWebSocket<any>('spotcast/liked_media', { account });
  }

  /**
   * Gets the available accounts
   * @returns A promise resolving the accounts.
   */
  async fetchAccounts(): Promise<AccountResponse> {
    return await this._callWebSocket<AccountResponse>('spotcast/accounts');
  }
}
