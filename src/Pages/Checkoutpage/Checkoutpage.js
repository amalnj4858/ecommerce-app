import React from 'react';
import {connect} from 'react-redux';
import {cartItemsSelector,totalPriceSelector} from '../../Redux/Cart/Cart-selectors.js';
import CheckoutItem from '../../Components/checkout-item/checkout-item.js';
import PaymentButton from '../../Components/PaymentButton/PaymentButton.js';
import './Checkoutpage.css';

const Checkoutpage = ({total,items})=>{
    return(
        <div className='checkoutpage'>
            <h1>CHECKOUT</h1>
            <div className = 'info'>
                <div className='heading'>
                    Product
                </div>
                <div className='heading'>
                    Description
                </div>
                <div className='heading'>
                    Price
                </div>
                <div className='heading'>
                    Quantity
                </div>
                <div className='heading'>
                    Remove
                </div>
            </div>
            <hr/>
            <div className='checkoutitems'>
                {
                    items.length ?
                    items.map(item=>(
                        <CheckoutItem {...item} />
                    ))
                    :
                    <center><h3>CART IS EMPTY</h3></center>
                }
            </div>
            <hr/>
            <div className='totalprice'>
                <h3 className='total'>TOTAL</h3>
                <h2>${total}</h2>
            </div>
            <PaymentButton price = {total} />
        </div>
    )
}

const mapStateToProps = (state)=>({
    items: cartItemsSelector(state),
    total: totalPriceSelector(state)
})

export default connect(mapStateToProps)(Checkoutpage);