import React, { useState } from "react";

import { useLocation } from "react-router";
import AddNewQuestion from "../../Components/AddNewQuestionComponent/AddNewQuestionComponent";
import "./EditSetScreen.css";

const EditSetScreen = ({ data }) => {
  //grabbing setId from location param
  const location = useLocation();
  const { setId } = location.state;
  //filter out set being edited from all sets
  let currentSet = data.filter((set) => set.id === setId)[0];

  const [title, setTitle] = useState(currentSet.setName);
  const [description, setDescription] = useState(currentSet.description);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
          </form>
        </div>

        <div className="questionListContainer">
          <div>
            <ul>
              {currentSet.questions.map((question) => {
                return <li key={question.id}>{`${question.question} : ${question.answer}`}</li>;
              })}
            </ul>
          </div>
        </div>

        <AddNewQuestion currentSet={currentSet} />
      </div>
    </div>
  );
};

export default EditSetScreen;
