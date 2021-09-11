import React, { Component } from 'react';
import UserBar from '../../Components/UserBar';
//import '../SignInPage.css';
import  validateLogin  from '../../utils/validateLogin.js';
import './SignInPage.css';

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
                <h1>Welcome to StudyApp!</h1>
                <h4>Sign up for your free account today.</h4>
                <div className='formContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Name</h4>
                        <UserBar 
                            value={username} 
                            required 
                            name='username' 
                            onChange={this.handleChange} 
                            error={errors.name} 
                            placeholder='Username...'
                            className='userbar'
                        />
                        <h4>Email</h4>
                        <UserBar 
                            value={email} 
                            required 
                            name='email' 
                            onChange={this.handleChange} 
                            error={errors.email} 
                            placeholder='Email...'
                            className='userbar'
                        />
                        <h4>Password</h4>
                        <UserBar 
                            value={password} 
                            required 
                            name='password' 
                            onChange={this.handleChange} 
                            error={errors.password} 
                            placeholder='Password...'
                            className='userbar'
                        />
                        <button className='submitBtnSignIn' type='submit'>Sign Up</button>
                    
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInPage;