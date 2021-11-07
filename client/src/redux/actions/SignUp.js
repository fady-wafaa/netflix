import axios from 'axios';
import * as actionsTypes from "../constants/SingUp.constants"

 const newUser = (user)=> async(dispatch)=>{
    try {
        dispatch({type:actionsTypes.POST_SINGUP_REQUET});

        const {data} = await axios.post("/api/signUp",user)
        dispatch({type: actionsTypes.POST_SINGUP_SUCCESS,
            payload:data
        });
        console.log(data)
    } catch (error) {
        dispatch({
            type: actionsTypes.POST_SINGUP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        })
    }
}

export default newUser