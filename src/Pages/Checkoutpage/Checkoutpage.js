import React from 'react';
import {connect} from 'react-redux';
import {cartItemsSelector,totalPriceSelector} from '../../Redux/Cart/Cart-selectors.js';
import './Checkoutpage.css';

const Checkoutpage = ({total,items})=>{
    console.log(items)
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
            </div>
            <hr/>
            <div className='checkoutitems'>

            </div>
            <div className='totalprice'>
                <h3>TOTAL</h3>
                <h2>${total}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    items: cartItemsSelector(state),
    total: totalPriceSelector(state)
})

export default connect(mapStateToProps)(Checkoutpage);