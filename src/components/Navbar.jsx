import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Avatar from "@material-ui/core/Avatar";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useCart } from 'react-use-cart';

export default function Navbar() {
  const{
    totalItems
  }=useCart();

  let status=((localStorage.getItem("status")));
  //let uname=((localStorage.getItem("uname")));

    if(status==="log-in")
    {
      return (
        <div className="navbar">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-brand">
                 <div className="text-success">FarmShop 
                 &nbsp;
                <Link to="/dashboard">Home</Link>
               </div>
                 </div>

                 {/* <div>
                  <h4> 
                    <input className="text-center text-success" type="text" value={"Welocme  "+uname} disabled style={{ outline:'none', border:'none', backgroundColor:'none' }}/> 
                  </h4>
                 </div> */}
              
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                
                <button className="btn btn-outline-success" type="submit">
                <Search/>
                </button>
    
                {/* <button className="btn btn-outline-success" type="submit">
                <Avatar style={{ backgroundColor: "green"}}>
                  <Search/>
                </Avatar>
                </button> */}
    
                <div className="container">
                
                {/* <button className="btn btn-outline-info " type="submit"> */}
                <Link to="/cart" className="btn btn-info "><ShoppingCart/><sup><b>{totalItems}</b></sup></Link>
                {/* </button>  */}
                &nbsp;
    
                <button className="btn btn-outline-info" type="submit">
                <Link to="/logout">Logout</Link>
                </button>

                </div>
      
              </form>
            </div>
          </nav>
        </div>
      );
    }

    else
    {
      return (
        <div className="navbar">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-brand">
                 <div className="text-success">FarmShop 
                 &nbsp;
                <Link to="/dashboard">Home</Link>
               </div>
                 </div>
              
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                
                <button className="btn btn-outline-success" type="submit">
                <Search/>
                </button>
    
                {/* <button className="btn btn-outline-success" type="submit">
                <Avatar style={{ backgroundColor: "green"}}>
                  <Search/>
                </Avatar>
                </button> */}
    
                <div className="container">
                
                {/* <button className="btn btn-outline-info " type="submit"> */}
                <Link to="/cart" className="btn btn-info "><ShoppingCart/></Link>
                
                {/* </button>  */}
                &nbsp;
    
                <button className="btn btn-outline-info" type="submit">
                <Link to="/login">Login</Link>
                </button>

                </div>
      
              </form>
            </div>
          </nav>
        </div>
      );
    }

  // return (
  //   <div className="navbar">
  //     <nav className="navbar navbar-light bg-light">
  //       <div className="container-fluid">
  //         <div className="navbar-brand">
  //            <div className="text-success">FarmShop <Link to="/">Home</Link>
  //            &nbsp;
  //           <Link to="/dashboard">Dashboard</Link>
  //          </div>
  //            </div>
          
  //         <form className="d-flex">
  //           <input
  //             className="form-control"
  //             type="search"
  //             placeholder="Search"
  //             aria-label="Search"
  //           />
            
  //           <button className="btn btn-outline-success" type="submit">
  //           <Search/>
  //           </button>

  //           {/* <button className="btn btn-outline-success" type="submit">
  //           <Avatar style={{ backgroundColor: "green"}}>
  //             <Search/>
  //           </Avatar>
  //           </button> */}

  //           <div className="container">
            
  //           {/* <button className="btn btn-outline-info " type="submit"> */}
  //           <Link to="/cart" className="btn btn-info "><ShoppingCart/></Link>
  //           {/* </button>  */}
  //           &nbsp;

  //           <button className="btn btn-outline-info" type="submit">
  //           <Link to="/login">Login</Link>
  //           </button>

  //           <button className="btn btn-outline-info" type="submit">
  //           <Link to="/logout">Logout</Link>
  //           </button>
  //           </div>
  
  //         </form>
  //       </div>
  //     </nav>
  //   </div>
  // );
}