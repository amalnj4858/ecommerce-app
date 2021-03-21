import React from 'react';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/Firebase.config.js';
import {connect} from 'react-redux';
import './Header.css';


const Header = ({currentUser})=>{
    return(
        <div className = 'header'>
            <Link to ='/' className ='logo' >
                <Logo />
            </Link>
            <div className = 'options'>
                <Link to = '/shop' className = 'option' >SHOP</Link>
                {
                    currentUser?
                    (<Link to = '/signin' className = 'option' onClick = {()=>auth.signOut()} >SIGN OUT</Link>)
                    :
                    (<Link to = '/signin' className = 'option'>SIGN IN</Link>)
                }
                <Link className = 'option'>CONTACT US</Link>
            </div>
        </div>
    )
}

const matchStateToProps = (state) =>{
    return{
        currentUser : state.user.currentUser
    }
}

export default connect(matchStateToProps)(Header);
