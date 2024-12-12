import { html, LitElement } from "lit";
import { customElement } from 'lit/decorators/custom-element.js';
import { styles } from "./card.styles";
import { servicesColl } from "home-assistant-js-websocket";
import Config from "./models/config";
import { debounce } from "./helpers/helpers";
import { HomeAssistant } from "custom-card-helpers";
import { HomeAssistantStoreInitialState, UseHomeAssistantStore } from "./store";

console.info("Spotcast spotify card UI fase v0.0.3");
@customElement('spotcast-spotify-card')
export class SpotcastSpotifyCard extends LitElement {
  static get styles() {
    return [styles]
  }

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
    // HomeAssistantStoreInitialState.setHass(hass);
    // this.debouncedRetrieveAndSetDevices();
  }

  setConfig(config: Config) {
    // HomeAssistantStoreInitialState.setConfig(config);
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

  render() {
    return html`
      <ha-card>
        <div class="card-content">
          <header-view></header-view>
          <playlist-view></playlist-view>
          <currently-playing-view></currently-playing-view>
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

