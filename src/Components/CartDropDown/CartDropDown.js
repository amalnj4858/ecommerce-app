import React from 'react';
import './CartDropDown.css';
import Submitbutton from '../Submitbutton/Submitbutton.js';

const CartDropDown = ()=>{
    return(
        <div className='CartDropDown'>
            <div className='CartItems'>
            </div>
            <Submitbutton value='CHECKOUT' className = 'SubmitButton' />
        </div>
    )
}

export default CartDropDown;