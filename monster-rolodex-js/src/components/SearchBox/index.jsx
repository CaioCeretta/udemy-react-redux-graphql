import { Component } from "react";
import './styles.css'

export class SearchBox extends Component {

  render () {
    return (
      <input
        type="text"
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.place}
        onChange={this.props.onChangeHandler}
      />
    )
  }

}