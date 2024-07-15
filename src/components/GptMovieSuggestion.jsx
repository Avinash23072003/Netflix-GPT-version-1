import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResult } = useSelector((store) => store.gpt);
  if (!movieNames) return <h1>Loading...</h1>;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-50">
      <h1>{movieNames[0]}</h1>
      {movieNames.map((movieName, index) => (
        <MoviesList
          key={movieName}
          title={movieName}
          movies={movieResult[index]}
        ></MoviesList>
      ))}
    </div>
  );
};
export default GptMovieSuggestion;
