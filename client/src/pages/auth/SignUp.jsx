import axios from "axios"



import {  useState } from "react"





const SignUp = (props) => {
    
    
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [user, setUser] = useState({
        name:"",
        password:"",
        cPassword:"",
        email:"",
    })



function getUser({target}){
  
    setUser({...user,[target.name]:target.value})
}


  const  sendData = async(e)=>{
        e.preventDefault()
        setLoading(true)
        let {data} = await axios.post("/api/signUp",user)
        // preventdefault
 
        if(data.message==="success"){
            props.history.replace("/login")
            setLoading(false)
        }else{
            setError("email` is required")
            setLoading(false)
        }
    }


    return (
        <section className="SignUp" >
         <div className="container my-5 py-5 ">
            <div className="col-md-5 m-auto text-center mt-5">
                    <form onSubmit={sendData} autocomplete="off" >
                        <div className="form-group" autocomplete="off">
                            <input   autocomplete="off" onChange={getUser} placeholder="Enter your name" name="name" type="text" className=" form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={getUser}  placeholder="Enter you password" name="password" type="password" className=" form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={getUser}  placeholder="Enter you cPassword" type="password" name="cPassword" className="form-control" />
                        </div>
                        <div className="form-group">
                            
                            <input onChange={getUser}   placeholder="Enter email" type="email" name="email" className="form-control"  />
                        </div>
                    {error && <div className="alert alert-danger text-center">
                            {error}
                        </div> }
                        <button type="submit" className="btn btn-info w-100"> {Loading?(<div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </div>):"SignUp"} 
                                        </button>
                        </form>
                </div>
        </div>
        </section>
    )
}

export default SignUp
