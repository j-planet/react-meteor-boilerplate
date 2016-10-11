import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {

        return (
            <div>Hello from App.</div>
        );
    }
}

App.propTypes = {
    someArray: PropTypes.array.isRequired,
    someObject: PropTypes.object
};

export default createContainer(
    () =>
    {
        Meteor.subscribe('someCollection');

        // these become props in the component
        return {
            someArray: [],
            someObject: null
        };
    },
    App
);