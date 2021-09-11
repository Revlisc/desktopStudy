import React, { Component } from 'react';
import UserBar from '../Components/UserBar';
//import '../SignInPage.css';
import  validateLogin  from '../utils/validateLogin.js';

//sign in page with logic to handle updating current user
class SignInPage extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        errors: {}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        const { setCurrentUser } = this.props
        const {username, email, password } = this.state;
        e.preventDefault();
        const values = {username, email, password};
        console.log(values);
        const errors = validateLogin(values);
        console.log(errors);
        const noError = Object.keys(errors).length === 0;
        if (noError) {
            this.setState({
                username: '',
                email: '',
                password: '',
                errors: {}
            })
            setCurrentUser(values)
        } else {
            console.error(errors);
            this.setState({values, errors})
        }
    }

    render() {
        const { username, email, password, errors } = this.state;
        return (
            <div className='signInBg'>
                <div className='formContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <UserBar 
                            value={username} 
                            required 
                            name='username' 
                            onChange={this.handleChange} 
                            error={errors.name} 
                            placeholder='Username...'
                        />
                        <UserBar 
                            value={email} 
                            required 
                            name='email' 
                            onChange={this.handleChange} 
                            error={errors.email} 
                            placeholder='Email...'
                        />
                        <UserBar 
                            value={password} 
                            required 
                            name='password' 
                            onChange={this.handleChange} 
                            error={errors.password} 
                            placeholder='Password...'
                        />
                        <button classname='submitBtn' type='submit'>Submit</button>
                    
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInPage;