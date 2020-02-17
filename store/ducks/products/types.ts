export enum ProductsTypes {
    LOAD_REQUEST = '@Products/LOAD_REQUEST',
    LOAD_SUCCESS = '@Products/LOAD_SUCCESS',
    LOAD_FAILURE = '@Products/LOAD_FAILURE',
}

export interface Product {
    id: number
    nome: string
}  

export interface ProductState {
    readonly data: Product[]
    readonly loading: boolean
    readonly error: boolean
}
