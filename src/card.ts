import { html, LitElement, TemplateResult, nothing } from "lit";
import { customElement } from 'lit/decorators/custom-element.js';

import { styles } from "./card.styles";
import { state } from "lit/decorators/state";

import { HassEntity, servicesColl } from "home-assistant-js-websocket";
import Config from "./models/config";
import { debounce } from "./helpers/helpers";
import { SpotcastWebsocketService } from "./services/spotcastWebsocketService";
import { HomeAssistant } from "custom-card-helpers";

@customElement('spotcast-spotify-card')
export class SpotcastSpotifyCard extends LitElement {
  // declarative part
  static styles = styles;
  public hass!: HomeAssistant;

  // internal reactive states
  // @state() private _header: string | typeof nothing;
  // @state() private _entity: string;
  // @state() private _name: string;
  // @state() private _state: HassEntity;
  // @state() private _status: string;

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
    await this.spotcastWebsocket.fetchDevices();
    await this.spotcastWebsocket.fetchPlayer();
    await this.spotcastWebsocket.fetchChromecasts();
    var categoriesResult = await this.spotcastWebsocket.fetchCategories();
    var categoryPlaylists = await this.spotcastWebsocket.fetchPlaylists("mikeve97", categoriesResult.categories[0].name);
  }

  private async retrieveAndSetDefaultView() {
    await this.spotcastWebsocket.fetchView();
  }

  private isSpotcastInstalled() {
    return !!this.hass?.connection && servicesColl(this.hass.connection).state.spotcast !== undefined;
  }


  render() {
    var content = html`
        <dl class="dl">
          <dt class="dt">Test</dt>
          <dd class="dd">
            Data
          </dd>
          <dd class="error">
            Data-error
          </dd>
        </dl>
      `;
    return html`
      <ha-card header="Spotcast spotify card">
        <div class="card-content">${content}</div>
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
