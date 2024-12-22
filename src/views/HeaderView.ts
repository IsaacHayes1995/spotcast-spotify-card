import { html, css } from "lit";
import { BaseView } from "./baseView";
import { state } from 'lit/decorators.js';

export class HeaderView extends BaseView {
    @state() private isRotated = false;  // To track if the dropdown is open

    static get styles() {
        return [
        ...super.styles,
        css`
            .rotate {
                transition: transform 0.2s ease-in-out;
            }

            .rotate-90 {
                transform: rotate(90deg);  // This rotates the caret 180 degrees
            }
        `
        ];
    }

    connectedCallback() {
        super.connectedCallback();
        this.globalClick = this.globalClick.bind(this);
        document.addEventListener('click', this.globalClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.globalClick);
    }

    toggleIcon() {
        this.isRotated = !this.isRotated;
    }

    globalClick(event: MouseEvent) {
        const path = event.composedPath();
        const details = this.shadowRoot?.querySelector('details.headerview');

        if (details && !path.includes(details)) {
            this.isRotated = false;
            details.removeAttribute('open');
        }
    }

    toggleLI() {
        var details = this.shadowRoot?.querySelector('details.headerview');
        if (details && this.isRotated) {
            details.removeAttribute('open');
        }

        this.toggleIcon();
    }

    renderTemplate() {
        return html`
        <div class="flex justify-between items-end border-b border-gray-300 pb-2">
            <details class="dropdown z-50 headerview">
                <summary @click="${this.toggleIcon}" class="btn btn-ghost text-4xl font-bold flex items-center">
                    Recently played
                    <svg class="mt-4 ml-[-3px] rotate ${this.isRotated ? 'rotate-90' : ''}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </summary>

                <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
                    <li @click="${this.toggleLI}"><a href="#">Song 1</a></li>
                    <li @click="${this.toggleLI}"><a href="#">Song 2</a></li>
                    <li @click="${this.toggleLI}"><a href="#">Song 3</a></li>
                </ul>
            </details>
        </div>
        `;
    }


}
