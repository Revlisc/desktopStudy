import React, { useState } from "react";
import SetButton  from '../../Components/SetButtonFolder/SetButton';
import "./HomeScreen.css";
import { DATA } from "../../TEST_DATA/DATA";
// console.log(DATA.userData);

// const EditSetScreen = ({ set }) => {
//   return <div>hi from edit set</div>;
// };

const HomeScreen = () => {
  //const {allSets} = this.props //from redux store
  const [data, setData] = useState(DATA);

  console.log(data.userData);
  return (
    <div>
      <div className="screenHeader">
        <h1>My Sets</h1>
      </div>

      <div className="homeScreenContainer">
        {data.userData.map((set) => {
          console.log(set);
          return <SetButton key={set.id} set={set} />; //add onClick handler to switch to EditSetScreen
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
