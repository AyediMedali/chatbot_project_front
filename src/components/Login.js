import React from 'react'
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "./Login.css";
import storage from 'node-sessionstorage'
import {Redirect, Router} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            err: ''
        };
    }

    componentDidMount() {
        console.log(localStorage.getItem('token') + " login")
        if (localStorage.getItem('token') !== '') {
            this.props.history.push('/');
        }

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
                //   alert('ok');
                console.log('ok')
                return response.json();
            } else {
            //    alert('Unauthorized or wrong password');
                that.setState({err: 'Unauthorized or wrong password'})
                //throw new Error("Unauthorized or wrong password")
            }
        }).then(function (responseBody) {
            console.log(responseBody.user)

            localStorage.setItem('user', responseBody.user)
            localStorage.setItem('token', responseBody.token)
            localStorage.setItem('id', responseBody.user._id)
            localStorage.setItem('firstname', responseBody.user.first_name)
            //
            that.props.history.push('/');
            window.location.reload();

        }).catch(function (error) {
            //  alert('rejected');
            console.log("rejected: ", error);
        });

    }
    testErr (){
        console.log(this.state.err)
        const divStyle = {
            width: '29%',
         margin: '0 auto'
        }
        if (this.state.err!== '')
        {
            return  <div style={divStyle} className="alert alert-danger">
                    <strong>Unauthorized: </strong> {this.state.err }
                </div>



        }
    }

    render() {
        // const err = this.state.err;

        const btnStyle = {
            background: '#B22222',
            color: 'white',
        };
        return (
            <div className="Login">
                {this.testErr()}
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

                        variant="outline-danger"
                        style={btnStyle}
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
