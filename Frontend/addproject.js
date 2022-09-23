import { useState } from 'react';
import APIService from './APIService';


const Form = (props) => {
    const [ProjectName, setProjectName] = useState('')
    const [ProjectIncludes, setProjectIncludes] = useState('')
    const [Address, setAddress] = useState('')
    const [PostalCode, setPostalCode] = useState('')
    const [Country, setCountry] = useState('')

    const insertArticle = () =>{
      APIService.InsertArticle({ProjectName,ProjectIncludes,Address,PostalCode,Country})
      .then((response) => console.log(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setProjectName('')
      setProjectIncludes('')
      setAddress('')
      setPostalCode('')
      setCountry('')
    }

  return (
       <div className='added_prop'>
       <form onSubmit = {handleSubmit} >

<label htmlFor="ProjectName" className="form-label">Project Name</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter ProjectName"
value={ProjectName}
onChange={(e)=>setProjectName(e.target.value)}
required
/>

<label htmlFor="ProjectIncludes" className="form-label">ProjectIncludes</label>
<textarea 
className="form-control" 
placeholder ="Enter ProjectIncludes" 

value={ProjectIncludes}
onChange={(e)=>setProjectIncludes(e.target.value)}
required
>
</textarea>
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


<button 
className="btn btn-primary mt-2"
>
Submit</button>

</form>
       </div>
  )}

export default Form;