import React from 'react';
import './Menu-item.css'

const Menuitem = ({title,imgUrl,type}) =>{
    return(
    <div className= {`${type}menu-item`} style={{backgroundImage: `url(${imgUrl})`}} >
            <div className="item-name">
                <h1>{title.toUpperCase()}</h1> 
                <h3>SHOP NOW</h3>
            </div>
    </div>
    );  
}

export default Menuitem;