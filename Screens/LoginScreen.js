import React, {Component} from 'react';

class LoginScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <div>
                <h1>Login Screen!</h1>
                <div >
                    <Button
                        title='Go to App!'
                        onPress={() => navigate('Home')}
                    />
                </div>
               
            </div>
        )
    }
}

export default LoginScreen;