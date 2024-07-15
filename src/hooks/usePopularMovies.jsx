import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CALL } from "../utils/constans";
import { popularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const playingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_CALL
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(popularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && playingMovies();
  }, []);
};
export default usePopularMovies;
