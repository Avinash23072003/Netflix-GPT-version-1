import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="md:-mt-52 relative z-30 ">
        <MoviesList
          className="p-90"
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MoviesList>
        <MoviesList
          title={"Trending"}
          movies={movies.trendingMovies}
        ></MoviesList>
        <MoviesList
          title={"Popular"}
          movies={movies.popularMovies}
        ></MoviesList>
        <MoviesList
          title={"Upcoming movies"}
          movies={movies.upcomingMovies}
        ></MoviesList>
        <MoviesList
          title={"Horror"}
          movies={movies.nowPlayingMovies}
        ></MoviesList>
      </div>
    </div>
  );
};
export default SecondaryContainer;
