import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
    this.register = this.register.bind(this)
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  register() {
    const { username, password } = this.state;

    axios
      .post("/auth/register", { username, password })
      .then(() => {
        this.setState({
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        this.setState({
          username: "",
          password: "",
        });
        alert(err.response.request.response);
      });
  }

  render() {
    console.log(this.props.location);
    return (
      <div>
        <input
          placeholder="Username"
          onChange={(e) => this.handleUsername(e)}
        />
        <input
          placeholder="Password"
          onChange={(e) => this.handlePassword(e)}
        />
        <button>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}
