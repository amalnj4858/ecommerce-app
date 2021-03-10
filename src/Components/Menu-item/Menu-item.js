import React from 'react';
import './Menu-item.css';
import {withRouter} from 'react-router-dom';

const Menuitem = ({title,imgUrl,type,url,history}) =>{
    return(
    <div className= {`${type}menu-item`} style={{backgroundImage: `url(${imgUrl})`}} >
            <div className="item-name" onClick = {()=>history.push(`${url}`)} >
                <h1>{title.toUpperCase()}</h1> 
                <h3>SHOP NOW</h3>
            </div>
    </div>
    );  
}

export default withRouter(Menuitem);