import React, { useState } from "react";

import "./AddNewQuestionComponent.css";

const AddNewQuestion = ({ handleSubmit }) => {
  const [term, setTerm] = useState("");
  const [definition, setdefinition] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "term") {
      setTerm(e.target.value);
    } else {
      setdefinition(e.target.value);
    }
  };

  return (
    <div className="questionAddForm">
      <form>
        <input
          type="text"
          id="term"
          name="term"
          placeholder="term"
          value={term}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          id="definition"
          name="definition"
          placeholder="definition"
          value={definition}
          onChange={(e) => handleChange(e)}
        />

        {/* <div className="labels">
          <p className="inputLabel">Term</p>
          <p className="inputLabel"> Definition</p>
        </div> */}
        <div>
          <button type="submit" onClick={(e) => handleSubmit(e, term, definition)}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewQuestion;
