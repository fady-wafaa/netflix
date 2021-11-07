import axios  from 'axios';
import { useState } from 'react';
import LginGoogle from './../../components/auth/LginGoogle';



const LogIn = (props) => {
   

    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")
   
  
    const [user, setUser] = useState({
        email:"",
        password:""
    })
  
    function getUser({target}){
  
        setUser({...user,[target.name]:target.value})
    }
    
    const  sendData = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const {data} = await axios.post(`/api/logIn`,user);
         

            console.log(data)
        
           
        
            
            if(data.message==="success"){
                localStorage.setItem("token",data.token)
                props.history.replace("/movie")
                setLoading(false)
            }else{
                setError(data.message)
                setLoading(false)
            }
        } catch (erroe) {
          
            console.log(erroe.response.data)
            setError(error.response.data)
        }

    }
  

    return (
        <section  className="LOGIN">
          <div className="container mt-5 pt-5 d-flex justify-content-center align-content-center">
        <div className="col-md-5 d-flex justify-content-end h-75 align-content-center flex-column text-center">
            <div className="all_Form align-align-self-end">

            <form onSubmit={sendData} >
               
                <div className="form-group">
                    
                    <input onChange={getUser}   placeholder="Enter email" type="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <input  onChange={getUser}  placeholder="Enter you password" type="password" name="password" className="form-control" />
                </div>
               {error && <div className="alert alert-danger text-center">
                    {error}
                </div> }
                <button type="submit" className="btn btn-primary w-100"> {Loading?(<div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                            </div>):"logIn"} 
                            </button>
            </form>
           
            <div className="or">or</div>
          
            <div className="login_google_fac">
                
                <div className="btn_google">

                <LginGoogle props={props} />
                </div>
                 
            </div>
            </div>
        </div>
    </div>
        </section>
    )
}

export default LogIn
