import { Component } from "react";

import "./searchbox.css";

class Searchbox extends Component {
  render() {
    return (
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default Searchbox;
