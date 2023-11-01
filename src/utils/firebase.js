import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2Zk89FlSE7P2JZwJlYJU03ndQG8NMtQ",
  authDomain: "netflixgpt-1090d.firebaseapp.com",
  projectId: "netflixgpt-1090d",
  storageBucket: "netflixgpt-1090d.appspot.com",
  messagingSenderId: "692946631822",
  appId: "1:692946631822:web:8825f4c1cb3447ff0b1ddf",
  measurementId: "G-705QD71L3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();