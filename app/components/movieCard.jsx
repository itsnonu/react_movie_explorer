import React from "react";

const IMG_BASE = "https://image.tmdb.org/t/p/w500"; /* Images for movie poster */

function MovieCard({movie}) {
    return (
        <div className = "movie_card">
            <img src = {`${IMG_BASE}${movie.poster_path}`} alt = {`${movie.title} poster`}/>
            <h3>${movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
}

export default MovieCard;