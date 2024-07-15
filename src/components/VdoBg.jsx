import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VdoBg = ({ movieId }) => {
  const trailerVdo = useSelector((store) => store.movies?.trailerVdo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video  &autoplay=1"
        src={
          "https://www.youtube.com/embed/" +
          trailerVdo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
export default VdoBg;
