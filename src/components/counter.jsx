import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="some image" />
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={this.updateCounter}
          className="btn btn-secondary btn-small"
        >
          increament
        </button>
      </div>
    );
  }
  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }

  updateCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
