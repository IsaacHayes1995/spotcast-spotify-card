export interface WebSocketResponse<T> {
    total: number;
    account: string;
    [key: string]: unknown;
}