import React, { Component } from "react";

class LoginForm extends Component {

    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input value={this.state.account.username}
                            name="username"
                            type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                            name="password"
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
