import React from 'react';
import './CartDropDown.css';
import {connect} from 'react-redux';
import Submitbutton from '../Submitbutton/Submitbutton.js';
import CartDropDownItem from '../Cart-dropdown-item/Cart-dropdown-item.js';
import {cartItemsSelector} from '../../Redux/Cart/Cart-selectors.js';
import {withRouter} from 'react-router';

const CartDropDown = ({items,history})=>{
    return(
        <div className='CartDropDown'>
            <div className='CartItems'>
                {
                    items.map(item=>{
                        return <CartDropDownItem item={item} />
                    })
                }
            </div>
            <Submitbutton value='CHECKOUT' className = 'SubmitButton' onClick = {()=>history.push('/checkout')} />
        </div>
    )
}

const matchStateToProps =(state)=>({
    items:cartItemsSelector(state)
})

export default withRouter(connect(matchStateToProps)(CartDropDown));