import { useParams, Link } from "react-router-dom";

function MovieDetail({ movies }) {
  const { title } = useParams(); // get title from URL
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>⭐ Rating: {movie.rating}/10</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
