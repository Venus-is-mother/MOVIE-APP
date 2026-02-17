import { Link } from "react-router-dom";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <Link to={`/movie/${title}`}>
        <img src={posterURL} alt={title} style={{ width: "100%" }} />
        <h2>{title}</h2>
        <p>⭐ Rating: {rating}/10</p>
      </Link>
    </div>
  );
}

export default MovieCard;
