import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBackToHome from '../components/ButtonBackToHome';


const API_KEY = '2cc45cc3';

class Detail extends Component {
    
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
        })
    }

    state = { movie: {} }

    componentDidMount(){
        const { id } = this.props.match.params
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${ id }`)
        .then(res => res.json())
        .then(movie => {
            this.setState({movie})
        })
    }

    render() {
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <div>
                <ButtonBackToHome/>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}

export default Detail;