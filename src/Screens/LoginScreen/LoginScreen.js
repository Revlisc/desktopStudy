import React, {Component} from 'react';

import validateSignUp  from '../../utils/validateSignUp.js';
import UserBar from '../../Components/UserBar';


class LoginScreen extends Component {
    
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
        const errors = validateSignUp(values);
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
            console.log('values are', values)
        } else {
            console.error('errors are', errors);
            this.setState({values, errors})
        }
    }

    render() {
        const { username, email, password, errors } = this.state;
        return (
            <div className='signInBg'>
                <h1>StudyApp!</h1>
                <h4>Login to Your Account</h4>
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
                        
                        <button className='submitBtnSignIn' type='submit'>Sign In</button>
                    </form>
                    
            
                </div>
            </div>
        );
    }
}

export default LoginScreen;