import React from 'react'
import Box from '@material-ui/core/Box';
import human from '../img/hum.png'

const OurTeam = () => {
       return (
              <div className="sec__one">
                     <h1> OUR TEAM<br /><br/>
                        <h2> Founded in 2015, Chennai-based ABC Property Management services is the dynamic leader in property managment services with great reputation among NRIs and people staying outside Chennai.
                             The company is engaged in providing exquisite quality property management solutions that comprises of original bookings, investments, documentation, transfers, property survey, sale-purchase of residential & commercial properties, relocation services, renovation services, property maintenance and tenant services in Chennai.
                             From being a service provider, since 2015, that could handle a wide variety of tasks in Chennai on behalf of NRI’s, the company developed special expertise to service and emerged as a well established organization to service as a whole.d.<br /> </h2>
                            
                             <Box className='box4'><img src={human} alt='human' height={500} width={250}></img><h4><br/>Name<br/>  Chairman <br/></h4>
                             </Box>
                             <Box className='box4'><img src={human} alt='human' height={500} width={250}></img><h4><br/> Name<br/>Managing Director<br/></h4>
                             </Box>
                              <Box className='box4'><img src={human} alt='human' height={500} width={250}></img><h4><br/> Name<br/> Head of Operations<br/></h4>
                              </Box>
                              
              </h1>  
              </div>
       )
}

export default OurTeam
