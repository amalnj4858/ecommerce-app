import React from 'react';
import './Forminput.css'

const Forminput = ({handleChange,type,...otherProps})=>{
    return(
       <input onChange = {handleChange} type = {type} {...otherProps} />
    )
}

export default Forminput;