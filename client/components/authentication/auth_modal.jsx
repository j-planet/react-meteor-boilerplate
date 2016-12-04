import React from 'react';
const Component = React.Component;
const PropTypes = React.PropTypes;
import Modal from 'react-modal';
import { createContainer } from 'meteor/react-meteor-data';

import ComboSignin from './combo_signin';
import VerifyEmail from './verify_email';


class AuthModal extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isOpen: !this.isVerified() || this.props.openWhenVerified
        };

        this.styles = {

            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                overflow              : 'auto',
                transform             : 'translate(-50%, -50%)',
            },

            overlay: {
                backgroundColor       : `rgba(255, 255, 255, ${this.props.overlayOpaqueness || 0.75})`
            }
        };
    }

    isVerified()
    {
        return (
            this.props.currentUser
            && this.props.currentUser.emails.every((email) => email.verified));
    }

    tryToCloseNoUser()
    {
        console.log('tryToCloseNoUser: close requested.');

        if (this.props.enforceSignin) {
            Bert.alert('Please sign in.', 'danger');
        }
        else
        {
            this.close();
        }
    }

    tryToCloseNoEmailVerification()
    {
        console.log('tryToCloseNoEmailVerification: close requested.');

        if (this.props.enforceVerifyEmail)
        {
            Bert.alert('Please verify email.', 'danger');
        }
        else
        {
            this.close();
        }
    }

    tryToCloseVerified()
    {
        console.log('tryToCloseVerified: close requested.');
        this.close();
    }

    close()
    {
        this.setState({isOpen: false});
    }

    render()
    {
        var requestCloseFunc, content, isOpen;

        if (!this.props.currentUser)    // not signed in
        {
            if (this.props.enforceSignin) isOpen = true;
            requestCloseFunc = this.tryToCloseNoUser.bind(this);
            content = <ComboSignin />;
        }
        else if (!this.isVerified())    // signed in but not verified
        {
            if (this.props.enforceVerifyEmail) isOpen = true;
            requestCloseFunc = this.tryToCloseNoEmailVerification.bind(this);
            content = <VerifyEmail />
        }
        else    // signed in AND verified :)
        {
            isOpen = this.props.openWhenVerified;
            requestCloseFunc = this.tryToCloseVerified.bind(this);
            content = <h2>Hi, welcome.</h2>;
        }

        return (
            <Modal
                isOpen={ isOpen }
                onRequestClose={requestCloseFunc}
                style={this.styles}
            >
                { this.props.title ? <h2 className="auth-title">{this.props.title}</h2> : '' }
                {content}
            </Modal>
        );
    }
}

AuthModal.propTypes = {
    currentUser: PropTypes.object,
    openWhenVerified: PropTypes.bool.isRequired,    // whether to open the modal when signed in and fully verified
    enforceSignin: PropTypes.bool.isRequired,       // if true the user cannot close the modal until signed in
    enforceVerifyEmail: PropTypes.bool.isRequired,  // if true the user cannot close the modal until email verification
    title: PropTypes.string,
    overlayOpaqueness: PropTypes.number           // 0.0 ~ 1.0. 0.75 by default.
};

export default createContainer(
    () => {
        return { currentUser: Meteor.user() };
    },
    AuthModal
);
