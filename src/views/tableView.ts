import { html } from "lit";
import { BaseView } from "./baseView";
import { RetrieveState, UseHomeAssistantStore } from "../store";
import { state } from 'lit/decorators.js';
import { areObjectsEqual, removeHtmlTags, truncateText } from "../helpers/helpers";
import { TableData } from "models/tableData";

export class TableView extends BaseView{
    @state() tableData: TableData[] = null;

    constructor() {
        super();
        this.tableData = UseHomeAssistantStore.getState().tableData;

        UseHomeAssistantStore.subscribe((state) => {
            this.updateTableData(state.tableData);
        })
    }

    private updateTableData(data: TableData[]){
        if (data !== null && !areObjectsEqual(data, this.tableData)) {
            console.log(data);
            this.tableData = data;
        };
    }

    private rowClick(data: TableData) {
        UseHomeAssistantStore.setState({
            changeData: data.id,
            retrieveState: data.rowAction
        })
    }

    private iconClick(data: TableData) {

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
                        ${this.tableData?.map(
                            (data, index) => html`
                                <tr @click=${() => this.rowClick(data)} class="hover:bg-primary/10 ease-in-out duration-200 h-16">
                                    <th class="${data.isActive ? 'text-[#1ed760]' : ''}">
                                        ${this.getNumberRow(data.isActive, index)}
                                    </th>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="${data.img}"
                                                        alt="Icon of playlist" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-bold ${data.isActive ? 'text-[#1ed760]' : ''}">${truncateText(removeHtmlTags(data.name), 24)}</div>
                                                <div class="text-sm opacity-90">${truncateText(removeHtmlTags(data.description), 24)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <!-- <td> description </td> -->
                                    <td >
                                        <button class="btn btn-ghost mb-1 p-0 ${data.isActive ? 'text-[#1ed760]' : ''}" @click=${() => this.iconClick(data)} >
                                            ${data.isPlaying
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
