import React, { Component } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }
    render() {
        const { movies } = this.props
        return (
            <div className="MoviesList">
                {
                movies.map(movie => {
                   return (
                   <div key={movie.imdbID + Math.random()} className="MoviesList-item">
                       <Movie
                       id={movie.imdbID}
                       title={movie.Title}
                       year={movie.Year}
                       poster={movie.Poster}
                       />              
                    </div> 
                   )   
                })
                }            
            </div>
        )     
    }
}

export default MoviesList;