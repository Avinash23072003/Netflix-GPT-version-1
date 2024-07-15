import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CALL } from "../utils/constans";
import { trendingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trending = useSelector((store) => store.movies.trendingMovies);
  const newtrendingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_CALL
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(trendingMovies(json.results));
  };
  useEffect(() => {
    !trending && newtrendingmovies();
  }, []);
};
export default useTrendingMovies;
