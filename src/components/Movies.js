import React from 'react';
import propTypes from 'prop-types'
import "./Movies.css"
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster, genres}) {
    return (
        <Link 
            to={{
                pathname :`/movie/${title}`,
                state : {
                    id,
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }    
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title" >{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <span className="movie_summary">{summary.slice(0, 120)}...</span>
                    <span className="open_view">[더 보기]</span>
                </div>
            </div>
        </Link>
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