import React,{useState,useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import abc from '../../img/abc.png';
import { Box } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { useContext } from 'react';
import { UserContext } from '../../App';


const Navbarmenu = (props) => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

 

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    const {state,dispatch} = useContext(UserContext);

    const RenderMenu = () =>{
        if (state){
            return(
                <>
                  <nav className="main-nav " >

{/* Responsive Menu Button */}
{isResponsiveclose === true ? <> 
    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
</> : <> 
    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
</>}
                
                 <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <Box className='Box'>
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                        </Box>
                    </li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Services`}> Services </NavLink></Box> </li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/OurTeam`}> OurTeam </NavLink> </Box></li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/FAQ`}> FAQ </NavLink> </Box></li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Box className='Box'><Link to="#"> OtherProperty <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/addurprop`}> AddYourProperty </NavLink> </li>
                           
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/uraddprop`}> Youraddedproperties </NavLink> </li>
                        </ul>
                        </Box> </li>
                        <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/allpro`}> AllProjects </NavLink></Box> </li>
                    
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> ContactUs </NavLink></Box> </li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/LoginApi`} > Login </NavLink></Box> </li>
                    

                    </ul>
                    </nav>

                </>
            )
        }else {
           return(
            <>
            <nav className="main-nav " >

{/* Responsive Menu Button */}
{isResponsiveclose === true ? <> 
    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
</> : <> 
    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
</>}





             <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <Box className='Box'>
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                        </Box>
                    </li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Services`}> Services </NavLink></Box> </li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/OurTeam`}> OurTeam </NavLink> </Box></li>
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/FAQ`}> FAQ </NavLink> </Box></li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Box className='Box'><Link to="#"> OtherProperty <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/addurprop`}> AddYourProperty </NavLink> </li>
                           
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/uraddprop`}> Youraddedproperties </NavLink> </li>
                        </ul>
                        </Box> </li>
                        <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/allpro`}> AllProjects </NavLink></Box> </li>
                    
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> ContactUs </NavLink></Box> </li>
                    
                    <li className="menu-item " ><Box className='Box'><NavLink onClick={toggleClass} activeClassName='is-active' to={'/Logout'} > Logout </NavLink></Box> </li>

                    </ul>
                    </nav> 

            </>
           )
        }

    } 
    
    
  
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                <Box >

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={abc} alt="abc" /> 
                    </NavLink><br/>
                    <div class="social-container">
                <a href="https://www.youtube.com/channel/UCoogt2DnrMNnsj1dHa5ny4w"
                  className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com"
                  className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                 </a>
                 <a href="https://www.twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                <a href="https://www.instagram.com"
                 className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                  </div>
                  

                </div >
                   
               

                <div className="header__middle__menus">
                      
                    <RenderMenu/>
                </div>   
                </Box>



             
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu
