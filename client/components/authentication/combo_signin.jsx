import React from 'react';
const Component = React.Component;
const PropTypes = React.PropTypes;
import { LoginBox } from 'meteor/universe:accounts-ui';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import SignupPage from './signup';
import Signin from './signin';
import ResetPassword from './reset_password';


class ComboSignin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: "signin"  // one of "signin, signup, resetpassword"
        };
    }

    onClickSignup()
    {
        this.setState({step: "signup"});
    }

    onClickForgot()
    {
        this.setState({step: "resetpassword"});
    }

    render() {

        // redirect to homepage if already signed in
        if (this.props.currentUser)
        {
            Bert.alert('You are already signed in. Redirecting...', 'success');
            browserHistory.push('/');
            return <div></div>;
        }
        else
        {
            switch (this.state.step) {
                case "signin":
                    return (<div className="combo-signin">
                        <Signin />
                        <a href="#" className="pull-left signup-link" onClick={this.onClickSignup.bind(this)}>Sign
                            up</a>
                        <a href="#" className="pull-right forgot-link" onClick={this.onClickForgot.bind(this)}>Forgot
                            password</a>
                    </div>);
                case "signup":
                    return <SignupPage />;
                case "resetpassword":
                    return <ResetPassword />;
            }
        }
    }
}

ComboSignin.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(
    () => { return { currentUser: Meteor.user() }; }
    , ComboSignin
);