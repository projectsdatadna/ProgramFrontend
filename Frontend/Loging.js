<<<<<<< HEAD
import React from 'react'

function LoginApi() {
    

    const CallLogin = () =>
    {
        console.log("Inside calllogin func");
        
        window.location.assign('http://127.0.0.1:5000/signin');
    }
  return (
    <div >
      <h1>LOGIN</h1>
        <button onClick={CallLogin} className='LoginApi'>Signin With Google</button>
    </div>
  )
}

export default LoginApi
=======
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import '../App.css';
import Join from './Link';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";




const LoginUser = () => {
  const[Loggedin,setLoggedin] = useState(false)
  console.log(setLoggedin && Loggedin)

  useEffect(()=> {
    fetch('/login').then(response => {
        if (response.ok){
            return response.text()
        }
    }).then(data =>console.log(data))
        
}, [])

  const onSuccess = (res) => {
    console.log('success:', res);

  }

  

return (
       
   <div className='added_prop'>
   <form>

        <h2 >Login  </h2>
        <div>
      <GoogleLogin
        clientId={"311655855070-51feajk8ejgkboti50j9tsjs91run7a2.apps.googleusercontent.com"}
        buttonText="Login"
        onSuccess={onSuccess}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
     </form>
     <div>
      {Loggedin? <Redirect to="/Link" /> : null} 
     </div>
     </div>
              
              
       )
}

export default LoginUser

>>>>>>> 8904720548765f2645584ed722ebfe7a53f8c675
