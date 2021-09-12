import React from "react";
import "./SetButton.css";
import { Link } from "react-router-dom";
const SetButton = ({ set }) => {
  console.log(set);
  return (
    <div className="setButton">
      <h2>{set.setName}</h2>
      <Link to={{ pathname: "/editSet", state: { setId: set.id } }}>Edit This Set</Link>
    </div>
  );
};

export default SetButton;
