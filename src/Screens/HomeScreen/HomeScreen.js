import React from "react";

import SetButton from "../../Components/SetButtonFolder/SetButton";
import "./HomeScreen.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

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

      {/* render add set button here, link to AddSetScreen */}
      <Link to="/addSet">
        <i className="fa fa-plus add-set-btn"></i>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(HomeScreen);
