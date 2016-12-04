import React from 'react';
const Component = React.Component;
import ReactDOM from 'react-dom';


class ResetPassword extends Component {

    constructor(props) {
        super(props);
    }

    sendEmail(event)
    {
        event.preventDefault();

        const email = ReactDOM.findDOMNode(this.refs.email).value;

        Meteor.call('sendResetPasswordEmail', email);
        Bert.alert('Check your inbox to see if this was a valid email address.', 'success');
    }

    componentWillMount() {
        console.log('ResetPassword willMount.');
    }

    render() {
        return (
            <div>
                <h4>Reset Password</h4>

                <form onSubmit={this.sendEmail.bind(this)}>

                    <div className="form-group">
                        <input type="email" ref="email" className="form-control" placeholder="Email Address" />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-success btn-block" value="Send reset password email" />
                    </div>

                </form>
            </div>
        );
    }
}

ResetPassword.propTypes = {};

export default ResetPassword;