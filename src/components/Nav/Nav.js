import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {setUser} from "../../ducks/actionCreator"
import {withRouter} from "react-router-dom"

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="new">
          <button>New Post</button>
        </Link>
        <Link to="/">
          <button>Log Out</button>
        </Link>
        <img src={this.props.profilePic} alt="Profile Pic" />
        <h4>{this.props.username}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profilePic: state.profilePic,
    username: state.username,
  };
}

export default connect(mapStateToProps, {setUser})(withRouter(Nav));
