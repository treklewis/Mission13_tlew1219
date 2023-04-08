import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovies(temp);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>
        <br />
        <h3>Movie Collection</h3>
        <br />
      </div>
      <table className="table table-striped table-light table-hover">
        <thead className="">
          <tr>
            <th>Movie ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.movieId}>
              <td>{m.movieId}</td>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo} </td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
