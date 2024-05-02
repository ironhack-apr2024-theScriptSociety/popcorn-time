import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage';
import MovieDetails from './components/MovieDetails';

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter(movie => movie.id !== movieId);
    setMoviesToDisplay(newList);
  }


  return (
    <>
    
      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/about" element={<p>this is the about page</p>} />
        <Route path="/contact" element={<p>this is the contact page</p>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
