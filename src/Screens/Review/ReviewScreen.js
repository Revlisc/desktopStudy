import React, { useState} from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router";
import ReviewCard from '../../Components/ReviewCard/ReviewCard';

const mapStateToProps = (state) => ({
    userData: state.userData.userData,
});

const Percentage = ({percent, length}) => {
    let value = (percent / length) * 100
    console.log('current is', percent)
    console.log('length is', length)
    console.log('value is', value)
    return (
        <div>
            <p>{value}% Correct</p>
        </div>
    )
}

const ReviewScreen = ({data}) => {
    
    const [flipped, setFlip] = useState(false);
    const [index, setIndex] = useState(1)
    const [percent, setPercent] = useState(0)
    const location = useLocation();
    const { setId } = location.state;
    //filter out set being edited from all sets
    let currentSet = data.filter((set) => set.id === setId)[0];
    //const current = currentSet.questions[index]

    const wrong = []
    const correct = []

    function showPrevCard() {
        if ( (index - 1) > 0) {
            let newIndex = index
            newIndex--
            console.log(newIndex)
            setIndex( newIndex)
        }
    }

    function showNextCard() {
        if ((index + 1 ) <= (currentSet.questions.length)) {
            let newIndex = index
            newIndex++
            console.log(newIndex)
            setIndex(newIndex)
        }
    }

    function addCorrect() {
        correct.push(index)
        console.log(correct)
        setPercent(percent + 1)
        
    }

    function addIncorrect() {
        wrong.push(index)
        console.log(wrong)
    }
    
    let current = currentSet.questions.filter(current => current.id === index)
    console.log(current)
    console.log(index)
    // let percentage = correct / currentSet.questions.length;
    // console.log('correct is ', correct)
    // console.log('length is ', currentSet.questions.length)
    // console.log('percentage is', percentage)
    return (
        <div>
            <h1>Review Set</h1>
            <h4>{currentSet.setName}</h4>
            <p>{currentSet.description}</p>
            <hr/>
            
            {current.map((question) => {
                return <ReviewCard index={index} key={question.id} text={flipped ? question.answer : question.question} onClick={() => setFlip(!flipped)}/>;
            })}
            
            <div className='reviewButtons'>
                <div 
                    className='reviewWrong'
                    onClick={() => {
                        addIncorrect()
                    }}
                >
                    x
                </div>
                <div 
                    className='reviewBack'
                    onClick={() => {
                        showPrevCard();
                    }}
                >
                    Prev
                </div>
                <div 
                    className='reviewNext'
                    onClick={() => {
                        showNextCard();  
                    }}
                >
                    Next
                </div>
                <div
                    className='reviewCorrect'
                    onClick={() => {
                        addCorrect()
                    }}
                >
                    check
                </div>
            </div>
            <div>
                <div>
                    <Percentage percent={percent} length={currentSet.questions.length} />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(ReviewScreen);