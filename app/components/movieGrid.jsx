import React from "react";
import MovieCard from "./movieCard";

function movieGrid({movies}) {
    return (
        <div className="movie_grid">
            {movies.map((movie) => (
                <MovieCard key = {movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default movieGrid;