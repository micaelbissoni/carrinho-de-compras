import { CartState, CartItemsTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: CartState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartItemsTypes.LOAD_REQUEST:
            return { ... state, loading: true }
        case CartItemsTypes.LOAD_SUCCESS:
            return { ... state, loading: false, error: false, data: action.payload.data.data }
        case CartItemsTypes.LOAD_FAILURE:
            return { ... state, loading: false, error: true, data: [] }
        default:
            return state;
    }
}

export default reducer;