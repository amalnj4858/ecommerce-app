import React from 'react';
import './Collectionitem.css'

const Collectionitem = ({id,imgUrl,title,price}) =>{
    return(
        <div className = "itemComponent" key = {id} >
            <div style = {{backgroundImage : `url(${imgUrl})` }} className = "bgimage" />
            <div className = "info">
                <div className = 'title' ><b>{title}</b></div>
                <div className = 'price'><b>${price}</b></div>
            </div>
        </div>
    )
}
export default Collectionitem;