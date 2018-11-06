import React, { Component } from "react";

export default class SearchInput extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.elements.id.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Post Id </label>
        <input name="id" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
