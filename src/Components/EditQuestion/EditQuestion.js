import React, { useState } from "react";

const EditQuestion = ({ currentSet, question }) => {
  const [term, setTerm] = useState(question.question);
  const [answer, setAnswer] = useState(question.answer);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "term") {
      setTerm(e.target.value);
    } else {
      setAnswer(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term, answer);
    //edit current question
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
          value={answer}
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

export default EditQuestion;
