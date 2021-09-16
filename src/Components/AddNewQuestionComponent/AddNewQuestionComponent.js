import React, { useState } from "react";

import "./AddNewQuestionComponent.css";

const AddNewQuestion = ({ handleSubmit }) => {
  const [term, setTerm] = useState("");
  const [definition, setdefinition] = useState("");
  const [showAddBtn, setShowAddBtn] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "term") {
      setTerm(e.target.value);
    } else {
      setdefinition(e.target.value);
    }
  };

  return (
    <div
      className="question-edit-form"
      onMouseEnter={() => setShowAddBtn(!showAddBtn)}
      onMouseLeave={() => setShowAddBtn(!showAddBtn)}
    >
      <form className="edit-question">
        <div className="form-item">
          <input
            className="form-question-input"
            type="text"
            id="term"
            name="term"
            placeholder="term"
            value={term}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-item">
          <input
            className="form-question-input"
            type="text"
            id="definition"
            name="definition"
            placeholder="definition"
            value={definition}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <i
            className={`fa fa-plus ${showAddBtn ? "show" : ""}`}
            onClick={(e) => {
              handleSubmit(e, term, definition);
              setTerm("");
              setdefinition("");
            }}
          ></i>
        </div>
      </form>
      <div className="add-new-text">Add a new question </div>
    </div>
  );
};

export default AddNewQuestion;
