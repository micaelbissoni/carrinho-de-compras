import { UserState, UsersTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: UserState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersTypes.LOGIN_REQUEST:
            return { ... state, loading: true }
        case UsersTypes.LOGIN_SUCCESS:
            return { ... state, loading: false, error: false, data: action.payload.data.data }
        case UsersTypes.LOGIN_FAILURE:
            return { ... state, loading: false, error: true, data: [] }
        default:
            return state;
    }
}

export default reducer;