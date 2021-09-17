import React, { useState } from "react";
import "./EditQuestion.css";

const EditQuestion = ({ onChangeHandler, question, deleteHandler }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <div
      className="question-edit-form"
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      <form className="edit-question">
        <div className="form-item">
          <input
            className="form-question-input"
            type="text"
            id="question"
            name="question"
            placeholder="question"
            value={question.question}
            onChange={(e) => onChangeHandler(e, question.id)}
          />
          <div className="info-text">term</div>
        </div>

        <div className="form-item">
          <input
            className="form-question-input"
            type="text"
            id="answer"
            name="answer"
            placeholder="answer"
            value={question.answer}
            onChange={(e) => onChangeHandler(e, question.id)}
          />
          <div className="info-text">definition</div>
        </div>
      </form>
      <i
        onClick={(e) => deleteHandler(e, question.id)}
        className={`fa fa-times ${showDeleteBtn ? "show" : ""}`}
      ></i>
    </div>
  );
};

export default EditQuestion;
