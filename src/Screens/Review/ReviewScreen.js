import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import "./ReviewScreen.css";

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

const Percentage = ({ percent, length }) => {
  let value = Math.floor((percent / length) * 100);
  console.log("current is", percent);
  console.log("length is", length);
  console.log("value is", value);
  return (
    <div>
      <p>You know {value}% of the set!</p>
    </div>
  );
};

const ReviewScreen = ({ userData }) => {
  const [flipped, setFlip] = useState(false);
  const [index, setIndex] = useState(1);
  const [percent, setPercent] = useState(0);
  const location = useLocation();
  const { setId } = location.state;
  //filter out set being edited from all sets
  let currentSet = userData.filter((set) => set.id === setId)[0];
  //const current = currentSet.questions[index]

  const wrong = [];
  const correct = [];

  function showPrevCard() {
    if (index - 1 > 0) {
      let newIndex = index;
      newIndex--;
      console.log(newIndex);
      setIndex(newIndex);
    }
  }

  function showNextCard() {
    if (index + 1 <= currentSet.questions.length) {
      let newIndex = index;
      newIndex++;
      console.log(newIndex);
      setIndex(newIndex);
    }
  }

  function addCorrect() {
    correct.push(index);
    console.log(correct);
    setPercent(percent + 1);
  }

  function addIncorrect() {
    wrong.push(index);
    console.log(wrong);
  }

  let current = currentSet.questions.filter((question, idx) => {
    if (idx + 1 === index) {
      return question;
    }
    return;
  });
  console.log(current);
  console.log(index);

  // let percentage = correct / currentSet.questions.length;
  // console.log('correct is ', correct)
  // console.log('length is ', currentSet.questions.length)
  // console.log('percentage is', percentage)
  return (
    <div>
      <h1 className="reviewTitle">Review Set</h1>
      <h2 className="reviewCurrTitle">{currentSet.setName}</h2>
      <p className="reviewCurrWords">{currentSet.description}</p>

      {current.map((question) => {
        return (
          <ReviewCard
            className="flashcard"
            index={index}
            key={question.id}
            text={flipped ? question.answer : question.question}
            onClick={() => setFlip(!flipped)}
          />
        );
      })}

      <ul className="reviewButtons">
        <li
          className="reviewWrong"
          onClick={() => {
            addIncorrect();
          }}
        >
          <i className="fas fa-times-circle fa-lg" />
        </li>
        <li
          className="reviewBack"
          onClick={() => {
            showPrevCard();
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </li>
        <li className="questionProgress">
          {index} / {currentSet.questions.length}
        </li>
        <li
          className="reviewNext"
          onClick={() => {
            showNextCard();
          }}
        >
          <i className="fas fa-arrow-right " />
        </li>
        <li
          className="reviewCorrect"
          onClick={() => {
            addCorrect();
          }}
        >
          <i className="fas fa-check-square fa-lg" />
        </li>
      </ul>
      <div>
        <div className="correctProgress">
          <Percentage percent={percent} length={currentSet.questions.length} />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ReviewScreen);
