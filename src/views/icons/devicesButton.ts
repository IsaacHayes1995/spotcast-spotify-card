import { html } from "lit";
import { state } from 'lit/decorators.js';
import { BaseView } from "../baseView";
import { DevicesResponse } from "../../models/spotcast/device";
import { UseHomeAssistantStore } from "../../store";
import { areObjectsEqual } from "../../helpers/helpers";

export class DevicesIcon extends BaseView {
  @state()
  private availableDevices: DevicesResponse;
  @state()
  private availableChromeCastDevices: DevicesResponse;

  private activeDevice: string;

  constructor() {
    super();
    this.availableDevices = UseHomeAssistantStore.getState().devices;
    this.availableChromeCastDevices = UseHomeAssistantStore.getState().chromeCastDevices;

    UseHomeAssistantStore.subscribe((data) => {
      if (areObjectsEqual(data.chromeCastDevices?.devices, this.availableChromeCastDevices?.devices) &&
          areObjectsEqual(data.devices?.devices, this.availableDevices?.devices)) {
        return;
      };

      this.availableDevices = data.devices;
      this.availableChromeCastDevices = data.chromeCastDevices;
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.globalClick = this.globalClick.bind(this);
    document.addEventListener("click", this.globalClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.globalClick);
  }

  globalClick(event: MouseEvent) {
    const path = event.composedPath();
    const details = this.shadowRoot?.querySelector("details.speaker-dropdown");

    if (details && !path.includes(details)) {
      details.removeAttribute("open");
    }
  }

  toggleDropdown() {
    const details = this.shadowRoot?.querySelector("details.speaker-dropdown");

    if (details ) {
      details.removeAttribute("open");
    }

  }

  renderTemplate() {
    return html`
      <div class="flex justify-between items-end pb-2">
        <details class="dropdown dropdown-top dropdown-end z-50 speaker-dropdown">
          <summary class="btn btn-ghost p-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-speaker"
            viewBox="0 0 16 16"
          >
            <path
             d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
            />
            <path
              d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
            />
          </svg>
          </summary>

          <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
            ${(this.availableDevices?.devices ?? []).map(device => html`
              <li @click="${this.toggleDropdown}"><a href="#">${device.name}</a></li>
            `)}

            <div class="divider">Chromecast devices</div>

            ${(this.availableChromeCastDevices?.devices ?? []).map(device => html`
              <li @click="${this.toggleDropdown}"><a href="#">${device.name}</a></li>
            `)}
          </ul>
        </details>
      </div>
    `;
  }
}

