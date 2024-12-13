import { html } from "lit";
import { BaseView } from "./baseView";
import { RetrieveState, UseHomeAssistantStore } from "../store";
import { state } from 'lit/decorators.js';
import { ViewResponse } from "../models/spotcast/view";
import { PlaylistItem } from "../models/spotcast/PlaylistItem";
import { areObjectsEqual, removeHtmlTags, truncateText } from "../helpers/helpers";


export class PlaylistView extends BaseView{
    @state() view: ViewResponse = null;
    @state() activeMedia: PlaylistItem = null;
    
    constructor(){
        super();
        UseHomeAssistantStore.subscribe((state, prevState) => {
            if(state.retrieveState === RetrieveState.FINISHED && state.view){
                this.view = state.view;
            }

            if(state.activeMedia?.item !== null && areObjectsEqual(state.activeMedia, prevState.activeMedia ) ) return;

            this.activeMedia = state.activeMedia.item;
        }) 
    }

    startPlaybackPlaylist(activeMedia: PlaylistItem) {
        UseHomeAssistantStore.setState({activeMedia: {item: activeMedia, start: true}});
    }

    getNumberRow(PlaylistUri: string, index: number) {
        if(this.activeMedia?.uri === PlaylistUri) {
            return html`<playing-icon></playing-icon>`
        }
            
        return html`${index + 1}`;
    }

    public renderTemplate() {
        return html`
            <div class="max-h-[470px] min-h-[100px] w-full overflow-y-auto overflow-x-hidden mb-[-40px]">
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
                        ${this.view?.playlists.map(
                            (playlist, index) => html`
                                <tr @click=${() => this.startPlaybackPlaylist(playlist)} class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                    <th>
                                        ${this.getNumberRow(playlist.uri, index)}
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
                                                <div class="font-bold ${this.activeMedia?.uri === playlist.uri ? 'text-[#1ed760]' : ''}">${truncateText(removeHtmlTags(playlist.name), 30)}</div>
                                                <div class="text-sm opacity-50">${truncateText(removeHtmlTags(playlist.description), 30)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <!-- <td> description </td> -->
                                    <td>
                                        <label class="swap swap-rotate">
                                            <!-- this hidden checkbox controls the state -->
                                            <input type="checkbox" />

                                            <svg class="swap-off" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                            </svg>

                                            <!-- check icon -->
                                            <svg class="swap-on" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1DB954" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                            </svg>
                                        </label>
                                        <div class="dropdown dropdown-end">
                                            <div tabindex="0" role="button" class="btn btn-ghost m-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                                    <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                                                </svg>
                                            </div>
                                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </ul>
                                        </div>
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
