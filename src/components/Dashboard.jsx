import React from 'react';
import Itemcard from "./Itemcard";

import Cart from './Cart';
import { CartProvider } from 'react-use-cart';

import landing from "../images/landing.jpg";
import "../styles/App.css";
import { Link } from "react-router-dom";
import data from './data';


const Dashboard = () => {

    let status=((localStorage.getItem("status")));

    if(status==="log-in")
    {
        return (  
            <>
            <div>
                <h1 className='text-center mt-3'>All Items</h1>
                <section className='py-4 container'>
                    <div className='row justify-content-center'>
    
                        {data.productData.map((item, index)=>{
                            return(
                                <Itemcard
                                 img={item.img} 
                                 title={item.title} 
                                 desc={item.desc} 
                                 price={item.price} 
                                 item={item} 
                                 key={index} />
                            )
                        })}
    
                    </div>
                </section>
            </div>
            </>
        );

    }

    else
    {
        return (
            <div className="home" style={{ backgroundImage: `url(${landing})` }}>
          
              <div className="headerContainer">
              <h1 style={{color:'white'}}>
                <div>
                </div>BUY FARM FRESH FRUITS & VEGETABLES
                <div className="text-center">AT BEST PRICES</div> </h1>
                <Link to="/Login">
                    <div className="text-center">
                  <button className="btn btn-success">Order Now</button>
                  </div>
                </Link>
              </div>
            </div>
          );
    }


    // return (
    //     <>
    //     <div>
    //         <h1 className='text-center mt-3'>All Items</h1>
    //         <section className='py-4 container'>
    //             <div className='row justify-content-center'>

    //                 {data.productData.map((item, index)=>{
    //                     return(
    //                         <Itemcard
    //                          img={item.img} 
    //                          title={item.title} 
    //                          desc={item.desc} 
    //                          price={item.price} 
    //                          item={item} 
    //                          key={index} />
    //                     )
    //                 })}

    //             </div>
    //         </section>
    //     </div>
    //     {/* <CartProvider>
    //     <Cart/>
    //     </CartProvider> */}
    //     </>
    // );



};

export default Dashboard;