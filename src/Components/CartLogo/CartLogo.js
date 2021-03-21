import React from 'react';
import {ReactComponent as CartSvg} from '../../Assets/shopping-bag.svg';
import './CartLogo.css';
import {connect} from 'react-redux';
import toggleDropDown from '../../Redux/Cart/Cart-action.js';

const CartLogo = ({toggleDropDown})=>{
    return(
        <div className='cartLogo' onClick={toggleDropDown}>
            <CartSvg className='cartSvg'/>
            <span className='cartCount' >0</span>
        </div>
    )
}
const matchDispatchToProps = (dispatch)=>({
    toggleDropDown : ()=> {dispatch(toggleDropDown())}
})
export default connect(null,matchDispatchToProps)(CartLogo);