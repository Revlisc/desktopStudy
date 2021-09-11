import React from "react";
import "./SetButton.css";
const SetButton = ({ set }) => {
  console.log(set);
  return (
    <div className="setButton">
      <h2>{set.setName}</h2>
    </div>
  );
};

export default SetButton;
