import { RetrieveState } from "store";

export interface TableData{
    id: string;
    name: string;
    img: string;
    description: string;
    uri: string;
    icons: string[];
    isActive: boolean;
    isPlaying: boolean;
    rowAction: RetrieveState;
}