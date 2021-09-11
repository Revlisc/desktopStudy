import SetButton from "../../Components/SetButton/SetButton";
import "./HomeScreen.css";
import React from "react";
const HomeScreen = ({ data }) => {
  return (
    <div>
      <div className="screenHeader">
        <h1>My Sets</h1>
      </div>

      <div className="homeScreenContainer">
        {data.map((set) => {
          console.log(set);
          return <SetButton key={set.id} set={set} />; //add onClick handler to switch to EditSetScreen
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
