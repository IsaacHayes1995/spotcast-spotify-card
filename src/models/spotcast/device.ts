import { WebSocketResponse } from "./websocketResponse";

export interface Device {
    id: string;
    name: string;
    type: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    supports_volume: boolean;
    volume_percent: number;
}

export interface DevicesResponse extends WebSocketResponse<Device[]> {
    devices: Device[];
}

export interface ChromecastResponse extends WebSocketResponse<Device[]> {
    devices: Device[];
}