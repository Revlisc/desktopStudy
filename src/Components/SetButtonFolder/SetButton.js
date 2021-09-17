import React from "react";
import "./SetButton.css";
import { Link } from "react-router-dom";

// const mapStateToProps = state => ({
//   percentage: state.userData.percentage
// })

const SetButton = ({ set }) => {
  console.log(set);
  return (
    <div className="setButton">
      <h2>{set.setName}</h2>
      <Link to={{ pathname: "/editSet", state: { setId: set.id } }}>Edit This Set</Link>
      <Link to={{ pathname: "/testSet", state: { setId: set.id } }}>Test Your Knowledge</Link>
    </div>
  );
};

export default SetButton;
