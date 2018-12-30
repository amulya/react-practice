import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  render() {
    let classes = this.setClass();
    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.increment.bind(this)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={this.decrement.bind(this)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  setClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }));
  }
}

export default Counter;
