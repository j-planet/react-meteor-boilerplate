import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';



class UserProfile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.currentUser) return <div>No user</div>;

        return (
            <div>
                <h3>User Profile </h3>
                Email: { this.props.currentUser.emails[0].address }
            </div>
        );
    }
}

UserProfile.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(
    () => {return {currentUser: Meteor.currentUser()};}
    , UserProfile
);