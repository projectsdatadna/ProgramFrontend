import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Join() {

  const CallLogout = () =>
    {
        console.log(Response);
        
        window.location.assign('http://127.0.0.1:5000/logout');
    }
  return (
    <div>
        <h1 className='edit'>Select the menu </h1>
        <button>Profile</button>
               <Link to="/adduser"><button className='Button'>Add User </button></Link><br/><br/>
               <br/><br/><Link to="/alluser"><button className='Button1'>All User</button></Link><br/><br/>
               <Link to="/addpro"><button className='Button2'>Add Projects</button></Link>

               <button onClick={CallLogout} className='Logout'>Signout</button>
              </div>
              
  )
}

export default Join
