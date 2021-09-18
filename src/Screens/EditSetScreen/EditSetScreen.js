import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AddNewQuestion from "../../Components/AddNewQuestionComponent/AddNewQuestionComponent";
import EditQuestion from "../../Components/EditQuestion/EditQuestion";
import { updateSet } from "../../Redux/actions";
import { deleteSet } from "../../Redux/actions";

import "./EditSetScreen.css";

const EditSetScreen = ({ userData, updateSet, deleteSet }) => {
  //grabbing setId from location param
  const location = useLocation();
  const { setId } = location.state;
  //filter out set being edited from all sets
  let setFromProps = userData.filter((set) => set.id === setId)[0];

  const [currentSet, setCurrentSet] = useState(setFromProps);
  const [fillButton, setFillButton] = useState(false);
  const [showCheckMark, setShowCheckmark] = useState(false);

  //change showCheckmark back to false after 5 seconds
  useEffect(() => {
    const id = window.setTimeout(() => {
      setShowCheckmark(false);
    }, 5000);
    //cleanup function
    return () => window.clearTimeout(id);
  }, [showCheckMark]);

  const handleInfoChange = (e) => {
    e.preventDefault();

    setCurrentSet({
      ...currentSet,
      [e.target.id]: e.target.value,
    });
    setFillButton(true);
  };

  const handleNewQuestionSubmit = (e, term, definition) => {
    e.preventDefault();

    //add to currentSet in local state
    const questions = currentSet.questions;
    const newQuestion = { question: term, answer: definition, id: Math.random() * 1000 };
    const updatedQuestions = questions.concat(newQuestion);
    //merge new questions into new set
    const updatedSet = { ...currentSet, questions: updatedQuestions };
    setCurrentSet(updatedSet);
    setFillButton(true);
  };

  const handleQuestionDelete = (e, id) => {
    e.preventDefault();
    const newQuestionSet = currentSet.questions.filter((question) => question.id !== id);
    setCurrentSet({ ...currentSet, questions: newQuestionSet });
    setFillButton(true);
  };

  const handleQuestionInputChange = (e, id) => {
    e.preventDefault();
    //we need to update individual questions inside of local state
    //go inside state, update respective question
    const questions = currentSet.questions;
    const questionToChange = questions.filter((question) => question.id === id)[0];
    //update question property on questionToChange
    const updatedQuestion = { ...questionToChange, [e.target.id]: e.target.value };
    //map over questions, change respective question
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return updatedQuestion;
      }
      return question;
    });

    //then merge into state
    const updatedSet = { ...currentSet, questions: updatedQuestions };
    setCurrentSet(updatedSet);
    setFillButton(true);
  };

  const handleSetDelete = (e) => {
    e.preventDefault();
    const updatedState = userData.filter((set) => set.id !== currentSet.id);
    deleteSet(updatedState);
  };

  //this will submit ALL changes
  const handleSubmit = (e) => {
    e.preventDefault();
    //map over global state, change respective set, dispatch
    const globalState = userData;
    //change respective set
    const updatedState = globalState.map((set) => {
      if (set.id === currentSet.id) {
        return currentSet;
      }
      return set;
    });
    updateSet(updatedState);
    setFillButton(false);
    setShowCheckmark(true);
  };
  return (
    <div>
      <div className="screenHeader">
        <h1>Edit Set</h1>
      </div>

      <div className="editSetContainer">
        <div className="formContainer_editScreen">
          <form>
            {/* <label for="title">title</label> */}
            <div className="formItem">
              <label for="text">
                <input
                  className="form-input"
                  type="text"
                  id="setName"
                  name="setName"
                  value={currentSet.setName}
                  onChange={(e) => handleInfoChange(e)}
                />
              </label>
            </div>

            <div className="formItem">
              <label>
                <input
                  className="form-input"
                  type="textarea"
                  id="description"
                  name="description"
                  value={currentSet.description}
                  onChange={(e) => handleInfoChange(e)}
                />
              </label>
            </div>
          </form>
        </div>

        <div className="questionListContainer">
          {currentSet.questions.map((question) => {
            return (
              // edit question div set to relative to position delete button
              <div className="edit-question">
                <EditQuestion
                  key={question.id}
                  currentSet={currentSet}
                  question={question}
                  onChangeHandler={handleQuestionInputChange}
                  deleteHandler={handleQuestionDelete}
                />
              </div>
            );
          })}
        </div>

        <AddNewQuestion handleSubmit={handleNewQuestionSubmit} currentSet={currentSet} />
        <div className="submitBtn-wrapper">
          <button onClick={(e) => handleSetDelete(e)}>Delete this set</button>
          {!showCheckMark ? (
            <button
              className={`submitBtn ${fillButton ? "fillBtn" : ""}`}
              onClick={(e) => handleSubmit(e)}
            >
              Submit Changes
            </button>
          ) : (
            <div className="save-confirmation">
              <p>Changes Saved</p>
              <i className="fa fa-check"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});
const mapDispatchToProps = (dispatch) => ({
  updateSet: (updatedState) => dispatch(updateSet(updatedState)),
  deleteSet: (updatedState) => dispatch(deleteSet(updatedState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSetScreen);
