import { html, LitElement } from "lit";
import { customElement } from 'lit/decorators/custom-element.js';
import { styles } from "./card.styles";
import { servicesColl } from "home-assistant-js-websocket";
import Config from "./models/config";
import { HomeAssistant } from "custom-card-helpers";
import { RetrieveState, UseHomeAssistantStore, UseViewStore, ViewStoreInitialState } from "./store";
import { state } from "lit/decorators.js";

console.info("Spotcast spotify card UI fase v0.0.3");
@customElement('spotcast-spotify-card')
export class SpotcastSpotifyCard extends LitElement {
  @state() playListViewReady: boolean = ViewStoreInitialState.playlistViewReady;
  @state() currentlyPlayingViewReady: boolean = ViewStoreInitialState.currentlyPlayingViewReady;

  static get styles() {
    return [styles]
  }

  // constructor
  constructor() {
    super();
    UseViewStore.subscribe((state) => {
      this.playListViewReady = state.playlistViewReady
      this.currentlyPlayingViewReady = state.currentlyPlayingViewReady
    });
  }

  // Updates whenever the `hass` property changes
  // This happens if anything changes state in homeassistant
  set hass(hass: HomeAssistant | undefined) {
    UseHomeAssistantStore.setState({hass: hass, retrieveState: RetrieveState.UPDATEHASS});
  }

  setConfig(config: Config) {
    UseHomeAssistantStore.setState({config: config, retrieveState: RetrieveState.UPDATECONFIG});
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  // private debouncedRetrieveAndSetDevices = debounce(() => {
  //   if (this.retrieveState != RetrieveState.RETRIEVING) {
  //     HomeAssistantStoreInitialState.setRetrieveState(RetrieveState.START);
  //   }
  // }, 5000); //5s debounce

  private isSpotcastInstalled() {
    // @ts-ignore
    return !!this.hass?.connection && servicesColl(this.hass.connection).state.spotcast !== undefined;
  }

  getPlaylistView() {
    if(!this.playListViewReady) {
        return html`<playlist-skeleton></playlist-skeleton>`
    }

    return html`<playlist-view></playlist-view>`;
  }

  getCurrentlyPlayingView() {
    if(!this.currentlyPlayingViewReady) {
        return html`<currently-playing-skeleton></currently-playing-skeleton>`
    }

    return html`<currently-playing-view></currently-playing-view>`;
  }

  render() {
    return html`
      <ha-card>
        <div class="card-content">
          <header-view></header-view>
          ${this.getPlaylistView()}
          ${this.getCurrentlyPlayingView()}
        </div>
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

