import React, { Component } from "react";

class signUpForm extends Component {

    state = {
        account: {
            login: "",
            username: "",
            email: "",
            password: ""
        },
        errors: {}
    };

    render() {
        return (
            <div>
                <h1>Registration</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Login</label>
                        <input value={this.state.account.login}
                            name="username"
                            type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            placeholder="Login" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Username</label>
                        <input value={this.state.account.username}
                            name="username"
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email</label>
                        <input value={this.state.account.email}
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="E-mail" />
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
                    <button type="submit" className="btn btn-primary my-2">Register</button>
                </form>
            </div>
        );
    }
}

export default signUpForm;
