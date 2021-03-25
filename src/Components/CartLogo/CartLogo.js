import React from 'react';
import {ReactComponent as CartSvg} from '../../Assets/shopping-bag.svg';
import './CartLogo.css';
import {connect} from 'react-redux';
import {toggleDropDown} from '../../Redux/Cart/Cart-action.js';
import {itemCountSelector} from '../../Redux/Cart/Cart-selectors.js';

const CartLogo = ({toggleDropDown,noOfItems})=>{
    return(
        <div className='cartLogo' onClick={toggleDropDown}>
            <CartSvg className='cartSvg'/>
            <span className='cartCount' >{noOfItems}</span>
        </div>
    )
}
const matchDispatchToProps = (dispatch)=>({
    toggleDropDown : ()=> {dispatch(toggleDropDown())}
})

const matchStateToProps = (state)=>({
    noOfItems : itemCountSelector(state)
})

export default connect(matchStateToProps,matchDispatchToProps)(CartLogo);