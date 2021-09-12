import React from 'react';
import '../UserBar.css';

//each text in sign in page
const UserBar = ({onChange, error, ...rest}) => {
    return (
        <div className='inputBox'>
            <input className={`'text-input' ${error ? 'text-input-error' : ''}`} 
            onChange={(e) => onChange(e)} 
            {...rest}
        />
        {
            error &&
                <p className='error-text'>{error}</p>
        }
        </div>
    );
}

export default UserBar;