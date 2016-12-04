import React from 'react';
const Component = React.Component;
const PropTypes = React.PropTypes;
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import { callBackBert } from '../../utilities';


class VerifyEmail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('VerifyEmail willMount.');
    }

    resendVerificationLink()
    {
        Meteor.call(
            'sendVerificationEmails',

            (error, emails) =>
            {
                if (error) Bert.alert(error.reason, 'danger');
                else Bert.alert(`Verification sent to ${ emails.join(',')}! Please check your email.`, 'success');
            }
        );
    }

    // returns a list of unverified email addresses. empty list of all have been verified.
    findUnverifiedEmails()
    {
        return this.props.currentUser.emails.filter(email => !email.verified).map(email => email.address);
    }

    render()
    {
        if (this.props.currentUser)
        {
            const unverifiedEmails = this.findUnverifiedEmails();

            if (unverifiedEmails.length == 0)
            {
                return <h2>Thank you for verifying your email.</h2>;
            }
            else
            {
                return (
                    <div>
                        <h2>Please verify your email(s):</h2>
                        <ul>
                            {
                                unverifiedEmails.map(email => <li key={email}>{email}</li>)
                            }
                        </ul>
                        <a href="#" onClick={this.resendVerificationLink.bind(this)}>Resend verification email(s).</a>
                    </div>
                );
            }
        }
        else
        {
            return (
                <p>Please <Link to="login"> click here </Link> to login in first.
                </p>
            )
        }
    }
}

VerifyEmail.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer (
    () => {
        return { currentUser: Meteor.user() };
    },
    VerifyEmail
)