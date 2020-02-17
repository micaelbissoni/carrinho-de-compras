export enum CartItemsTypes {
    LOAD_REQUEST = '@CartItens/LOAD_REQUEST',
    LOAD_SUCCESS = '@CartItens/LOAD_SUCCESS',
    LOAD_FAILURE = '@CartItens/LOAD_FAILURE',
}

export interface CartItem {
    id: number
    nome: string
    qty: number
}  

export interface CartState {
    readonly data: CartItem[]
    readonly loading: boolean
    readonly error: boolean
}
