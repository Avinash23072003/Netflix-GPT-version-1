import { useDispatch, useSelector } from "react-redux";
import { API_CALL } from "../utils/constans";
import { trailerVdoActions } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVdo);
  const TrailerApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_CALL
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(trailerVdoActions(trailer));
  };

  useEffect(() => {
    !trailer && TrailerApi();
  }, []);
};

export default useMovieTrailer;
