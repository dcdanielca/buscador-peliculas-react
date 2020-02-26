import React, { Component } from "react";

const API_KEY = '2cc45cc3';

class SearchForm extends Component {

  state = {
    inputMovie: ""
  };

  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
        .then(res => res.json())
        .then(results => {
            const {Search = [], totaResults = 0 } = results
            this.props.onResults(Search)
        })
  };

  render() {
    return (
    <form onSubmit={this._handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Find a movie"
            onChange={this._handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
    );
  }
}

export default SearchForm;
