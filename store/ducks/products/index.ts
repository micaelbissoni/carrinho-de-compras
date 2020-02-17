import { ProductState, ProductsTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: ProductState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductsTypes.LOAD_REQUEST:
            return { ... state, loading: true }
        case ProductsTypes.LOAD_SUCCESS:
            return { ... state, loading: false, error: false, data: action.payload.data.data }
        case ProductsTypes.LOAD_FAILURE:
            return { ... state, loading: false, error: true, data: [] }
        default:
            return state;
    }
}

export default reducer;