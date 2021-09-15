import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import AddNewQuestion from "../../Components/AddNewQuestionComponent/AddNewQuestionComponent";
import EditQuestion from "../../Components/EditQuestion/EditQuestion";
import { updateSet } from "../../Redux/actions";
import "./EditSetScreen.css";

const EditSetScreen = ({ userData, updateSet }) => {
  //grabbing setId from location param
  const location = useLocation();
  const { setId } = location.state;
  //filter out set being edited from all sets
  let setFromProps = userData.filter((set) => set.id === setId)[0];

  const [currentSet, setCurrentSet] = useState(setFromProps);
  // const [title, setTitle] = useState(currentSet.setName);
  // const [description, setDescription] = useState(currentSet.description);
  //refractor title and descirption into currentSet

  const handleInfoChange = (e) => {
    e.preventDefault();

    setCurrentSet({
      ...currentSet,
      [e.target.id]: e.target.value,
    });

    // if (e.target.id === "title") {
    //   setTitle(e.target.value);
    // } else {
    //   setDescription(e.target.value);
    // }
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
          <div>
            {currentSet.questions.map((question) => {
              return (
                <EditQuestion
                  key={question.id}
                  currentSet={currentSet}
                  question={question}
                  onChangeHandler={handleQuestionInputChange}
                />
              );
            })}
          </div>
        </div>

        <AddNewQuestion handleSubmit={handleNewQuestionSubmit} currentSet={currentSet} />
      </div>

      <div className="submitBtn" onClick={(e) => handleSubmit(e)}>
        Submit Changes
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});
const mapDispatchToProps = (dispatch) => ({
  updateSet: (updatedState) => dispatch(updateSet(updatedState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSetScreen);
