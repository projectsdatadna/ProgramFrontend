import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbarmenu from './components/menu/Navbarmenu';
import OurTeam from './components/OurTeam';
import FAQ from './components/FAQ';
import Addurprop from './components/addurprop';
import propbyoth from './components/propbyoth';
import Logout from './components/Logout';
import Form from './components/addpro';

import AddUser from './components/adduser';
import FE from './FE';
import AP from './AP';
import Profile from './components/Profile';
import SP from './SP';
import Join from './components/Link';
import LoginApi from './components/LoginApi';
import { createContext } from 'react';
import { useReducer } from 'react';
import { Reducer } from './Reducer/UseReducer';
import { InitialState } from './Reducer/UseReducer';

export const UserContext = createContext();
function App() {
const Routing = () => {
  return(
    
    <Router basename="/">
     <Navbarmenu/> 
    
    {/* Add Menu Component */}
    
  
    
    <Switch> 
      <Route exact path="/" component={Home}/>
      <Route path="/Services" component={Services}/>
      <Route path="/OurTeam" component={OurTeam}/>
      <Route path="/FAQ" component={ FAQ }/>
      <Route path="/propbyoth" component={propbyoth}/>
      <Route path="/addurprop" component={Addurprop}/>
      <Route path="/uraddprop" component = {FE}/>
      <Route path="/allpro" component = {AP}/>
      
      <Route path="/addpro" component={Form}/>
    
      <Route path="/Logout" component={Logout}/>
      <Route path="/adduser" component={AddUser}/>
      <Route path="/alluser" component={SP}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/LoginApi" component={LoginApi}/>
      <Route path="/Link" component={Join}/>
      <Route path="/Profile" component={Profile}/>
      
    
      
    </Switch>
    </Router>
    
    
  )
}






  const [state,dispatch] = useReducer(Reducer, InitialState)

  
  return (
 
    <div className='background'>
    <UserContext.Provider value={{state,dispatch}}>
  
    
    <Routing/>
    <Footer/>
    </UserContext.Provider> 
    </div>

  );
   

}


export default App;
