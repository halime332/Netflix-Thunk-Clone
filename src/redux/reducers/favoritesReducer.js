import ActionTypes from "../ActionTypes";

const initialState = {
    favorites: [],
    isLoading: true,
    error: null,
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FAV_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.FAV_ERROR:
            return { ...state, isLoading: false, error: action.payload };

        case ActionTypes.FAV_SUCCESS:
            return { isLoading: false, error: null, favorites: action.payload };

        case "a":
            return state;
        case "b":
            return state;
        default:
            return state;
    }
};
export default favoritesReducer;