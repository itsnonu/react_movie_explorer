"use client";

import React, {useState, useEffect} from "react";
import './globals.css';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Pagination from './components/Pagination';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      let url = "";
      const query = searchQuery.trim();
      if (query == "") {
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
      } else {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${currentPage}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        console.error("Failed to fetch movies.", error);
      }
    };
    fetchMovies();
  }, [currentPage, searchQuery]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0,0);
  };

  const sortedMovies = [...movies];
  if (sortOption === "date_asc") {
    sortedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } else if (sortOption === "date_desc") {
        sortedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortOption === "rating_asc") {
        sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
    } else if (sortOption === "rating_desc") {
        sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    }

  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        searchChange={handleSearchChange}
        sortOption={sortOption}
        sortChange={setSortOption}
      />
      <main>
        <MovieGrid movies = {sortedMovies}/>
      </main>
      <Pagination
        currentPage = {currentPage}
        totalPages = {totalPages}
        pageChange = {handlePageChange}
      />
    </div>
  );
}