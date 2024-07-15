import { useRef } from "react";
import { BG_URL } from "../utils/constans";
import languageConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_CALL } from "../utils/constans";
import { addgptMovieResult } from "../utils/gptSearchSlice";
import { GEMINI_API } from "../utils/constans";
const GptSearchBar = () => {
  const languageSelector = useSelector((store) => store.config.initialLang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const tmdbApi = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_CALL
    );
    const json = await data.json();

    return json.results;
  };

  //GPT CALL
  const gptSearchBtn = async () => {
    console.log(searchText.current.value);
    const queryText =
      "Act as a movie recommendation system and suggest  movies for the queries " +
      searchText.current.value;

    //Make gpt api call
    const GptCall = await axios({
      url: GEMINI_API,
      method: "post",
      data: {
        contents: [{ parts: [{ text: queryText }] }],
      },
    });
    console.log(GptCall.data);
    if (!GptCall.data) return;
    ``;

    console.log(GptCall.data?.candidates[0]?.content?.parts[0]?.text);
    const gptResult =
      GptCall.data?.candidates[0]?.content?.parts[0]?.text?.split(",");
    console.log(gptResult);
    const promiseArray = gptResult.map((movie) => tmdbApi(movie));
    console.log(promiseArray);
    const finalResult = await Promise.all(promiseArray);
    console.log(finalResult);
    dispatch(
      addgptMovieResult({ movieNames: gptResult, movieResult: finalResult })
    );
  };

  return (
    <div className="">
      <img src={BG_URL} className="absolute -z-10" />

      <div className="pt-[50%] md:pt-[15%]  flex  justify-center">
        <form
          className=" w-full md:w-1/2 p-5 m-5 bg-black grid grid-cols-12  "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={languageConstants[languageSelector].gptPlaceHolder}
            className="p-4 m-4 bg -white col-span-9"
          />
          <button
            className="bg-red-800 m-4 px-4 py-4 rounded-md text-white col-span-3 shadow-black sm:w-36  md:px-4 md:py-2"
            onClick={gptSearchBtn}
          >
            {languageConstants[languageSelector].search}
          </button>
        </form>
      </div>
    </div>
  );
};
export default GptSearchBar;
