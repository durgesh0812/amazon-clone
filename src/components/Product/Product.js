import React from 'react';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../../StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispath] =useStateValue();
  

    const addToBasket = () =>{
        dispath({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
         
    }
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price"><strong>₹ {price}</strong></p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i) =>(<p><StarRateIcon/></p>))}
                
                            
                
                </div>
            </div>

            <img src={image}  alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
