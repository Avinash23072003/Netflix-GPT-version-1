import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constans";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} />
      </div>
      <div className="">
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestion></GptMovieSuggestion>
      </div>
    </div>
  );
};

export default GptSearch;
