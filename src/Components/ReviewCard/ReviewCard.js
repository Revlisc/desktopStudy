import React from 'react';


const ReviewCard = ({key, text, onClick}) => {
    return (
        <div key={key} onClick={onClick}>
            {text}
        </div>
    )
}

export default ReviewCard;