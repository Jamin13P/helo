import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../ducks/actionCreator";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
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
      .then((res) => {
        this.props.setUser(res.data.id, res.data.username, res.profilePic);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        this.setState({
          username: this.state.username,
          password: "",
        });
        alert(err);
      });
  }

  login() {
    const { username, password } = this.state;

    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        this.props.setUser(res.data.id, res.data.username, res.profilePic);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Username"
          onChange={(e) => this.handleUsername(e)}
          value={this.state.username}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => this.handlePassword(e)}
          value={this.state.password}
          type="password"
        />
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default connect(null, { setUser })(Auth);
