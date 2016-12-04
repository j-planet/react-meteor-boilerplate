import React from 'react';
const Component = React.Component;
const PropTypes = React.PropTypes;
import { createContainer } from 'meteor/react-meteor-data';


class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('HomePage willMount.');
    }

    render() {
        return (
            <div>
                This is the homepage.
            </div>
        );
    }
}

HomePage.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(
    () => {
        return { currentUser: Meteor.user() };
    },
    HomePage
);