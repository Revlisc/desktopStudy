import React, { Fragment, Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { setUserInfo } from "./Redux/actions";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import SignUpPage from "./Screens/SignUpPage/SignUpPage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import EditSetScreen from "./Screens/EditSetScreen/EditSetScreen";
import NavbarLogin from "../src/Components/Navbar/NavbarLogin";

import ReviewScreen from "./Screens/Review/ReviewScreen";
import AddSetScreen from "./Screens/AddSetScreen/AddSetScreen";

//made constructor for use of this.state
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: 'John Doe',
  //     userInfo: {
  //        username: 'test',
  //        email: 'email',
  //        password: 'password'
  //     }
  //   }
  // }

  setCurrentUser = ({ username, email, password }) => {
    const { setUserInfo } = this.props;
    setUserInfo({ username, email, password });
    //username email and password
    //console.log("i am", username);
    //this.setState({currentUser: username, userInfo: {username, email, password}})
  };
  render() {
    const { currentUser } = this.props;
    //<Route exact path='/' render={() => <LoginConfirm currentUser={this.state.currentUser} userInfo={this.state.userInfo} />} />
    //login confirm is mainly for testing, goes to homescreen if a user exists, otherwise uses signinpage
    return (
      <Fragment>
        <NavbarLogin />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              currentUser ? (
                <Route
                  exact
                  to="/home"
                  render={() => (
                    <div className="">
                      <HomeScreen className="" />
                    </div>
                  )}
                />
              ) : (
                <SignUpPage setCurrentUser={this.setCurrentUser} />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? (
                <Route
                  exact
                  to="/home"
                  render={() => (
                    <div className="">
                      <HomeScreen />
                    </div>
                  )}
                />
              ) : (
                <LoginScreen setCurrentUser={this.setCurrentUser} />
              )
            }
          />

          
          <Route exact path="/home" render={() => <HomeScreen />} />
          <Route exact path="/editSet" render={() => <EditSetScreen />} />
          <Route exact path="/addSet" render={() => <AddSetScreen />} />
          <Route exact path="/testSet" render={() => <ReviewScreen />} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    userInfo: state.user.userInfo,
    userData: state.userData.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (values) => dispatch(setUserInfo(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
