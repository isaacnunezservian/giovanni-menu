export interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: string;
}

export interface UpdatePriceRequest {
    id: string;
    newPrice: number;
}

export interface AddItemRequest {
    name: string;
    price: number;
    category: string;
}

export interface DeleteItemRequest {
    id: string;
}