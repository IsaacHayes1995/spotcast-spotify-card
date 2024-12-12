import { html } from "lit";
import { state } from 'lit/decorators.js';
import ColorThief from "colorthief";
import { BaseView } from "./baseView";

export class CurrentlyPlayingView extends BaseView {
  @state() private backgroundColor: string = "#1f2937"; // Default background color

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.setBackgroundColor();
  }
  async setBackgroundColor(): Promise<void> {
    console.log("setBackgroundColor");
    const colorThief = new ColorThief()

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = "https://img.daisyui.com/images/profile/demo/2@94.webp";

    img.onload = () => {
      const [r, g, b] = colorThief.getColor(img);
      const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      this.backgroundColor = hexColor; // Update background color
    };
  }

  renderTemplate() {
    return html`
      <div class="card max-h-[60px] p-3 rounded-lg" style="background-color: ${this.backgroundColor}">
        <div class="flex items-center justify-between gap-3">
          <!-- Avatar and Text Section -->
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold text-white">Hart Hagerty</div>
              <div class="text-sm text-gray-400">United States</div>
            </div>
          </div>

          <!-- Icons Section -->
            <div class="flex items-center gap-2">
                <button class="btn btn-xs btn-ghost text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-speaker" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                </button>
                <button class="btn btn-xs btn-ghost text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                    </svg>
                </button>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define("currently-playing-view", CurrentlyPlayingView);
