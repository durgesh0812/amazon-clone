import React,{ useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise=loadStripe('pk_test_51IaLCCSFhYhWipQVQ52Wm2CbuM2ObM2gzwCAZQ371BtpyLe8GDSIreVkFq9duuCn9F1u9p034VgEAv1ndrNd0SEi00xfHNzRfD')


function App() {
  const [{} , dispatch] = useStateValue();

  useEffect(()=>{
       auth.onAuthStateChanged(authUser=>{
         console.log('use is',authUser);
         if(authUser){
           dispatch({
             type:'SET_USER',
             user:authUser
           })
         }else{
          dispatch({
              type:'SET_USER',
              user:null

            })
         }
       })
  },[])
  return (
    <Router>
    <div className="app">
        
 
       <Switch>


       <Route path ="/login">
        
        <Login/>
        </Route>
        <Route path= "/orders">
        <Header />
         <Orders />
          
         </Route>
         <Route path ="/checkout">
         <Header />
         <Checkout />
          </Route>
          <Route path= "/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
          
         
          
         
         </Route>
         <Route path= "/">
         <Header />
          <Home />
         </Route>
      

       </Switch>
    
    </div>
    </Router>
  );
}

export default App;
