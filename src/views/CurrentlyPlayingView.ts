import { html } from "lit";
import { state } from 'lit/decorators.js';

import { BaseView } from "./baseView";
import { PlaylistItem } from "../models/spotcast/playlistItem";
import { UseHomeAssistantStore } from "../store";
import { areObjectsEqual, getBackgroundGradient, removeHtmlTags, truncateText } from "../helpers/helpers";
import { ActiveTrack } from "models/activeTrack";

export class CurrentlyPlayingView extends BaseView {
  @state() private gradient: string = "linear-gradient(45deg, #1f2937, #374151)";
  imageUrl: string = "";
  artistNames: string = "";
  activePlaylist: PlaylistItem = null;
  activeTrack: ActiveTrack = null;

  constructor() {
    super();
    this.initialStartup();
    this.homeAssistantStoreSubscribe();
  }

  homeAssistantStoreSubscribe() {
    UseHomeAssistantStore.subscribe(async (state) => {
      const activeTrackChanged = state.activeTrack?.track !== null && !areObjectsEqual(state.activeTrack?.track, this.activeTrack?.track);
      if(!activeTrackChanged) return;

      this.activeTrack = state.activeTrack;
      this.artistNames = this.activeTrack.track.artists.map(artist => artist.name).join(", ");
      var largestImage = this.activeTrack.track.album.images.reduce(
        (prev, current) => prev.width > current.width ? prev : current, this.activeTrack.track.album.images[0]);
      this.imageUrl = largestImage.url;
      this.gradient = await getBackgroundGradient(largestImage.url);
    })
  }

  async initialStartup() {
    this.activeTrack = UseHomeAssistantStore.getState().activeTrack;
    this.artistNames = this.activeTrack.track?.artists.map(artist => artist.name).join(", ");
    var largestImage = this.activeTrack.track?.album.images.reduce(
      (prev, current) => prev.width > current.width ? prev : current, this.activeTrack?.track.album.images[0]);
    this.imageUrl = largestImage.url;
    this.gradient = await getBackgroundGradient(largestImage.url);
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  renderTemplate() {
    return html`
      <div class="card max-h-[60px] p-3 rounded-lg" style="background: ${this.gradient}">
        <div class="flex items-center justify-between gap-3">
          <!-- Avatar and Text Section -->
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img src="${this.imageUrl}" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold text-white">${truncateText(removeHtmlTags(this.activeTrack?.track?.name), 40)}</div>
              <div class="text-sm text-gray-400">${truncateText(removeHtmlTags(this.artistNames), 40)}</div>
            </div>
          </div>

          <!-- Icons Section -->
            <div class="flex items-center gap-2">
                <devices-icon></devices-icon>

                <button class="btn btn-xs btn-ghost text-white">
                    ${this.activeTrack.isPlaying
                      ? html`
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
                          </svg>`
                      : html`
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                          </svg>`
                    }
                </button>
            </div>
        </div>
      </div>
    `;
  }
}
