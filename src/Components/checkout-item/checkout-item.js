import React from 'react';
import './checkout-item.css';

const CheckoutItem = ({imageUrl,name,price,quantity})=>{
 return(
     <div className='checkoutItem'>
         <div className='img'>
            <img src = {`${imageUrl}`} alt = 'checkout item' className='checkoutimg' />
         </div>
         <div className='checkoutname'>
            {name}
         </div>
         <div className='checkoutprice'>
            ${price}
         </div>
         <div className='checkoutquantity'>
            {quantity}
         </div>
         <div className='checkoutremove'>
            &#9986;
         </div>
     </div>
 )
}

export default CheckoutItem;