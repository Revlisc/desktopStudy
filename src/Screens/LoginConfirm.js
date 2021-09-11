import React from 'react';
//import '../HomePage.css';

//for testing what user exists, can delete/conditionally render later
const LoginConfirm = ({currentUser, userInfo}) => {
    console.log(currentUser)
    return (
        <div className='bg-main'>
            {
                !currentUser ? 
                    <div className='intro-container'>
                        <p>This is words for testing when no currUser exists</p>
                    </div>
                    :
                    <div className='loggedIntro'>
                        <p>This is words for testing when user IS there, hello { currentUser }</p>
                    </div>
            }
        </div>
    );
}

export default LoginConfirm;