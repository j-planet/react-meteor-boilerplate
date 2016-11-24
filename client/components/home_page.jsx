import React, {Component} from 'react';


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
            </div>
        );
    }
}

export default HomePage;