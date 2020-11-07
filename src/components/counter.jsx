import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    image_url: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.image_url} alt="" /> */}
        <span style={this.styles} className="badge badge-primary m-2">
          {this.format_count()}
        </span>
        <button className="btn btn-secondary btn-sm">Increement</button>
      </React.Fragment>
    );
  } // render ends

  format_count() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} // Counter componenet ends

export default Counter;
