import React from 'react';
const Component = React.Component;
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';


class ResetPasswordToken extends Component {

    componentWillMount() {
        console.log('ResetPasswordToken willMount.');
    }

    resetPassword(event)
    {
        event.preventDefault();

        const token = this.props.params.token;
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        const confirmedPassword = ReactDOM.findDOMNode(this.refs.confirmpassword).value;

        if (password != confirmedPassword)
        {
            Bert.alert('The two passwords entered are different. Please try again.', 'danger');
        }
        else
        {
            Accounts.resetPassword
            (
                token,
                password,
                (error) =>
                {
                    if (error) {
                        Bert.alert(error.reason, 'danger');
                    }
                    else
                    {
                        Bert.alert('Password reset successful. Thank you.', 'success');
                        browserHistory.push('/');   // re-direct to the homepage
                    }
                });
        }
    }
// beautyofdeduction@gmail.com
    render() {


        return (
            <div className="reset-password container">
                <h4>Reset Password</h4>

                <form onSubmit={this.resetPassword.bind(this)}>

                    <div className="form-group row">
                        <label className="col-form-label col-xs-5">New password</label>
                        <div className="col-xs-7">
                            <input type="password" ref="password" className="form-control" placeholder="enter password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-xs-5">Confirm new password</label>
                        <div className="col-xs-7">
                            <input type="password" ref="confirmpassword" className="form-control" placeholder="enter password again" />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-success btn-block" value="Reset password" />
                    </div>

                </form>
            </div>
        );
    }
}

ResetPasswordToken.propTypes = {};

export default ResetPasswordToken;