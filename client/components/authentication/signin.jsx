import React from 'react';
const Component = React.Component;
import ReactDOM from 'react-dom';


class Signin extends Component {


    // use meteor blaze to render login buttons
    componentDidMount() {
        console.log('ComboSignin DidMount.');
    }

    handleSubmit(event)
    {
        event.preventDefault();

        const email= ReactDOM.findDOMNode(this.refs.email).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;

        Meteor.loginWithPassword(
            email,
            password,
            (error) => {
                if (error) Bert.alert('Login failed. Please try again.', 'danger');
            }
        );
    }

// just render a placeholder container that will be filled in
    render() {
        return (
            <div className="signin">
                <h4>Log in</h4>

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" ref="email" className="form-control" placeholder="Email Address" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" ref="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-success btn-block" value="Sign in" />
                    </div>

                </form>

            </div>
        );
    }
}

export default Signin;