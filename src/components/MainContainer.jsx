import VdoTitle from "./VdoTitle";
import VdoBg from "./VdoBg";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) {
    return null; // Render nothing if movies are not available yet
  }

  const mainMovie = movies[0]; // Assuming movies is an array and taking the first movie
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VdoTitle title={original_title} overview={overview} />
      <VdoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
