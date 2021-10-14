import React, { Component } from 'react';
import UserBar from '../../Components/UserBar';
//import '../SignInPage.css';
import  validateSignUp  from '../../utils/validateSignUp.js';
import './SignUpPage.css';
import { Link } from 'react-router-dom';
import intropic from '../../images/Group 2.png'

//sign in page with logic to handle updating current user
class SignUnPage extends Component {
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
            
        } else {
            console.error(errors);
            this.setState({values, errors})
        }
    }

    render() {
        const { username, email, password, errors } = this.state;
        return (
            <div className='signInBg'>
                <h1 className='signUpTitle'>Welcome to StudyApp!</h1>
                <h4 className='signUpSubtitle'>Sign up for your free account today.</h4>
                <div className='signUpDiv'>    
                    <div className='formContainer'>
                        <form onSubmit={this.handleSubmit}>
                            <h4 className='signUpHeader'>Name</h4>
                            <UserBar 
                                value={username} 
                                required 
                                name='username' 
                                onChange={this.handleChange} 
                                error={errors.name} 
                                
                                className='userbar'
                            />
                            <h4 className='signUpHeader'>Email</h4>
                            <UserBar 
                                value={email} 
                                required 
                                name='email' 
                                onChange={this.handleChange} 
                                error={errors.email} 
                                
                                className='userbar'
                            />
                            <h4 className='signUpHeader'>Password</h4>
                            <UserBar 
                                value={password} 
                                required 
                                name='password' 
                                onChange={this.handleChange} 
                                error={errors.password} 
                                
                                className='userbar'
                            />
                            <button className='submitBtnSignIn' type='submit'>Sign Up</button>
                        
                        </form>
                        <div>
                            
                            <h5 className='alreadyUser'>Already a User? Login <Link to='/login' className='loginHere'>Here</Link></h5>
                        </div>
                    </div>
                    <div className='introPic'>
                        <img src={intropic} alt='intro graphic'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUnPage;