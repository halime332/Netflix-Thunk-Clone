//kategori verilerini alıp reducer'a bildiren thunk aksiyonu


import api from "../../utils/api";
import ActionTypes from "../ActionTypes"

//
export const getGenres = () => (dispatch) => {
    // yüklenmenin başladığını reducera bildiriyoruz
    dispatch({ type: ActionTypes.GENRE_LOADING });

    //apiden kategorileri iste
    api
        .get("/genre/movie/list", { params: { language: "tr" } })
        .then((res) =>
            //başarılı olursa reducera veriyi heber ver
            dispatch({
                type: ActionTypes.GENRE_SUCCESS,
                payload: res.data.genres,
            })
        )
        // başarısız olursa reducer'a heber ver
        .catch((err) =>
            dispatch({
                type: ActionTypes.GENRE_ERROR,
                payload: err.message
            })
        );


};

//favorilerdeki filmleri al
export const getFavorites = () => (dispatch) => {

    dispatch({ type: ActionTypes.FAV_LOADING });
    api
        .get("/account/21748910/favorite/movies")
        .then((res) =>
            dispatch({
                type: ActionTypes.FAV_SUCCESS,
                payload: res.data.results,
            })
        )
        .catch((err) =>
            dispatch({
                type: ActionTypes.FAV_ERROR,
                payload: err,
            })
        );
};

// todo  favorilere ekle
export const toggleFavorite = (movie, isAdd) => (dispatch) => {
    console.log(movie);
    api
        .post(`/account/21748910/favorite/movies`, {
            media_type: "movie",
            media_id: "movie.id",
            favorite: isAdd,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};