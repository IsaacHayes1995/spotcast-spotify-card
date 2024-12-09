import { html, LitElement, TemplateResult, nothing } from "lit";
import { state } from 'lit/decorators.js';      

import { customElement } from 'lit/decorators/custom-element.js';

import { styles } from "./card.styles";
 

import { HassEntity, servicesColl } from "home-assistant-js-websocket";
import Config from "./models/config";
import { debounce } from "./helpers/helpers";
import { SpotcastWebsocketService } from "./services/spotcastWebsocketService";
import { HomeAssistant } from "custom-card-helpers";
import { ChromecastResponse, DevicesResponse } from "./models/spotcast/device";
import { PlayerResponse } from "./models/spotcast/player";
import { CategoriesResponse } from "./models/spotcast/category";
import { PlaylistsResponse } from "./models/spotcast/playlist";
import { ViewResponse } from "./models/spotcast/view";
import { SearchResponse } from "./models/spotcast/search";
import { Skeleton } from "./components/skeleton";


console.info("Spotcast spotify card loaded version 0.0.1");
@customElement('spotcast-spotify-card')
export class SpotcastSpotifyCard extends LitElement {
  // declarative part
  static styles = styles;
  public hass!: HomeAssistant;

  // internal reactive states
  @state() private _devices: DevicesResponse;
  @state() private _player: PlayerResponse;
  @state() private _chromecasts: ChromecastResponse;
  @state() private _categories: CategoriesResponse;
  @state() private _playlists: PlaylistsResponse;
  @state() private _views: ViewResponse;
  @state() private _search: SearchResponse;

  private spotcastWebsocket: SpotcastWebsocketService = new SpotcastWebsocketService(this);

  // constructor
  constructor() {
    super();
    console.log("Spotcast spotify card constructor");
  }

  // lifecycle interface
  setConfig(config: Config) {
    console.log("this.config", config);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.debouncedRetrieveAndSetDevices();
    this.debouncedSetDefaultView();
  }

  private debouncedRetrieveAndSetDevices = debounce(() => {
    this.retrieveAndSetDevices();
  }, 500); //200 ms debounce

  private debouncedSetDefaultView = debounce(() => {
    this.retrieveAndSetDefaultView();
  }, 500); //200 ms debounce

  private async retrieveAndSetDevices() {
    this._devices = await this.spotcastWebsocket.fetchDevices();
    this._player = await this.spotcastWebsocket.fetchPlayer();
    this._chromecasts = await this.spotcastWebsocket.fetchChromecasts();
    this._categories = await this.spotcastWebsocket.fetchCategories();
    // var categoryPlaylists = await this.spotcastWebsocket.fetchPlaylists("mikeve97", categoriesResult.categories[0].name);
  }

  private async retrieveAndSetDefaultView() {
    this._views = await this.spotcastWebsocket.fetchView();
    this._search = await this.spotcastWebsocket.fetchSearch("mikeve97", "This is adele", "playlist");
  }

  private isSpotcastInstalled() {
    // @ts-ignore
    return !!this.hass?.connection && servicesColl(this.hass.connection).state.spotcast !== undefined;
  }


  render() {
    return html`
      <ha-card header="Spotcast spotify card">
        <div class="card-content">${Skeleton.getTemplate()}</div>
      </ha-card>
    `;
  }

  // event handling
  // card configuration
  static getConfigElement() {
    return document.createElement("spotcast-spotify-card-editor");
  }

  static getStubConfig() {
    return {
      header: "Test",
    };
  }
}

