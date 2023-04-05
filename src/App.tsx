import React from 'react';
import './App.css';
import TopBanner from './Home';
import MyPodcasts from './MyPodcasts';
import MovieList from './Movies';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <p className="navbar-brand">Joel's Movies</p>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/podcast">
                  My Podcast
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" Component={TopBanner} />
        <Route path="/podcast" Component={MyPodcasts} />
        <Route path="/movies" Component={MovieList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
