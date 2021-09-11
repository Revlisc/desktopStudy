import React from 'react'

const SetButton = ({ key, name }) => {
    return (
      <div>
        <h2 id={key}>{name}</h2>
      </div>
    );
  };
  
  export default SetButton;