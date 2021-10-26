import * as actionsTypes from "../constants/TvShows.aonstants";


// ! ==>  getTVReducer <== //
export const getTvReducer = (state = {tv: []},action) =>{
   
        switch (action.type) {
            case actionsTypes.GET_TV_REQUET:
                return {
                    loading:true,
                    tv:[]
                }
                
            case actionsTypes.GET_TV_SUCCESS:
                return {
                    loading:false,
                    tv:action.payload
                }
                
            case actionsTypes.GET_TV_FAIL:
                return {
                    loading:false,
                    error:action.payload
                }
                

            default:
                return state
        }
 
}

// ! ==>  getTvIDReducer <== //
export const getDetelsIdTv = (state = {tv:{} },action) =>{
    switch (action.type) {
        case actionsTypes.GET_TV_DETAILS_REQUEST:
            return{
                loading:true
            }
          
        case actionsTypes.GET_TV_DETAILS_SUCCESS:
            return{
                loading:false,
                tv:action.payload
            }
          
        case actionsTypes.GET_TV_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
          
        case actionsTypes.GET_TV_DETAILS_RESET:
            return{
                tv:{}
            }
          


    
        default:
           return state ;
    }
}