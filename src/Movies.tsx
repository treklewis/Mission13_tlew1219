import movieData from './MovieData.json';

const md = movieData.MovieData;

function MovieList() {
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Category</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {md.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Category}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
