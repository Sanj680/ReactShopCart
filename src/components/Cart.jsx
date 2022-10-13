import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom";
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    let status=((localStorage.getItem("status")));

    if(status==="log-in")
    {

     if(isEmpty) return <h1 className='text-center'> Your cart is Empty!!! </h1>

    return (
        <><section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart({totalUniqueItems}) total Items:({totalItems}) </h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                let q= item.quantity
                                let p= item.price
                                let res= q*p
                                

                                return (
                                    <tr key={index}>
                                        <>
                                            <td>
                                                <img src={item.img} style={{ height: '6rem', width: '10rem' }} />
                                            </td>
                                            <td>{item.title} </td>
                                            <td> {item.price} per quantity </td>
                                            <td className='text-center'>{item.quantity}</td>
                                            <td className='text-center'>Rs.{res}</td>
                                             <td className='col-4'>
                                                <button className='btn btn-info ms-2'
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button> &nbsp;
                                                <button className='btn btn-info ms-2'
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button> &nbsp;
                                                <button className='btn btn-danger ms-2'
                                                    onClick={() => removeItem(item.id)}>Remove Item</button>
                                            </td>
                                        </>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>


            </div>
        </section>
        <div className='py-4 container text-right'>
                <div className='col-auto ms-auto '>
                    <h2>Total Price: Rs {cartTotal} </h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-danger m-2'
                        onClick={() => emptyCart()}>
                        Clear Cart
                    </button>
                    <Link to ="/order">
                    <button className='btn btn-primary'>
                        Buy Now
                    </button>
                    </Link>
                </div>
            </div>
            </>
       
         );
    }

    else
    {
        window.location='/login';
    }
    
};

export default Cart;