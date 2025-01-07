import { html } from "lit";
import { BaseView } from "./baseView";
import { StoreState, UseHomeAssistantStore } from "../store";
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
            this.tableData = data;
        };
    }

    private rowClick(data: TableData) {
        console.log(data);
        UseHomeAssistantStore.setState({
            changeData: data.uri,
            storeState: data.rowAction
        })
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
                                        ${data.icons?.map(icon => icon)}
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
