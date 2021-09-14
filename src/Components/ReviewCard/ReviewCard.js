import React from 'react';


const ReviewCard = ({key, text, onClick, index}) => {
    return (
        <div key={key} onClick={onClick}>
            <h6>{index}</h6>
            <p>{text}</p>
        </div>
    )
}

export default ReviewCard;