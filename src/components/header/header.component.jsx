import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss'

 const Header = ( {currentUser} ) => (
     <div className="header">
        <Link to="/" className="logo-container">
            <Logo  className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/contact"> CONTACT</Link>
            {
                currentUser ?
                <div className="option div" onClick={() => auth.signOut()}> SIGN OUT </div>
                :
                <Link className="option" to="/signin"> SIGN IN </Link>
            }
        </div>

     </div>
 )

 export default Header;
