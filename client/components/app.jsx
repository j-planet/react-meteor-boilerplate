import React, { Component, PropTypes } from 'react';
import NavBar from './navbar';



class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {
        return (
            <div>
                <NavBar />
                <div className="content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default App;