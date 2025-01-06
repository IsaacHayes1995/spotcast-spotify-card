import { TemplateResult } from "lit";
import { StoreState } from "store";

export interface TableData{
    id: string;
    name: string;
    img: string;
    description: string;
    uri: string;
    icons: TemplateResult[];
    isActive: boolean;
    isPlaying: boolean;
    rowAction: StoreState;
}