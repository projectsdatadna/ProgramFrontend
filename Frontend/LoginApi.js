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