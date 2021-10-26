import axios from 'axios'
import * as actionsTypes from  '../constants/falms.types';


// ! ===> getMovies  <===
export const getMovies = () => async(dispatch) =>{
    try {
        dispatch({type: actionsTypes.GET_FALM_REQUET});
        // console.log()
        const   {data}  = await axios.get("/api/getmovise");
       
        dispatch({type: actionsTypes.GET_FALM_SUCCESS,
            payload:data.movies
        });
          
    } catch (error) {
        dispatch({
            type: actionsTypes.GET_FALM_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

// ! ===> getMoviesID  <===
export const MoviesID = (id) => async(dispatch)=> {
    try {
        dispatch({type:actionsTypes.GET_FALM_DETAILS_REQUEST});
        const {data} = await axios.get(`/api/getmoviseID/${id}`)
        dispatch({type:actionsTypes.GET_FALM_DETAILS_SUCCESS,
        payload:data.dataID
        })
      
    } catch (error) {
        dispatch({type:actionsTypes.GET_FALM_DETAILS_FAIL,
        payload:error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

// ! ===> removeMoviesDetails  <===
export const removeMoviesDetails = () => (dispatch) => {
    dispatch({ type: actionsTypes.GET_FALM_DETAILS_RESET });
  };