import React from 'react'
import Box from '@material-ui/core/Box';
import madurai from '../img/mad.jpg';
import chennai from '../img/chen.jpg';
import delhi from '../img/delhi.jpg';
import kolkata from '../img/kolkata.jpg';
import kerala from '../img/kerala.jpg';
import build from '../img/build.png';
import person from '../img/person.png';
import clients from '../img/clients.png';
import percentage from '../img/percentage.png';
const Home = () => {
	return (
          <form>
        <div className="sec__one">
			<h1> WHY TO CHOOSE ABC COMPANY <br /><br/>
                        <h3> ABC is a one-stop solution for all your property management needs in India. 
        Whether you want rental management services, or comprehensive end-to-end property management services, we have got you covered.<br /> </h3>
        
        
        <div>
         <Box className='box'>
         <h3 style={{color: "black", fontSize:"20px", alignContent:"center", textAlign:"center"}}><br/> FIND THE RIGHT TENANTS IN LESS TIME-8<br/><br/>Leave the problem to us and expect verified tenants
                  in no time.</h3><br/>
         
             </Box>
             <Box className='box'><h4 style={{color: "black", fontSize:"20px", alignContent:"center", textAlign:"center"}}><br/>24/7 SUPPORT<br/><br/>Providing Best Customer Service by working round the clock to look after our property and tenant</h4>
             
             </Box>
             <Box className='box'><h4 style={{color: "black", fontSize:"20px", alignContent:"center", textAlign:"center"}}><br/>LEGAL DOCUMENTATION<br/><br/>We take care of all the documentation and legal procedures right from tenant entry to tenant exit.</h4>
             </Box>
             <Box className='box1'><img src={madurai} alt='madurai' height={500} width={300}></img>
             <h4><br/>Madurai</h4>
             
             </Box>
             <Box className='box1'><img src={chennai} alt='chennai' height={500} width={300}></img>
             <h4 ><br/>Chennai</h4>
             </Box>
             <Box className='box1'><img src={delhi} alt='delhi' height={500} width={300}></img>
             <h4><br/>Delhi</h4>
             </Box>
             <Box className='box1'><img src={kolkata} alt='kolkata' height={500} width={300}></img>
             <h4 ><br/>Kolkata<br/></h4>
             </Box>
             <Box className='box1'><img src={kerala} alt='kerala' height={500} width={300}></img>
             <h4 ><br/>Kerala<br/></h4>
             </Box>
             <Box className='box2'><img src={build} alt='build' height={100} width={300}></img><h4><br/> 2500 Properties <br/></h4>
             </Box>
             <Box className='box2'><img src={person} alt='person' height={100} width={300}></img><h4><br/> 3000 Happy Clients <br/></h4>
             </Box>
             <Box className='box2'><img src={clients} alt='clients' height={100} width={300}></img><h4><br/>  1500+ Units Available<br/></h4>
             </Box>
             <Box className='box2'><img src={percentage} alt='percentage' height={100} width={300}></img><h4><br/> 97% Customer Satisfaction<br/></h4>
             </Box>
             </div>
             </h1><br/>
             
             </div>
             
             </form>
        
            
                      
        
        
       )
}
export default Home
