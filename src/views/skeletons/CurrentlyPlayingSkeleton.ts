import { html } from "lit";
import { BaseView } from "../baseView";

export class CurrentlyPlayingSkeleton extends BaseView {
    private gradient: string = "linear-gradient(45deg, #1f2937, #374151)";

    renderTemplate() {
        return html`
          <div class="card max-h-[60px] p-3 rounded-lg" style="background: ${this.gradient}">
            <div class="flex items-center justify-between gap-3">
              <!-- Avatar and Text Section -->
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

              <!-- Icons Section -->
              <div class="flex items-center gap-2">
                <div class="skeleton w-6 h-6 rounded-full"></div>
                <div class="skeleton w-6 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
        `;
    }
}
