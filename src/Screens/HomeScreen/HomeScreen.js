import React, { useState } from "react";
import SetButton from "../../Components/SetButton/SetButton";
import "./HomeScreen.css";

// console.log(DATA.userData);

// const EditSetScreen = ({ set }) => {
//   return <div>hi from edit set</div>;
// };

const HomeScreen = ({ data }) => {
  //const {allSets} = this.props //from redux store

  console.log(data.userData);
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
