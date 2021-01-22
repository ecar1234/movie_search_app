import React from 'react';
import propTypes from 'prop-types'
import "./Movies.css"
import { Link, Route, Switch } from 'react-router-dom';

function Movie({ year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link to={`/movie/${title}`}>
                <img src={poster} alt={title} title={title} />
            </Link>
            <div className="movie_data">
                <Link to={`/movie/${title}`} >
                    <h3 className="movie_title" >{title}</h3>
                </Link>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres_genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <span className="movie_summary">{summary.slice(0, 180)}...</span>
                <Link to={`/movie/${title}`} >[더 보기]</Link>
           </div>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movie;