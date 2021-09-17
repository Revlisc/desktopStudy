import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createSet } from "../../Redux/actions";
import { Link, Redirect } from "react-router-dom";
import AddNewQuestion from "../../Components/AddNewQuestionComponent/AddNewQuestionComponent";
import EditQuestion from "../../Components/EditQuestion/EditQuestion";
import { v4 as uuidv4 } from "uuid";

//same structure as edit set screen
//keep local state stored in component, update redux store on submit

const AddSet = ({ createSet }) => {
  //create skeleton of data
  const [showBtn, setShowBtn] = useState(false);
  const [currentSet, setCurrentSet] = useState({
    setName: "",
    id: 0,
    description: "",
    percentage: 0,
    questions: [],
  });

  const handleInfoChange = (e) => {
    e.preventDefault();
    setCurrentSet({
      ...currentSet,
      [e.target.id]: e.target.value,
    });
  };

  const handleQuestionInputChange = (e, id) => {
    e.preventDefault();
    const questionToChange = currentSet.questions.filter((question) => question.id === id)[0];
    console.log(questionToChange);
    const updatedQuestion = { ...questionToChange, [e.target.id]: e.target.value };
    const updatedQuestions = currentSet.questions.map((question) => {
      if (question.id === id) {
        return updatedQuestion;
      }

      return question;
    });
    setCurrentSet({ ...currentSet, questions: updatedQuestions });
  };
  const handleQuestionDelete = (e, id) => {
    e.preventDefault();
    const newQuestionSet = currentSet.questions.filter((question) => question.id !== id);
    setCurrentSet({ ...currentSet, questions: newQuestionSet });
  };

  const handleNewQuestionSubmit = (e, term, definition) => {
    e.preventDefault();
    const newQuestion = { question: term, answer: definition, id: uuidv4() };
    const updatedQuestions = currentSet.questions.concat(newQuestion);
    //merge new questions into new set
    // const updatedSet = { ...currentSet, questions: updatedQuestions };
    setCurrentSet({ ...currentSet, questions: updatedQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBtn(true);
    createSet({
      ...currentSet,
      id: uuidv4(),
    });
  };

  return (
    <div className="editSetContainer">
      <div className="formContainer_editScreen">
        {/* form to input title and description */}
        <form>
          <div className="formItem">
            <label for="text">
              <input
                className="form-input"
                type="text"
                id="setName"
                name="setName"
                placeholder="Enter a title"
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
                placeholder="Enter a description"
                value={currentSet.description}
                onChange={(e) => handleInfoChange(e)}
              />
            </label>
          </div>
        </form>
      </div>

      <div className="questionListContainer">
        {/* render list of questions created */}
        {currentSet.questions &&
          currentSet.questions.map((question) => {
            return (
              <EditQuestion
                key={question.id}
                question={question}
                onChangeHandler={handleQuestionInputChange}
                deleteHandler={handleQuestionDelete}
              />
            );
          })}
      </div>
      <AddNewQuestion handleSubmit={handleNewQuestionSubmit} />
      {/* show button when title, desciption are entered */}
      <div className="submitBtn-wrapper">
        {currentSet.description &&
          currentSet.setName &&
          (!showBtn ? (
            <button className="submitBtn fillBtn" onClick={(e) => handleSubmit(e)}>
              Create Set
            </button>
          ) : (
            <div className="status">
              <Redirect to="/home" />
            </div>
          ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createSet: (newSet) => dispatch(createSet(newSet)),
});

export default connect(null, mapDispatchToProps)(AddSet);
