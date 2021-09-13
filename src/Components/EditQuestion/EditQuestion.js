import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editQuestion } from "../../Redux/actions";

const EditQuestion = ({ currentSet, question, userData, editQuestion }) => {
  const [term, setTerm] = useState(question.question);
  const [answer, setAnswer] = useState(question.answer);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setShowBtn(true);
  }, [term, answer]);
  //had to set showBtn to false on initial component load
  useEffect(() => {
    setShowBtn(false);
  }, []);

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
    console.log(term, answer, question.id);

    //edit current question

    //create copy of question to be changed
    const questionToEdit = question;
    console.log("old", questionToEdit);
    //create updated question
    const updatedQuestion = { ...questionToEdit, question: term, answer: answer };
    console.log("new", updatedQuestion);

    //merge into questions array from set

    const updatedSetQuestions = currentSet.questions.map((questionFromSet) => {
      if (questionFromSet.id === question.id) {
        return updatedQuestion;
      }
      return questionFromSet;
    });

    console.log("updated questions array", updatedSetQuestions);

    //merge into whole entire set
    const newSet = { ...currentSet, questions: updatedSetQuestions };
    console.log(newSet);

    //merge into new state

    const updatedState = userData.map((set) => {
      if (set.id === currentSet.id) {
        return newSet;
      }
      return set;
    });

    console.log(updatedState);

    //dispatch to redux
    editQuestion(updatedState);
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
          {showBtn === true ? (
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              submit
            </button>
          ) : (
            <div />
          )}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editQuestion: (updatedState) => dispatch(editQuestion(updatedState)),
  };
};

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion);
