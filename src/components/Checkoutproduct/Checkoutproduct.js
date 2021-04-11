import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './Checkoutproduct.css'
import { useStateValue } from '../../StateProvider';

function Checkoutproduct({id,image,title,price,rating}) {
    const [{basket} , dispatch] = useStateValue();

    const removeFromCart =() =>{
           dispatch({
               type:'REMOVE_FROM_BASKET',
               id:id,
           })
    }
    return (
        <div className='checkoutProduct'>
           <img className="checkoutProduct_image" src={image}   alt=""/>
           <div className="checkoutProduct_info">
               <p className="checkoutProduct_title">{title}</p>
               <p className="checkoutProduct_price"><small>₹</small><strong>{price}</strong></p>
              <div className="checkoutProduct_rating">
              {Array(rating).fill().map((_,i) =>(<p><StarRateIcon/></p>))}
                  </div>  

                  <button onClick={removeFromCart}>Remove from cart</button>
            </div>


        </div>
    )
}

export default Checkoutproduct
