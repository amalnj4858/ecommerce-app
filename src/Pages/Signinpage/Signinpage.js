import React from 'react';
import Signinform from '../../Components/Signinform/Signinform.js';
import Signupform from '../../Components/Signupform/Signupform.js';
import './Signinpage.css'

const Signinpage = ()=>{
    return(
        <div className = "Signinpage">
            <Signinform />
            <Signupform />
        </div>
    )
}

export default Signinpage;