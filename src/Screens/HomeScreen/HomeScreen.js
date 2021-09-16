import React from "react";

import SetButton from "../../Components/SetButtonFolder/SetButton";
import "./HomeScreen.css";

const HomeScreen = ({ data }) => {
  return (
    <div>
      <div className="screenHeader">
        <h1>My Sets</h1>
      </div>

      <div className="homeScreenContainer">
        {data.map((set) => {
          console.log(set);
          return <SetButton key={set.id} set={set} />;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
