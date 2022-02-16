import './style.css';
import getMovies from './modules/fetchMovies.js';
import displayMovies from './modules/displayMovies.js';
import modalHandle from './modules/modalElements'

getMovies().then((movieList) => {
  displayMovies(movieList);
  modalHandle(movieList)
});

