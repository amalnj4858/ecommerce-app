import React from 'react';
import './Cart-dropdown-item.css';

const CartDropDownItem = ({item})=>{
    const {imageUrl,name,price} = item;
    return(
        <div className='cartItem'>
            <img className='image' src = {`${imageUrl}`} alt = 'cart' />
            <div className='info'>
                <span className='title' >
                    {name}
                </span>
                <span className='price' >
                    ${price}
                </span>
            </div>
        </div>
    )
}

export default CartDropDownItem;