// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdsle_h0BsexHU4hdGyhRlPpJqq0xW4sE",
  authDomain: "netflixgpt-44a5c.firebaseapp.com",
  projectId: "netflixgpt-44a5c",
  storageBucket: "netflixgpt-44a5c.appspot.com",
  messagingSenderId: "990376427550",
  appId: "1:990376427550:web:a885c908d30fcdd771ee0f",
  measurementId: "G-L8B3P5MWQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
