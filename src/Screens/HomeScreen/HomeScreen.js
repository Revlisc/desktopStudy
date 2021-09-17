import React from "react";

import SetButton from "../../Components/SetButtonFolder/SetButton";
import "./HomeScreen.css";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  userData: state.userData.userData
})

const HomeScreen = ({ userData }) => {
  return (
    <div>
      <div className="screenHeader">
        <h1>My Sets</h1>
      </div>

      <div className="homeScreenContainer">
        {userData.map((set) => {
          console.log(set);
          return <SetButton key={set.id} set={set} />;
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(HomeScreen);
