import React from 'react';
const Component = React.Component;
import ReactDOM from 'react-dom';

import { callBackBert } from '../../utilities';


class Signup extends Component {


    // use meteor blaze to render login buttons
    componentDidMount() {
        console.log('ComboSignin DidMount.');
    }

    handleSubmit(event)
    {
        event.preventDefault();

        const email = ReactDOM.findDOMNode(this.refs.email).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        const confirmpassword = ReactDOM.findDOMNode(this.refs.confirmpassword).value;

        if (password != confirmpassword)
        {
            Bert.alert('The two passwords entered are different. Please try again.', 'danger');
        }
        else
        {
            const userData = {
                email: email,
                password: password,
                profile: {
                    contact: [],
                    avails: [],
                    role: undefined     // one of "candidate", "interviewer" for now (could be both, or extended to "recruiter", "employer" later)
                }
            };

            Accounts.createUser(
                userData,
                callBackBert(() =>
                    Meteor.call('sendVerificationEmails',
                        callBackBert('Verification email sent.'))));
        }
    }

    // just render a placeholder container that will be filled in
    render() {
        return (
            <div className="signup">

                <h4>Register</h4>

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" ref="email" className="form-control" placeholder="Email Address" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" ref="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" ref="confirmpassword" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-success btn-block" value="Sign Up" />
                    </div>

                </form>

            </div>
        );
    }
}

export default Signup;