function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <img src={posterURL} alt={title} style={{ width: "100%" }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>⭐ Rating: {rating}/10</p>
    </div>
  );
}

export default MovieCard;
