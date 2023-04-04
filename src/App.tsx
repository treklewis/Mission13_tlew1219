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
        <Link to="/">Home</Link>
        <Link to="/podcast">Movie Podcast</Link>
        <Link to="/movies">Movies</Link>
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
