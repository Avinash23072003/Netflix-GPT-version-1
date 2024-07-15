import { MOVIE_CDN_URL } from "../utils/constans";

const MovieCards = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className=" w-24 md:w-48 gap-4 pr-6 pt-6">
      <img src={MOVIE_CDN_URL + poster} />
    </div>
  );
};
export default MovieCards;
