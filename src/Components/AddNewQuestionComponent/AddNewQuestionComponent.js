import React, { useState } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../Redux/actions";
import "./AddNewQuestionComponent.css";

const AddNewQuestion = ({ currentSet, addQuestion, userData }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //create copy of questions
    const existingQuestions = currentSet.questions;
    //create new question object
    const newQuestion = { question: term, answer: definition, id: Math.random() * 1000 };
    //combine new question with existing questions
    const updatedQuestions = existingQuestions.concat(newQuestion);
    //update whole set with new questions
    let updatedSet = { ...currentSet, questions: updatedQuestions };
    //merge updatedSet into userData

    const updatedState = userData.map((set) => {
      if (set.id === currentSet.id) {
        return updatedSet;
      }
      return set;
    });
    console.log(updatedState);

    //dispatch action

    addQuestion(updatedState);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (updatedState) => dispatch(addQuestion(updatedState)),
  };
};

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewQuestion);
