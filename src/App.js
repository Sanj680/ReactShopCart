import "./styles/App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import React from 'react';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Cart from './components/Cart';
import Logout from './components/Logout';
import Order from "./components/Order";
  

  function App() {
   return(
  
  
    <div >
      <Router> 
        <Navbar/>
        
     
      <Routes>
        <Route path ="/" element={<Home/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/dashboard" element={<Dashboard/>}/>
          <Route path ="/cart" element={<Cart/>}/>
          <Route path ="/register" element={<Registration/>}/>
          <Route path ="/logout" element={<Logout/>}/>
          <Route path ="/order" element={<Order/>}/>
          </Routes>
          </Router>
           
            
       </div>
    
      
  );
}

export default App;
