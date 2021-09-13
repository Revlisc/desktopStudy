import React, { useState } from "react";
import { connect } from "react-redux";
import "./AddNewQuestionComponent.css";

const AddNewQuestion = ({ currentSet }) => {
  const [term, setTerm] = useState("");
  const [definition, setdefinition] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id == "term") {
      setTerm(e.target.value);
    } else {
      setdefinition(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
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
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

// const mapStateToProps = () => ({

// })
// const mapDispatchToProps = (dispatch) => ({
//   addQuestion: (question) => dispatch(addQuestion(question)),
// });

export default AddNewQuestion;
