import React from 'react'
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        console.log(this.state.email)
        console.log(this.state.password)
        var that = this;
        event.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(function (response) {
            if (response.ok) {
                alert('ok');

                return response.json();
            }
            else {
                alert('Unauthorized or wrong passwordd');
                //throw new Error("Unauthorized or wrong password")
            }
        }).then(function (responseBody) {
            console.log(responseBody)
            localStorage.setItem("token", responseBody.token);
            that.props.history.push("/");
        }).catch(function (error) {
            localStorage.clear();
            alert('rejected');
            console.log("rejected: ", error);
        });

    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login
