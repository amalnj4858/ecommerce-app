import React from 'react';
import {removeItem} from '../../Redux/Cart/Cart-action.js';
import {connect} from 'react-redux';
import {addItem,reduceItemCount} from '../../Redux/Cart/Cart-action';
import './checkout-item.css';

const CheckoutItem = ({id,imageUrl,name,price,quantity,addItem,removeItem,reduceItemCount})=>{
   const item = {
      id:id,
      imageUrl:imageUrl,
      name:name,
      price:price,
      quantity:quantity
   }
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
           <span className='decreaseCount' onClick={()=>reduceItemCount(id)} >&#10134;</span> {quantity} <span className = 'increaseCount' onClick={()=>addItem(item)} >&#10133;</span>
         </div>
         <div className='checkoutremove' onClick={()=>removeItem(id)}>
            &#9986;
         </div>
     </div>
 )
}
const matchDispatchToProps = (dispatch)=>({
   removeItem : (id)=>{dispatch(removeItem(id))},
   reduceItemCount : (id)=>{dispatch(reduceItemCount(id))},
   addItem : (item)=>{dispatch(addItem(item))}
})
export default connect(null,matchDispatchToProps)(CheckoutItem);