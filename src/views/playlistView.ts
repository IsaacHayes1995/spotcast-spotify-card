import { html } from "lit";
import { BaseView } from "./baseView";


export class PlaylistView extends BaseView{
    public renderTemplate() {
        const rows = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of numbers [1, 2, ..., 10]
        return html`
            <div class="max-h-[470px] w-full overflow-y-auto overflow-x-hidden mb-[-40px]">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                            <th>
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
                                </svg>

                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold text-[#1ed760]">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>
                                <label class="swap swap-rotate">
                                    <!-- this hidden checkbox controls the state -->
                                    <input type="checkbox" />

                                    <svg class="swap-off" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>

                                    <!-- check icon -->
                                    <svg class="swap-on" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1ed760" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
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
                        ${rows.map(
                            (rowNumber) => html`
                                <tr class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                    <th>${rowNumber}</th>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-bold">Hart Hagerty</div>
                                                <div class="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                    </td>
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
