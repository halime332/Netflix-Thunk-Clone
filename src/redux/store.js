import { createStore, combineReducers, applyMiddleware } from "redux";
import genreReducer from "./reducers/genreReducer";
import { thunk } from "redux-thunk";
import favoritesReducer from "./reducers/favoritesReducer";



const rootReducer = combineReducers({
    genres: genreReducer,
    favorites: favoritesReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;