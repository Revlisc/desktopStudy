import React, { useState } from "react";

import { useLocation } from "react-router";
import AddNewQuestion from "../../Components/AddNewQuestionComponent/AddNewQuestionComponent";
import EditQuestion from "../../Components/EditQuestion/EditQuestion";
import "./EditSetScreen.css";

const EditSetScreen = ({ data }) => {
  //grabbing setId from location param
  const location = useLocation();
  const { setId } = location.state;
  //filter out set being edited from all sets
  let setFromProps = data.filter((set) => set.id === setId)[0];

  const [currentSet, setCurrentSet] = useState(setFromProps);
  const [title, setTitle] = useState(currentSet.setName);
  const [description, setDescription] = useState(currentSet.description);
  console.log("current set", currentSet);
  //store state from data prop (refractor to redux), read state from local state. submit to redux on submit

  //refractor methods and local state to EditSetSceen, making it a container component

  const handleInfoChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const handleNewQuestionSubmit = (e, term, definition) => {
    e.preventDefault();
    console.log(term, definition);
    //add to currentSet in local state
    const questions = currentSet.questions;
    const newQuestion = { question: term, answer: definition, id: Math.random() * 1000 };
    console.log(questions);
    console.log(newQuestion);
    const updatedQuestions = questions.concat(newQuestion);
    console.log(updatedQuestions);
    //merge new questions into new set
    const updatedSet = { ...currentSet, questions: updatedQuestions };
    console.log(updatedSet);
    setCurrentSet(updatedSet);
  };

  const handleQuestionInputChange = (e, id) => {
    e.preventDefault();

    //we need to update individual questions inside of local state

    console.log(e.target.id, id);
    //go inside state, update respective question
    const questions = currentSet.questions;

    const questionToChange = questions.filter((question) => question.id === id)[0];
    console.log(questionToChange);
    //update question property on questionToChange
    const updatedQuestion = { ...questionToChange, [e.target.id]: e.target.value };
    console.log(updatedQuestion);
    //map over questions, change respective question
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return updatedQuestion;
      }
      return question;
    });

    console.log(updatedQuestions);
    //then merge into state
    const updatedSet = { ...currentSet, questions: updatedQuestions };
    console.log(updatedSet);
    setCurrentSet(updatedSet);

    // if (e.target.id === "term") {
    //   console.log(e.target.id, id);
    // } else {
    //   console.log(e.target.id, id);
    // }
  };
  //this will submit ALL changes
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  id="title"
                  name="title"
                  value={title}
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
                  value={description}
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

      {/* <div className="submitBtn" onClick={(e) => handleSubmit(e)}>
        Submit Changes
      </div> */}
    </div>
  );
};

export default EditSetScreen;
