import React from 'react';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = ()=>{
    return(
        <div className = 'header'>
            <Link to ='/' className ='logo' >
                <Logo />
            </Link>
            <div className = 'options'>
                <Link to = '/shop' className = 'option' >SHOP</Link>
                <Link className = 'option'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default Header;