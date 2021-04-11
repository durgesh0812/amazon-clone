import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
    const [{basket, user} ,dispatch] = useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to ="/">
            <img  className="header_logo" alt=""src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            
            <div className="header_search">
                <input className="header_searchbar" type="text"/><SearchIcon className="header_searchIcon"/>
            </div>
            
            <Link to ='/login' style={{ textDecoration: 'none' }}>
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_option1">Hello {!user ? 'Guest':user.email}</span>
                <span className="header_option2">{user ? 'Sign Out' :'Sign In'}</span>
            </div>
            </Link>
           
           
                <div className="header_option">
                <span className="header_option1">Returns</span>
                <span className="header_option2">&Orders</span>
                </div>
                <div className="header_option">
                <span className="header_option1">Your</span>
                <span className="header_option2">Prime</span>
                </div>

                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                <div className="header_optionbasket">
                
                <ShoppingCartIcon />
                <span className="basketcount">{basket?.length}</span>
                </div>   
                </Link>

                          

            </div>
      
    )
}

export default Header

