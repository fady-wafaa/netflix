import * as actionsTypes from "../constants/SingUp.constants"


export const newUserReducer = (state = { data: {}}, action) =>{
    switch (action.type) {
        case actionsTypes.POST_SINGUP_REQUET:
            return{
                loading:true,
                data : []
            }
            case actionsTypes.POST_SINGUP_SUCCESS:
                return {
                    loading:false,
                    data:action.payload
                }
           case actionsTypes.POST_SINGUP_FAIL:
               return{
                   loading:false,
                   error:action.payload
               }
    
        default:
            return state;
    }
}