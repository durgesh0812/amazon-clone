import React ,{useEffect, useState}from 'react';
import { useStateValue } from '../../StateProvider';
import Checkoutproduct from '../Checkoutproduct/Checkoutproduct';
import {Link,useHistory} from 'react-router-dom';
 import './Payment.css';
 import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import {db} from  '../../firebase'

import axios from  '../axios';

function Payment() {
    const [{basket,user},dispatch] =useStateValue();
    const history=useHistory();

    const stripe=useStripe();
    const elements=useElements();
    
    const [succeeded,setSucceeded] =useState(false);
    const[processing,setProcessing] = useState("")
     const [error,setError] =useState(null);
     const[disabled,setDisabled]=useState(true);
     const[clientSecret,setclientSecret]=useState(true);

     useEffect(()=>{
        const getClientSecret =async ()=>{
            const response = await axios ({
                method :'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
     },[basket])

     console.log('the secre is ',clientSecret)
     console.log('ssas',user)

    const handleSubmit=async(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload =await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{

                db
                .collection('user')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

                setSucceeded(true);
                setError(null)
                setProcessing(false)


                dispatch({
                    type:'EMPTY_BASKET'
                })
                history.replace('/orders')
        } )
    

    }

    const handleChange=event=>{
               setDisabled(event.empty);
               setError(event.error? event.error.message:"")
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout(<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123,annanagar</p>
                        <p>Chennai,TamilNadu</p>

                    </div>

                </div>
                <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items & delivery</h3>

                </div>
                <div className='payment_items'>
                     {basket.map(item=>(
                         <Checkoutproduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                         />
                     ))}
                </div> </div>
                <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                            renderText={(value)=>(
                                <h3>Order Total: {value}</h3>
                            )}
                             decimalScale={2}
                             value={getBasketTotal(basket)}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"???"}
                             />
                             <button disabled={processing ||disabled || succeeded}>
                                 <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                             </button>

                        </div>

                        {error && <div>{error}</div>}
                    </form>

                </div>


                 </div>

           
            
        </div>
        </div>
    )
}

export default Payment
