import axios from "axios";

import * as actionsTypes from "../constants/TvShows.aonstants";


// ! == |> getDataTv <| == //
export const getDataTV = () => async(dispatch) =>{
    try {
        dispatch({type:actionsTypes.GET_TV_REQUET});
        const {data} = await axios.get("/api/tv");
        dispatch({type:actionsTypes.GET_TV_SUCCESS,
        payload:data.tv
    })
    } catch (error) {
        dispatch({
            type:actionsTypes.GET_TV_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

// ! == |> getIDTv <| == //
export const getTvID = (id) => async(dispatch) =>{
    try {
        dispatch({type:actionsTypes.GET_TV_DETAILS_REQUEST});
        const {data} = await axios.get(`/api/tv/${id}`);
        dispatch({type:actionsTypes.GET_TV_DETAILS_SUCCESS,
        payload:data.tvID
        })
        console.log(data.tvID)
    } catch (error) {
        dispatch({type:actionsTypes.GET_TV_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
            });
    }
}
// ! ===> removeMoviesDetails  <===
export const removeMoviesDetails = () => (dispatch) => {
    dispatch({ type: actionsTypes.GET_TV_DETAILS_RESET});
  };