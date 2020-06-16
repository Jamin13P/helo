import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios"

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      posts: [],
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

  getPosts() {
    axios
    .get("/api/posts")
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    let posts = this.state.posts.map(elem => {
      return (
        <div key={elem.id} onClick={() => this.props.history.push(`/posts/${elem.id}`)}>
          <div>
            <h2>{elem.title}</h2>
            <div>
              <p>{elem.content}</p>
            </div>
            <div>
              <h5>Author: {elem.username}</h5>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <input
          placeholder="What are tyou lookng for?"
          onChange={(e) => this.handleInput(e)}
          value={this.state.input}
        />
        <button>Search</button>
        <button onClick={() => this.handleReset()}>Reset</button>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Dashboard)
