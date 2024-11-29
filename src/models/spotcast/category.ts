import { WebSocketResponse } from "./websocketResponse";

export interface Category {
    id: string;
    name: string;
}

export interface CategoriesResponse extends WebSocketResponse<Category[]> {
    categories: Category[];
}