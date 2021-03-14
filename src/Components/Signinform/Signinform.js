import React from 'react';
import './Signinform.css';
import Forminput from '../Forminput/Forminput.js';
import Submitbutton from '../Submitbutton/Submitbutton.js';
import {signInWithGoogle} from '../../Firebase/Firebase.config.js';

class Signinform extends React.Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    onValueChange = (event)=>{
        let name = event.target.type;
        this.setState({[name] : event.target.value})
    }

    render(){
        return(
        <div className="signform">
            <h2>I am already a user</h2>
            <h4>Sign in with your email and password</h4>
            <form onSubmit = {this.onFormSubmit} >
                <Forminput type = 'email'  value = {this.state.email} handleChange = {this.onValueChange} placeholder = 'Enter email' required = {false} />
                <Forminput type = 'password'  value = {this.state.password} handleChange = {this.onValueChange} placeholder = 'Enter password' required = {false} />
                <Submitbutton value = 'SIGN IN' type = 'submit' /> 
                <Submitbutton value = 'GOOGLE' onClick = {signInWithGoogle}  />
            </form>
        </div>
        );
    }
}

export default Signinform;