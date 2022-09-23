import { useState } from 'react';
import APIService from './APIService';


const Addurprop = (props) => {
    const [Member, setMember] = useState('')
    const [Date, setDate] = useState('')
    const [PropertyType, setPropertyType] = useState('')
    const [PropertyCondition, setPropertyCondition] = useState('')
    const [PropertyFor, setPropertyFor] = useState('')
    const [Address, setAddress] = useState('')
    const [PostalCode, setPostalCode] = useState('')
    const [Country, setCountry] = useState('')
    const [TotalArea, setTotalArea] = useState('')
    const [Cost, setCost] = useState('')
    const [Comments, setComments] = useState('')
    

    const insertProject = () =>{
      APIService.InsertProject({Member,Date,PropertyType,PropertyCondition,PropertyFor,Address,PostalCode,Country,TotalArea,Cost,Comments})
      .then((response) => console.log(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertProject()
      setMember('')
      setDate('')
      setPropertyType('')
      setPropertyCondition('')
      setPropertyFor('')
      setAddress('')
      setPostalCode('')
      setCountry('')
      setTotalArea('')
      setCost('')
      setComments('')
    }

  return (
       <div className="added_prop">
       <form onSubmit = {handleSubmit} >

<label htmlFor="Member" className="form-label">Member</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter Member"
value={Member}
onChange={(e)=>setMember(e.target.value)}
required
/>

<label htmlFor="Date" className="form-label">Date</label>
<input 
type = "date"
className="form-control" 
placeholder ="Enter Date" 

value={Date}
onChange={(e)=>setDate(e.target.value)}
required
>
</input>
<label htmlFor="PropertyType" className="form-label">Property Type <br/></label>
<input type="text" 
className="form-control"
value={PropertyType}
onChange={(e)=>setPropertyType(e.target.value)}
required/>
<label htmlFor="PropertyCondition" className="form-label">PropertyCondition</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter PropertyCondition"
value={PropertyCondition}
onChange={(e)=>setPropertyCondition(e.target.value)}
required
/>
<label htmlFor="PropertyFor" className="form-label">PropertyFor</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter PropertyFor"
value={PropertyFor}
onChange={(e)=>setPropertyFor(e.target.value)}
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
<label htmlFor="Country" className="form-label">Country</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter Country"
value={Country}
onChange={(e)=>setCountry(e.target.value)}
required
/>
<label htmlFor="TotalArea" className="form-label">TotalArea</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter TotalArea"
value={TotalArea}
onChange={(e)=>setTotalArea(e.target.value)}
required
/>
<label htmlFor="Cost" className="form-label">Cost</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter Cost"
value={Cost}
onChange={(e)=>setCost(e.target.value)}
required
/>
<label htmlFor="Comments" className="form-label">Comments</label>
<input 
type="text"
className="form-control" 
placeholder ="Enter Comments"
value={Comments}
onChange={(e)=>setComments(e.target.value)}
required
/>


<button 
className="btn btn-primary mt-2"
>
Submit</button>

</form>
       </div>
  )}

export default Addurprop;