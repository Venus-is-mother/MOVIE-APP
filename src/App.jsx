import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief steals secrets through dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/I/51s+eT3mPzL._AC_.jpg",
      rating: 9,
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the world is a simulated reality.",
      posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      rating: 10,
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/71nQZFS+vOL._AC_SY679_.jpg",
      rating: 8,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 My Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
