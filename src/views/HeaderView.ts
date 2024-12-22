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

            <span class="text-lg ml-auto mr-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                </svg>
            </span>
        </div>

        <div class="flex justify-between items-center pl-4 mt-2">
            <!-- Left Side: Search Button -->
            <div class="flex space-x-4">
                <label class="swap">
                    <input type="checkbox" class="hidden" />
                    <!-- Default icon (swap-off state) -->
                    <div class="swap-off text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <!-- Active icon (swap-on state) with color change -->
                    <div class="swap-on text-[#1DB954]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </label>
            </div>

            <!-- Right Side: Shuffle, Play Buttons -->
            <div class="flex space-x-4 mr-8 mb-3">

                <!-- Shuffle Button -->
                <label class="swap">
                    <input type="checkbox" class="hidden" />
                    <!-- Default icon (swap-off state) -->
                    <div class="swap-off text-gray-500">
                        <svg class="bi bi-shuffle mt-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                        </svg>
                    </div>
                    <!-- Active icon with color change (swap-on state) -->
                    <div class="swap-on text-[#1DB954]">
                        <svg class="bi bi-shuffle mt-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                        </svg>
                    </div>
                </label>

                <!-- Play Button -->
                <label class="swap">
                    <input type="checkbox" class="hidden" />
                    <!-- Default icon (swap-off state) -->
                    <div class="swap-off text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                    </div>

                    <!-- Active icon with color change (swap-on state) -->
                    <div class="swap-on text-[#1DB954]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                    </div>
                </label>

            </div>
        </div>

        `;
    }

    
}
