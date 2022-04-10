// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrXdb7vyb1Yqysw2TOKVuCJh6wBlyKzaI",
  authDomain: "ema-john-login-e1285.firebaseapp.com",
  projectId: "ema-john-login-e1285",
  storageBucket: "ema-john-login-e1285.appspot.com",
  messagingSenderId: "41621830220",
  appId: "1:41621830220:web:9acc0beedd91ad960c92e9",
  measurementId: "G-KSJGY5XB98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;