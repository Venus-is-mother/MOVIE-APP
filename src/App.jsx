import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief steals secrets through dream-sharing technology. He enters dreams to manipulate them.",
      posterURL: "https://m.media-amazon.com/images/I/51s+eT3mPzL._AC_.jpg",
      rating: 9,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the world is a simulated reality controlled by AI.",
      posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      rating: 10,
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole to save humanity.",
      posterURL: "https://m.media-amazon.com/images/I/71nQZFS+vOL._AC_SY679_.jpg",
      rating: 8,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                titleFilter={titleFilter}
                setTitleFilter={setTitleFilter}
                rateFilter={rateFilter}
                setRateFilter={setRateFilter}
              />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
