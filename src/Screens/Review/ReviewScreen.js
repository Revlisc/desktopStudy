import React, { useState} from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router";
import ReviewCard from '../../Components/ReviewCard/ReviewCard';

const mapStateToProps = (state) => ({
    userData: state.userData.userData,
});

const ReviewScreen = ({data}) => {
    
    const [flipped, setFlip] = useState(false);
    const [index, setIndex] = useState(1)
    const location = useLocation();
    const { setId } = location.state;
    //filter out set being edited from all sets
    let currentSet = data.filter((set) => set.id === setId)[0];
    //const current = currentSet.questions[index]

    const wrong = []
    const correct = []

    function showPrevCard() {
        if (index >= 0) {
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
    }

    function addIncorrect() {
        wrong.push(index)
        console.log(wrong)
    }
    
    let current = currentSet.questions.filter(current => current.id === index)
    console.log(current)
    console.log(index)
    return (
        <div>
            <h1>Review Set</h1>
            <h5>{currentSet.setName}</h5>
            <p>{currentSet.description}</p>
            <hr/>
            
            {current.map((question) => {
                return <ReviewCard key={question.id} text={flipped ? question.answer : question.question} onClick={() => setFlip(!flipped)}/>;
            })}
            
            <div>
                <div 
                    className=''
                    onClick={() => {
                        showPrevCard();
                    }}
                >
                    Prev
                </div>
                <div 
                    className=''
                    onClick={() => {
                        showNextCard();  
                    }}
                >
                    Next
                </div>
            </div>
            <div>
                <div
                    
                    onClick={() => {
                        addCorrect()
                    }}
                >
                    check
                </div>
                <div
                    onClick={() => {
                        addIncorrect()
                    }}
                >
                    x
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(ReviewScreen);