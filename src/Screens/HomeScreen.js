import React, { useState } from "react";
import SetButton from "../Components/SetButton";

import { DATA } from "../TEST_DATA/DATA";
// console.log(DATA.userData);
const HomeScreen = () => {
  //const {allSets} = this.props //from redux store
  const [data, setData] = useState(DATA);
  console.log(data.userData);
  return (
    <div>
      <h1>Study Screen</h1>
      {data.userData.map((set) => {
        return <SetButton key={set.id} name={set.setName} />;
      })}
    </div>
  );
};

export default HomeScreen;
