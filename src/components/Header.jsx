import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constans";
import { showGPTSearchView } from "../utils/gptSearchSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constans";
import { languageChange } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showgptsearch);
  const signOutMethod = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };
  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  const handleGptSearchBtn = () => {
    dispatch(showGPTSearchView());
  };

  const handleLang = (e) => {
    dispatch(languageChange(e.target.value));
  };
  return (
    <div className=" w-full p-2  absolute z-10  justify-between bg-gradient-to-b from-black   flex flex-col md:flex-row sm:mb-96">
      <img
        src={LOGO_URL}
        alt="logo"
        className="mt-4 w-[180px] mx-auto md:mx-0"
      />
      {user && (
        <div className="flex pt-4">
          {showgptSearch && (
            <select
              className="pl-6 mt-4  bg-gray-800 w-20.5 h-10 mr-4 rounded-md text-white"
              onChange={handleLang}
            >
              {SUPPORTED_LANGUAGE.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="pr-6 mt-4 pl-4 bg-purple-800 w-22 h-10 mr-4 rounded-md text-white "
            onClick={handleGptSearchBtn}
          >
            {showgptSearch ? "Home page " : "GPT search"}
          </button>
          <img src={user?.photoURL} className="pr-2 w-14 h-14" />
          <button onClick={signOutMethod} className="text-white  text-center">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
