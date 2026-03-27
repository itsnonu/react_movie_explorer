"use client";

import React, {useState, useEffect} from "react";
import './globals.css';
import header from './components/header';
import movieGrid from './components/movieGrid';
import pagination from './components/pagination';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {

}