import { WebSocketResponse } from "./websocketResponse";

export interface Device {
    id: string;
    name: string;
    type: string;
}

export interface DevicesResponse extends WebSocketResponse<Device[]> {
    devices: Device[];
}

export interface ChromecastResponse extends WebSocketResponse<Device[]> {
    devices: Device[];
}