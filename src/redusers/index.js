import { FETCH_APOD_START, FETCH_APOD_SUCCES, FETCH_APOD_FAILURE } from "../actions/index";

const initialState = {
    apod: null,
    error: "",
    loading: false
};

const reducer = (state = initialState, action) => {
    console.log("action", action)
    switch(action.type) {
        case FETCH_APOD_START:
            return {
                ...state,
                error: "",
                loading: true
            }
        case FETCH_APOD_SUCCES:
            return {
                ...state,
                error: "",
                loading: false,
                apod: action.payload
            }
        case FETCH_APOD_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                apod: null
            }
        default:
            return state;
    }
};

export default reducer;