import React, { Fragment, Component} from 'react';
import './App.css';
//import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginConfirm from './Screens/LoginConfirm.js';
import HomeScreen from './Screens/HomeScreen.js';
import SignInPage from './Screens/SignInPage';
//made constructor for use of this.state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'John Doe',
      userInfo: {
         username: 'test',
         email: 'email',
         password: 'password'
      }
    }
  }
  
  
  setCurrentUser = ({username, email, password}) => {
    
    
    //const { setUserInfo } = this.props;
    //setUserInfo({ username, email, password });
    //username email and password
    console.log("i am", username);
    this.setState({currentUser: username, userInfo: {username, email, password}})
  }
  render() {
    //const { currentUser, userInfo } = this.props;
    //<Route exact path='/' render={() => <LoginConfirm currentUser={this.state.currentUser} userInfo={this.state.userInfo} />} />
    //login confirm is mainly for testing, goes to homescreen if a user exists, otherwise uses signinpage
    return (
      <Fragment>
          
          <Switch>
            <Route exact path='/' render={() => <LoginConfirm currentUser={this.state.currentUser} userInfo={this.state.userInfo} />} />
            <Route exact path='/login'
              render={() => this.state.currentUser ? (
                <Route exact to='/home' render={() => <div className=""><HomeScreen className=''/></div>} />
              ) : (
                <SignInPage setCurrentUser={this.setCurrentUser} />
              )}
            />
          </Switch>
          
      </Fragment>
      
    );
  };
}

export default App;
