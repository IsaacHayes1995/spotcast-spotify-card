import { html } from "lit";
import { BaseView } from "./baseView";

export class PlayingIcon extends BaseView {
    
    public renderTemplate() {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 21" width="17" height="21">
                <!-- Bar 1 -->
                <rect x="1" y="11" width="2" height="10" fill="#1DB954">
                    <animate attributeName="height" values="5;10;15;10;5" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" values="16;11;6;11;16" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 2 -->
                <rect x="4" y="9" width="2" height="12" fill="#1DB954">
                    <animate attributeName="height" values="7;12;5;12;7" dur="0.7s" repeatCount="indefinite" />
                    <animate attributeName="y" values="14;9;16;9;14" dur="0.7s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 3 -->
                <rect x="7" y="8" width="2" height="13" fill="#1DB954">
                    <animate attributeName="height" values="6;13;18;13;6" dur="0.8s" repeatCount="indefinite" />
                    <animate attributeName="y" values="15;8;3;8;15" dur="0.8s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 4 -->
                <rect x="10" y="11" width="2" height="10" fill="#1DB954">
                    <animate attributeName="height" values="5;10;15;10;5" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" values="16;11;6;11;16" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <!-- Bar 5 -->
                <rect x="13" y="13" width="2" height="8" fill="#1DB954">
                    <animate attributeName="height" values="3;8;12;8;3" dur="0.75s" repeatCount="indefinite" />
                    <animate attributeName="y" values="18;13;9;13;18" dur="0.75s" repeatCount="indefinite" />
                </rect>
            </svg>`;
    }
}
