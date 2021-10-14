import React from 'react';
import '../../Screens/Review/ReviewScreen.css';


const ReviewCard = ({key, text, onClick, index}) => {
    return (
        <div key={key} onClick={onClick} className='flashcard'>
            <h4 className='cardNo'>{index}</h4>
            <p>{text}</p>
        </div>
    )
}

export default ReviewCard;