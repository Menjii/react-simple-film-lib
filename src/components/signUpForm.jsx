import React, { Component } from "react";
const axios = require('axios');

class signUpForm extends Component {

    state = {
        account: {
            name: "",
            email: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    }; 

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if(account.name.trim() === '') {
            errors.name = 'Name is required';
        }
        if(account.password.trim() === '') {
            errors.password = 'Password is required';
        }
        if(account.email.trim() === '') {
            errors.email = 'Email is required';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log(this.state)

        axios ({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: this.state.account.name,
                password: this.state.account.password,
                email: this.state.account.email
            },
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            this.setState({errors: errors || {}});
            console.log(error);
        })
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    }; 

    render() {
        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value={this.state.account.name}
                            name="name"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                            placeholder="Name" />
                            {this.state.errors.name &&
                       <div className="alert alert-danger">{this.state.errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email</label>
                        <input value={this.state.account.email}
                            name="email"
                            onChange={this.handleChange}
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="E-mail" />
                            {this.state.errors.email &&
                       <div className="alert alert-danger">{this.state.errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password" />
                            {this.state.errors.password &&
                       <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Register</button>
                </form>
            </div>
        );
    }
}

export default signUpForm;
