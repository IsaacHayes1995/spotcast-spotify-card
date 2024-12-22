import { html } from "lit";
import { BaseView } from "./baseView";
import { RetrieveState, UseHomeAssistantStore } from "../store";
import { state } from 'lit/decorators.js';
import { PlaylistItem } from "../models/spotcast/PlaylistItem";
import { areObjectsEqual, removeHtmlTags, truncateText } from "../helpers/helpers";

export class PlaylistView extends BaseView{
    @state() playlists: PlaylistItem[] = null;
    @state() activePlaylist: PlaylistItem = null;

    constructor() {
        super();
        this.playlists = UseHomeAssistantStore.getState().view?.playlists;
        this.activePlaylist = UseHomeAssistantStore.getState().activePlaylist?.item;

        UseHomeAssistantStore.subscribe((state) => {
            this.checkIfViewChanged(state.view?.playlists);
            this.checkIfActiveMediaChanged(state.activePlaylist?.item)
        })
    }

    checkIfViewChanged(playListItems: PlaylistItem[]){
        if(playListItems !== null && !areObjectsEqual(playListItems, this.playlists)){
            this.playlists = playListItems;
        };
    }

    checkIfActiveMediaChanged(activePlaylist: PlaylistItem){
        if(activePlaylist !== null && !areObjectsEqual(activePlaylist, this.activePlaylist ) ) {
            this.activePlaylist = activePlaylist;
        };
    }
    changePlaybackPlaylist(activePlaylist: PlaylistItem) {
        const playingPlaylist = this.playlists.find(playlist => playlist.is_playing);
        playingPlaylist && (playingPlaylist.is_playing = false);

        activePlaylist.is_playing = true;

        UseHomeAssistantStore.setState({activePlaylist: { item: activePlaylist, start: true }, retrieveState: RetrieveState.CHANGEPLAYLIST});
    }

    getNumberRow(isPlaying: boolean, index: number) {
        if(isPlaying) {
            return html`<playing-icon></playing-icon>`
        }

        return html`${index + 1}`;
    }

    public renderTemplate() {
        return html`
            <div class="max-h-[470px] min-h-[100px] w-full overflow-y-auto overflow-x-hidden ">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <!-- <th>Description</th> -->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.playlists?.map(
                            (playlist, index) => html`
                                <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                    <th class="${this.activePlaylist?.uri === playlist.uri ? 'text-[#1ed760]' : ''}">
                                        ${this.getNumberRow(playlist.is_playing, index)}
                                    </th>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="${playlist.icon}"
                                                        alt="Icon of playlist" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-bold ${this.activePlaylist?.uri === playlist.uri ? 'text-[#1ed760]' : ''}">${truncateText(removeHtmlTags(playlist.name), 24)}</div>
                                                <div class="text-sm opacity-90">${truncateText(removeHtmlTags(playlist.description), 24)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <!-- <td> description </td> -->
                                    <td>
                                        <button @click=${() => this.changePlaybackPlaylist(playlist)} class="btn btn-ghost m-1 ${this.activePlaylist?.uri === playlist.uri ? 'text-[#1ed760]' : ''}">
                                            ${playlist.is_playing
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
                                    </td>
                                </tr>
                            `
                        )}
                    </tbody>
                </table>
            </div>
        `;
    }
}
