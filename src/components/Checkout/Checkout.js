import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import Checkoutproduct from '../Checkoutproduct/Checkoutproduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {
    const [{basket,user} , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <h3>Hey,{user?.email}</h3>
                <h2 className="checkout_title">Your Cart</h2>
                 {basket.map(item =>(
                     <Checkoutproduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     
                     />
                 ))}
                

            </div>
            <div className="checkout_right">
            <h2>Subtotal:</h2>
                <Subtotal/>
                
            </div>
            
        </div>
    )
}

export default Checkout
