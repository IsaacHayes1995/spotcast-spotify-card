/// View for albums. All tracks in a album, with a button to like and add to queue.

import { html } from "lit-html";
import { BaseView } from "./baseView";

export class AlbumView extends BaseView {

    /// Render the tempplate similar to playlistView.ts
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
                        <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                            <th class="}">
                                1
                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img
                                                src=""
                                                alt="Icon of playlist" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold </div>
                                        <div class="text-sm opacity-90">Test</div>
                                    </div>
                                </div>
                            </td>
                            <td >

                            </td>
                        </tr>
                     </tbody>
                </table>
            </div>
        `;
    }
}