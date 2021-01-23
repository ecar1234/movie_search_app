import React from 'react';
import './Movie.css'

function Movie(props) {
    const data = props.location.state;
    return (
        <div className="choose_container">
            <div className="choose_movie">
                <img src={data.poster} alt={data.title} title={data.title} />
                <div className="choose_movie_data">
                    <h3 className="choose_movie_title" >{data.title}</h3>
                    <h5 className="choose_movie_year">{data.year}</h5>
                    <ul className="choose_movie_genres">
                        {data.genres.map((genre, index) => (
                            <li key={index} className="choose_genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <span className="choose_movie_summary">{data.summary}</span>
                </div>
            </div>
        </div>
        
    );
}

export default Movie;