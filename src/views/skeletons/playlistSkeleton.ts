import { html } from "lit";
import { BaseView } from "../baseView";

export class PlaylistSkeleton extends BaseView {

    public renderTemplate() {
        return html`
            <div class="max-h-[470px] min-h-[100px] w-full overflow-y-auto overflow-x-hidden mb-[-40px]">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${[...Array(10)].map((_, index) => html`
                            <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                <th>
                                    <div class="skeleton w-4 h-4"></div>
                                </th>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="avatar">
                                            <div class="skeleton mask mask-squircle h-12 w-12">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="skeleton h-4 w-28 mb-2"></div>
                                            <div class="skeleton h-3 w-40"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="flex gap-2">
                                        <div class="skeleton w-6 h-6 rounded-full"></div>
                                        <div class="skeleton w-6 h-6 rounded-full"></div>
                                    </div>
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
    }
}
