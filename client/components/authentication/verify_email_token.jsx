import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class VerifyEmailToken extends Component {

    componentWillMount() {
        console.log('VerifyEmailToken willMount.');
    }

    render() {

        const token = this.props.params.token;

        // Accounts.verifyEmail also logs the user in. :)
        Accounts.verifyEmail(token, ( error ) => {
            if (error)
            {
                Bert.alert( error.reason, 'danger');
            }
            else
            {
                Bert.alert('Email verified! Thanks!', 'success');

                // re-direct to the homepage
                browserHistory.push('/');
            }
        });

        return <div></div>;
    }
}

export default VerifyEmailToken;