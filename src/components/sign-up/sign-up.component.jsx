import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';


class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            password2:''

        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, password2 } = this.state;

        if( password !== password2 ){
            alert("password don't match");
            return;
        }

        try {
            
            const{user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            
            this.setState({
                displayName:'',
                email:'',
                password:'',
                password2:''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        const { displayName, email, password, password2 } = this.state;
        return(
            <div className="sign-up">
            <h2 className="title"> I do not have a account </h2>
            <span> Sign up with your email and password </span>


            <form  className="sign-up-form" onSubmit={ this.handleSubmit } >
                 <FormInput
                  type='text'
                  name="displayName"
                  value={displayName}
                  handleChange={this.handleChange}
                  label="Name"
                  required 
                  />
                 <FormInput
                  name="email"
                  type='text'
                  value={email}
                  handleChange={this.handleChange}
                  label="Email"
                  required 
                  />
                <FormInput
                  name="password"
                  type='password'
                  value={password}
                  handleChange={this.handleChange}
                  label="Password"
                  required
                  />
                <FormInput
                  name="password2"
                  type='password'
                  value={password2}
                  handleChange={this.handleChange}
                  label="Confirm your password"
                  required
                  />
                  <CustomButton type="submit"> SIGN UP </CustomButton>
            </form>
            </div>
        )
    }
}

export default SignUp;