import React from 'react';
const Component = React.Component;
const PropTypes = React.PropTypes;
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';


class LogInButtons extends Component {

    constructor(props) {
        super(props);
    }


    // use meteor blaze to render login buttons
    componentDidMount() {
        console.log('AccountsUIWrapper DidMount.');

        this.view = Blaze.renderWithData(
            Template.loginButtons,
            { align: "right" },
            ReactDOM.findDOMNode(this.refs.container));
    }

    // clean up Blaze view
    componentWillUnMount() {
        console.log('AccountsUIWrapper WillUnMount.');

        Blaze.remove(this.view);
    }

    // just render a placeholder container that will be filled in
    render() {
        return <span ref="container" />;
    }
}

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Navbar willMount.');
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top" id="header">
                <button className="navbar-toggler hidden-sm-up pull-right"
                        type="button"
                        data-toggle="collapse" data-target="#navigationBar">
                    &#9776;
                </button>

                <Link to="/" className="navbar-brand pull-left">CarpStreet</Link>

                <div className="collapse navbar-toggleable-xs" id="navigationBar">
                    <ul className="nav navbar-nav pull-right">
                        <li className="nav-item">
                            <a className="nav-link" href="#social">CONNECT</a>
                        </li>
                        {
                            this.props.currentUser ?
                                <li className="nav-item">
                                    <LogInButtons/>
                                </li>
                                :''
                        }

                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(
    () => {
        return { currentUser: Meteor.user() };
    },
    Navbar
)