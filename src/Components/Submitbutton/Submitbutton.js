import React from 'react';
import './Submitbutton.css';

const Submitbutton = ({value,type})=>{
    return(
    <button value = {value} type = {type} > {value} </button>
    )
}

export default Submitbutton;