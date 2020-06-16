import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      posts: [],
      checkbox: true,
    };
  }

  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSearch() {}

  handleReset() {
    this.setState({
      input: "",
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="What are tyou lookng for?"
          onChange={(e) => this.handleInput(e)}
          value={this.state.input}
        />
        <button>Search</button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}
