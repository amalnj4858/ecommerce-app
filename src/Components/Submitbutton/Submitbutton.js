import React from 'react';
import './Submitbutton.css';

const Submitbutton = ({value,...otherProps})=>{
    return(
    <button value = {value} {...otherProps}  > {value} </button>
    )
}

export default Submitbutton;