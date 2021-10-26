import * as actionsTypes from "../constants/falms.types.js";

// ! ==>  getMoviesReducer <==
export const getMoviesReducer = (state = { movies: []}, action) =>{
    switch (action.type) {
        case actionsTypes.GET_FALM_REQUET:
            return{
                loading:true,
                movies : []
            }
            case actionsTypes.GET_FALM_SUCCESS:
                return {
                    loading:false,
                    movies:action.payload
                }
           case actionsTypes.GET_FALM_FAIL:
               return{
                   loading:false,
                   error:action.payload
               }
    
        default:
            return state;
    }
}


// ! ==>  getMoviesIDReducer <==
export const getMoviesIDReducer =(state= {movie: {}},action) =>{
    switch (action.type) {
        case actionsTypes.GET_FALM_DETAILS_REQUEST:
            return{
                loading:true,
                // movie: []
            }
        case actionsTypes.GET_FALM_DETAILS_SUCCESS:
            return{
                loading:false,
                movie:action.payload
            }
       
        case actionsTypes.GET_FALM_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case actionsTypes.GET_FALM_DETAILS_RESET:
            return{
               
                movie:{}
            }

        default:
            return state;
    }
}