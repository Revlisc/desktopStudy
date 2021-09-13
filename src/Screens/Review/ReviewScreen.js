import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return (
        set: state.userData.setName.questions
    )
}

const ReviewScreen = () => {
    return (
        <div>

        </div>
    )
}

export default connect(mapStateToProps)(ReviewScreen);