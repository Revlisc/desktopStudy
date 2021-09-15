import React from "react";

const EditQuestion = ({ onChangeHandler, deleteHandler, question }) => {
  return (
    <div className="questionAddForm">
      <form>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="question"
          value={question.question}
          onChange={(e) => onChangeHandler(e, question.id)}
        />

        <input
          type="text"
          id="answer"
          name="answer"
          placeholder="answer"
          value={question.answer}
          onChange={(e) => onChangeHandler(e, question.id)}
        />

        <div onClick={(e) => deleteHandler(e, question.id)} className="deleteBtn">
          Delete this question
        </div>

        {/* <div className="labels">
        <p className="inputLabel">Term</p>
        <p className="inputLabel"> Definition</p>
      </div> */}
      </form>
    </div>
  );
};

export default EditQuestion;
