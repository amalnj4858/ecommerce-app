import React from 'react';
import './CartDropDown.css';
import {connect} from 'react-redux';
import Submitbutton from '../Submitbutton/Submitbutton.js';
import CartDropDownItem from '../Cart-dropdown-item/Cart-dropdown-item.js';
import {cartItemsSelector} from '../../Redux/Cart/Cart-selectors.js';
import {withRouter} from 'react-router';
import {toggleDropDown} from '../../Redux/Cart/Cart-action.js';
import { currentUserSelector } from '../../Redux/User/User-selector';

const CartDropDown = ({items,history,dispatch,user})=>{  //dispacth is passed in as a prop if no second parameted is given along with mapstatetoprops
    return(
        <div className='CartDropDown'>
            <div className='CartItems'>
                {
                    items.map(item=>{
                        return <CartDropDownItem item={item} />
                    })
                }
            </div>
            <Submitbutton value='CHECKOUT' className = 'SubmitButton' 
            onClick = {()=>{
                if(user)
                {
                    history.push('/checkout');
                    dispatch(toggleDropDown());
                }
                else
                    {
                        alert('Please sign in to proceed to checkout');
                        dispatch(toggleDropDown());
                    }
                }} />
        </div>
    )
}

const matchStateToProps =(state)=>({
    items:cartItemsSelector(state),
    user: currentUserSelector(state)
})

export default withRouter(connect(matchStateToProps)(CartDropDown));