import React from "react";
import MovieCard from "./movieCard";

function MovieGrid({movies}) {
    return (
        <div className="movie_grid">
            {movies.map((movie) => (
                <MovieCard key = {movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieGrid;