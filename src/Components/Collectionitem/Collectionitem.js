import React from 'react';
import {connect} from 'react-redux';
import './Collectionitem.css';
import Submitbutton from '../Submitbutton/Submitbutton.js';
import {addItem} from '../../Redux/Cart/Cart-action.js';

const Collectionitem = ({item,addItem}) =>{
    const {id,imageUrl,name,price} = item;
    return(
        <div className = "itemComponent" key = {id} >
            <div style = {{backgroundImage : `url(${imageUrl})` }} className = "bgimage" />
            <Submitbutton value = 'ADD TO CART' className = 'submit' onClick = {()=>addItem(item)} />
            <div className = "info">
                <div className = 'title' ><b>{name}</b></div>
                <div className = 'price'><b>${price}</b></div>
            </div>
        </div>
    )
}

const matchDispatchToProps = (dispatch)=>({
    addItem : (item) => {dispatch(addItem(item))}
})

export default connect(null,matchDispatchToProps)(Collectionitem);