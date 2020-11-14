import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    image_url: "https://picsum.photos/200",
    tags: [],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {/* To iterate lists use map and arrow fun */}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increement</button>
        <br />
        {/* In JS when we use boolean logical operator 
        && / || / ! operators then concatinating
        boolean with string will rsult in string 
        becuase this will be truthy statement
        */}
        {this.state.tags.length === 0 && "Would you please a new tag!"}
        {this.renderTags()};
      </React.Fragment>
    );
  } // render ends

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} // Counter componenet ends

export default Counter;
