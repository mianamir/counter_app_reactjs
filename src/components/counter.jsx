import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    image_url: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.get_badge_classes()}>{this.format_count()}</span>
        <button className="btn btn-secondary btn-sm">Increement</button>
        {this.renderTags()};
      </React.Fragment>
    );
  } // render ends

  get_badge_classes() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  format_count() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} // Counter componenet ends

export default Counter;
