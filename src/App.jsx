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

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");


  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter(movie => movie.id !== movieId);
    setMoviesToDisplay(newList);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      title: title,
      rating: rating
    }

    // moviesToDisplay.push(newMovie); // NEVER, NEVER, modify state directly !!

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    // Clear form
    setTitle("");
    setRating("");

  }


  return (
    <>
    
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <h2>Create your own movie</h2>

        <form onSubmit={handleSubmit} >

          <label>Title:
            <input 
              name='title' 
              type="text" 
              required
              placeholder='Harry Potter' 
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <label>Rating:
            <input
              name='rating'
              type="number"
              required
              min={1}
              max={10}
              placeholder='10'
              value={rating}
              onChange={(e) => { setRating(e.target.value) }}
            />
          </label>

          <p><button>Create</button></p>
        </form>

      </section>

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
