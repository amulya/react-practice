import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value, // allows you to initialize count from Counters component
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

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
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  setClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count <= 0 ? "warning" : "primary";
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
