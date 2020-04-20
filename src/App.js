import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    fetch("http://api.icndb.com/jokes/random")
      .then(response => response.json())
      .then(json => this.setState({
        data: json.value.joke
      }))
  }

  render() {

    console.log("inside render")
    return (
      <div className="joke-container">
      <h2>Chuck Norris Joke Generator</h2>
        <p>{this.state.data}</p>
        <button className="button" onClick={this.componentDidMount}>Click me</button>
      </div>
    )
  }
}

export default App;


