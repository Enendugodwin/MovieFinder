import React from 'react';
import { useEffect,useState } from 'react';
import '../src/App.css';
import SearchIcon from '../src/search.svg';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com?apikey=21c03aff";


function App() {
  const [Movies, setMovies] = useState([]);
  const[searchTerm,setsearchTerm] =useState('');
  const SearchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  const Movie1 = {
    "Title": "Superman II",
    "Year": "1980",
    "imdbID": "tt0081573",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  };

  useEffect(() => {
    SearchMovie("avengers");

  }, []);


  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => SearchMovie(searchTerm)} />

      </div>
      {
        Movies?.length > 0
        ?(
          <div className='container'>
            {Movies.map((movie) =>(
              <MovieCard movie={movie} />
            ))}
        </div>

        ) :(
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
     
    </div>
  );
}

export default App;
