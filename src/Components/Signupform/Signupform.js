import React from 'react';
import Forminput from '../Forminput/Forminput.js'
import Submitbutton from '../Submitbutton/Submitbutton.js';
import {auth,createUserIfNotExists} from '../../Firebase/Firebase.config.js';
import './Signupform.css';

class Signupform extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    onSubmit = async (event)=>{
        event.preventDefault();
        console.log(this.state);
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        
        auth.createUserWithEmailAndPassword(email,password)
        .then((userCred)=>{createUserIfNotExists(userCred.user,displayName)})
        .then((resp)=>console.log(resp))
        .catch(error=>alert(error.messsage));

        await this.setState({
            email: '',
            displayName: '',
            password: '',
            confirmPassword: ''
          });
        

    }

    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({[name] : value });
    }

    render(){
        return(
            <div className = "Signupform">
                <h2>I do not have an account</h2>
                <h4>Sign up with your email and password</h4>
                <form onSubmit = {this.onSubmit} >
                    <Forminput handleChange = {this.handleChange} type = 'text' value = {this.state.displayName} name = 'displayName' required = {true} placeholder = 'Enter name' />
                    <Forminput handleChange = {this.handleChange} type = 'email' value = {this.state.email} name = 'email' required = {true} placeholder = 'Enter email' />
                    <Forminput handleChange = {this.handleChange} type = 'password' value = {this.state.password} name = 'password' required = {true} placeholder = 'Enter password' />
                    <Forminput handleChange = {this.handleChange} type = 'password' value = {this.state.confirmPassword} name = 'confirmPassword' required = {true} placeholder = 'Confirm password' />
                    <Submitbutton value = 'SIGN UP' type = 'submit' />
                </form>
            </div>
        )
    }
}

export default Signupform;
