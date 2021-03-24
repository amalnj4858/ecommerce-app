import React from 'react';
import './CartDropDown.css';
import {connect} from 'react-redux';
import Submitbutton from '../Submitbutton/Submitbutton.js';
import CartDropDownItem from '../Cart-dropdown-item/Cart-dropdown-item.js';
const CartDropDown = ({items})=>{
    return(
        <div className='CartDropDown'>
            <div className='CartItems'>
                {
                    items.map(item=>{
                        return <CartDropDownItem item={item} />
                    })
                }
            </div>
            <Submitbutton value='CHECKOUT' className = 'SubmitButton' />
        </div>
    )
}

const matchStateToProps =(state)=>({
    items:state.cart.items
})

export default connect(matchStateToProps)(CartDropDown);