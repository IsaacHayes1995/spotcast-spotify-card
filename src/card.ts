import { html, LitElement } from "lit";
import { state } from 'lit/decorators.js';

import { customElement } from 'lit/decorators/custom-element.js';

import { styles } from "./card.styles";


import { servicesColl } from "home-assistant-js-websocket";
import Config from "./models/config";
import { debounce } from "./helpers/helpers";
import { HomeAssistant } from "custom-card-helpers";
import { ChromecastResponse, DevicesResponse } from "./models/spotcast/device";
import { PlayerResponse } from "./models/spotcast/player";
import { CategoriesResponse } from "./models/spotcast/category";
import { PlaylistsResponse } from "./models/spotcast/playlist";
import { ViewResponse } from "./models/spotcast/view";
import { SearchResponse } from "./models/spotcast/search";
import { Skeleton } from "./components/skeleton";
import { HomeAssistantStoreInitialState, RetrieveState, UseHomeAssistantStore } from "./store";

console.info("Spotcast spotify card with zustand, lit and tailwind");
@customElement('spotcast-spotify-card')
export class SpotcastSpotifyCard extends LitElement {
  // declarative part
  static styles = styles;

  // internal reactive states
  @state() private _devices: DevicesResponse;
  @state() private _player: PlayerResponse;
  @state() private _chromecasts: ChromecastResponse;
  @state() private _categories: CategoriesResponse;
  @state() private _playlists: PlaylistsResponse;
  @state() private _views: ViewResponse;
  @state() private _search: SearchResponse;

  retrieveState = HomeAssistantStoreInitialState.retrieveState;

  // constructor
  constructor() {
    super();
    UseHomeAssistantStore.subscribe((state) => {
      this.retrieveState = state.retrieveState;
    })
  }

  // Updates whenever the `hass` property changes
  // This happens if anything changes state in homeassistant
  set hass(hass: HomeAssistant | undefined) {
    HomeAssistantStoreInitialState.setHass(hass);
    this.debouncedRetrieveAndSetDevices();
  }

  setConfig(config: Config) {
    HomeAssistantStoreInitialState.setConfig(config);
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  private debouncedRetrieveAndSetDevices = debounce(() => {
    if (this.retrieveState != RetrieveState.RETRIEVING) {
      HomeAssistantStoreInitialState.setRetrieveState(RetrieveState.START);
    }
  }, 5000); //5s debounce

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

