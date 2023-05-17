
export interface CartInfo {
    product: any, qty: number
}

export interface CartObject {
    cart: CartInfo[];
}

export interface CartAction {
    type: string;
    payload: any
}
