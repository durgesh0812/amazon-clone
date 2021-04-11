import React, { useState } from 'react'
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('');


    const signIn =e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))

    }

    const register =e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login'>
            <Link to ='./'>
            < img className="login_logo" src="https://www.searchpng.com/wp-content/uploads/2019/01/Amazon-Logo.png" alt="Amazon logo"/>
            </Link>
            
              <div className='login_container'>
                  <h1 className='s'>Sign-In</h1>

                  <form>
                      <h5>E-mail</h5>
                      <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                      <h5>Password</h5>
                      <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                      <button type='submit' className='login_signin' onClick={signIn}><b>Sign In</b></button>
                      <div>
                      
                      </div>
                      
                  </form>
                  <button onClick={register} className='login_signup'><b>Create an account</b></button>

              </div>
            
        </div>
    )
}

export default Login
