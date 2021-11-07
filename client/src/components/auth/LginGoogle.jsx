import axios from 'axios';
import GoogleLogin  from 'react-google-login';
// import { useEffect } from 'react';



const LginGoogle = ({props}) => {




  const responseGoogle = async(response) => {
        try {
      let {data} = await axios.post("/api/GoogleLogin",{
            tokenId:response.tokenId,
            googleId:response.googleId
          })
          
          
          console.log(props)
          if(data.message==="success"){
            localStorage.setItem("token",data.token)
            props.history.replace("/movie")
        }else{
          console.log(response.data)
        }
          } catch (error) {
        
            console.log(error);
          }

        }

      
      
      
      const responseGoogleError = (response) => {
          console.log(response);
        }


    return (
        <div className='google'>
                    <GoogleLogin
                    clientId="987973122709-ncjmmbp4bjpek897pf8mnhrlsrrerr9t.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className=" Submit " onClick={renderProps.onClick} disabled={renderProps.disabled}> 
                    <span><i></i></span> <h6 className='text-center'>Sign in with Google</h6> </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleError}
                    cookiePolicy={'single_host_origin'}
                />
                 {/* {error && <div className="alert alert-danger text-center">
                    {error}
                </div> } */}
        </div>
    )
}

export default LginGoogle
