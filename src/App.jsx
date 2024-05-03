import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage';
import MovieDetails from './components/MovieDetails';

import movies from "./data/movies.json";
import AddMovie from './components/AddMovie';

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const createMovie = (newMovie) => {

    const movieIds = moviesToDisplay.map(movie => movie.id);
    const maxId = Math.max(...movieIds); 
    const nextId = maxId + 1;

    const newMovieWithId = {
      ...newMovie,
      id: nextId
    }

    const newList = [newMovieWithId, ...moviesToDisplay];

    setMoviesToDisplay(newList);
  }


  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter(movie => movie.id !== movieId);
    setMoviesToDisplay(newList);
  }


  return (
    <>
    
      <Header numberOfMovies={moviesToDisplay.length} />

      <AddMovie callbackToCreate={createMovie} />

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/about" element={<p>this is the about page</p>} />
        <Route path="/contact" element={<p>this is the contact page</p>} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay} />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
