import React from 'react';
import './Homepage.css'
const Homepage = ()=>{
    return(
        <div className = 'homepage'>
            <div className="menu">
                <div className="menu-item">
                    <div className="item-name">
                        <h1>HATS</h1> 
                        <h3>SHOP NOW</h3>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-name">
                        <h1>JACKETS</h1> 
                        <h3>SHOP NOW</h3>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-name">
                        <h1>SNEAKERS</h1> 
                        <h3>SHOP NOW</h3>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-name">
                        <h1>WOMEN</h1> 
                        <h3>SHOP NOW</h3>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="item-name">
                        <h1>MEN</h1> 
                        <h3>SHOP NOW</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;