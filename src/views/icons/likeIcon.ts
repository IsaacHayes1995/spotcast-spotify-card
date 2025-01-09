import { html, css } from "lit";
import { property } from "lit/decorators.js";
import { BaseView } from "../baseView";
import { Track } from "../../models/spotcast/track";

export class LikeIcon extends BaseView {
  @property({ type: Object })
  data!: Track;

  @property({ type: Object })
  liked!: boolean;

  private likeSong(event: Event): void {
    event.stopPropagation(); // Prevent click event from propagating to parent elements
    console.log("Liking song", this.data);
  }

  renderTemplate() {
      return html`
      <button class="btn btn-ghost mb-1 p-0 ${this.liked ? 'text-[#1ed760]' : ''}"
              @click=${(event: Event) => this.likeSong(event)}>
        ${!this.liked
          ? html`
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>`
          : html`
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>`
        }
      </button>
    `;
  }
}
