import React, {Component} from 'react';

import validateSignUp  from '../../utils/validateSignUp.js';
import UserBar from '../../Components/UserBar';
import './LoginScreen.css';
import intropic from '../../images/Group 2.png';


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
                <h1 className='loginTitle'>Welcome to StudyApp!</h1>
                <h4 className='loginSubtitle'>Login to Your Account</h4>
                <div className='loginDiv'>
                    <div className='loginFormContainer'>
                        <form onSubmit={this.handleSubmit}>
                            <h4 className='loginHeader'>Name</h4>
                            <UserBar 
                                value={username} 
                                required 
                                name='username' 
                                onChange={this.handleChange} 
                                error={errors.name} 
                                
                                className='userbar'
                            />
                            <h4 className='loginHeader'>Email</h4>
                            <UserBar 
                                value={email} 
                                required 
                                name='email' 
                                onChange={this.handleChange} 
                                error={errors.email} 
                                
                                className='userbar'
                            />
                            <h4 className='loginHeader'>Password</h4>
                            <UserBar 
                                value={password} 
                                required 
                                name='password' 
                                onChange={this.handleChange} 
                                error={errors.password} 
                                
                                className='userbar'
                            />
                            
                            <button className='submitBtnLogin' type='submit'>Sign In</button>
                        </form>
                
                    </div>
                    <div>
                        <img className='introPic' src={intropic} alt='intro graphic'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;