import { useState } from 'react';
import APIService from './APIService';
import '../App.css';
import { Link } from 'react-router-dom';


const AddUser = (props) => {
      const [UserName, setUserName] = useState('')
      const [About, setAbout] = useState('')
      const [Address, setAddress] = useState('')
      const [PostalCode, setPostalCode] = useState('')
      const [Country, setCountry] = useState('')
      const [Mobile, setMobile] = useState('')
      const [UserType, setUserType] = useState('')
     

      const insertUser = () =>{
        APIService.InsertUser({UserName,About,Address,PostalCode,Country,Mobile,UserType})
        .then((response) => console.log(response))
        .catch(error => console.log('error',error))
      }
  
      const handleSubmit=(event)=>{ 
        event.preventDefault()
        insertUser()
        setUserName('')
        setAbout('')
        setAddress('')
        setPostalCode('')
        setCountry('')
        setMobile('')
        setUserType('')
      }
  
       return (
        

        
            <div className='added_prop'>
              <h1>Add User</h1>
             
            
            <form onSubmit = {handleSubmit} >
     
     <label htmlFor="UserName" className="form-label">Name</label>
     <input 
     type="text"
     className="form-control" 
     placeholder ="Enter UserName"
     value={UserName}
     onChange={(e)=>setUserName(e.target.value)}
     required
     />
      <label htmlFor="UserType" className="form-label">User Type</label>
     <input 
     type="text"
     className="form-control" 
     placeholder ="Enter UserType"
     value={UserType}
     onChange={(e)=>setUserType(e.target.value)}
     required
     />
     
     <label htmlFor="Address" className="form-label">Address</label>
     <input 
     type="text"
     className="form-control" 
     placeholder ="Enter Address"
     value={Address}
     onChange={(e)=>setAddress(e.target.value)}
     required
     />
     <label htmlFor="PostalCode" className="form-label">PostalCode</label>
     <input 
     type="text"
     className="form-control" 
     placeholder ="Enter PostalCode"
     value={PostalCode}
     onChange={(e)=>setPostalCode(e.target.value)}
     required
     />
     <label htmlFor="Country" className="form-label">Country Name</label>
     <input 
     type="text"
     className="form-control" 
     placeholder ="Enter Country"
     value={Country}
     onChange={(e)=>setCountry(e.target.value)}
     required
     />
      <label htmlFor="Mobile" className="form-label">Mobile Name</label>
     <input 
     type="text"
     className="form-control" 
     placeholder ="Enter Mobile"
     value={Mobile}
     onChange={(e)=>setMobile(e.target.value)}
     required
     />
     <label htmlFor="About" className="form-label">About</label>
     <textarea 
     className="form-control" 
     placeholder ="Enter About" 
     rows='6'
     value={About}
     onChange={(e)=>setAbout(e.target.value)}
     required
     >
     </textarea>
     
     
     <button 
     className="btn btn-primary mt-2"
     >
     Submit</button>
     
     </form>
            </div>
          
              
       )
        
}

export default AddUser
