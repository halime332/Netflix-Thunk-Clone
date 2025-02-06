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
                payload: err.message,
            })
        );


};

//favorilerdeki filmleri al
export const getFavorites = () => (dispatch) => {

    dispatch({ type: ActionTypes.FAV_LOADING });
    api
        .get("/account/21748910/favorite/movie")
        .then((res) =>
            dispatch({
                type: ActionTypes.FAV_SUCCESS,
                payload: res.data.results,
            })
        )
        .catch((err) =>
            dispatch({
                type: ActionTypes.FAV_ERROR,
                payload: err.message
            })
        );
};

// todo  favorilere ekle
export const toggleFavorite = (movie, isAdd) => (dispatch) => {

    api
        .post(`/account/21748910/favorite`, {
            media_type: "movie",
            media_id: movie.id,
            favorite: isAdd,
        })
        .then(() => {
            //isAdd true ise api'a da eklendiği için reducer'a ekleem haberi veriyoruz
            // isAdd false ise api'den kaldırdığımız için reducer'a silme haberi gönderiyoruz
            isAdd
                ? dispatch({ type: ActionTypes.ADD_TO_FAV, payload: movie })
                :
                dispatch({ type: ActionTypes.REMOVE_FAV, payload: movie });
        })

        .catch((err) => console.log(err));
};