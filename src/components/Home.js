import axios from 'axios';
import React, { Component } from 'react';
import Movies from './Movies'
import './Home.css'



class Home extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = 
    await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    this.setState({
      movies: movies.data.data.movies, isLoading: false
    })
  }
  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (  
        <div className="container">
        {isLoading ? (
            <div className="loader">
                <span className="loader_text">
                    Loading...
                </span>
            </div> 
        ) : (
        <div>
            <div className="search_input_wrap">
                <span>영화 검색 : </span>
                <input className="search_input"/>
                <button className="search_button" autoFocus>Search</button>
            </div>

            <div className="movies">
                {movies.map(movie => (
                <Movies 
                key={movie.id} 
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} 
                />
            ))}
            </div>
        </div>
        )}
        </div>
    );
}
}

export default Home;