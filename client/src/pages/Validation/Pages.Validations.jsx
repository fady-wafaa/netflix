import jwt_decode from "jwt-decode";

import { Route ,Redirect} from 'react-router-dom';



function ValidationPage(props)  {
    
        let token = localStorage.getItem("token");
      
     
    try {
        jwt_decode(token);
        
    } catch (error) {
        if(token === null){
            localStorage.clear();
      
        return(  <Redirect to="/login"/>
   
        
        )
        }
        
    }


 
    return <Route {...props}  />
            

}

export default ValidationPage
