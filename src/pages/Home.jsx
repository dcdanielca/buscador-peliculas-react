import React, { Component } from "react";
import { Title } from "../components/Title";
import SearchForm   from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

class Home extends Component {
    
    state = { usedSearch: false, results: []}

    _handleResults = (results) => {
        this.setState({results, usedSearch: true})
      }
    
      _renderResults(){
        return this.state.results.length === 0
        ? <p>Sorry! Results not found 
        </p>
        : <MoviesList movies={this.state.results}/>
    
      }

  render() {
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <div>
            <small>Use the form to search a movie </small>
            <br/>
            <small> Learn React JS, <a href="https://www.udemy.com/course/aprendiendo-react">aquí</a> </small>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
