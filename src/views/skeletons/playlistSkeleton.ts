import { html } from "lit";
import { BaseView } from "../baseView";

export class PlaylistSkeleton extends BaseView {
    
    public renderTemplate() {
        return html`
            <div class="flex w-52 flex-col gap-4">
                <div class="skeleton h-32 w-full"></div>
                <div class="skeleton h-4 w-28"></div>
                <div class="skeleton h-4 w-full"></div>
                <div class="skeleton h-4 w-full"></div>
            </div>`;
    }
}
