// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBydSt_8as__IvX5vFDorM17O8D7q0SfQ",
  authDomain: "learnpython-22dbc.firebaseapp.com",
  projectId: "learnpython-22dbc",
  storageBucket: "learnpython-22dbc.appspot.com",
  messagingSenderId: "87438300810",
  appId: "1:87438300810:web:d5202134677a01d29d3f73",
  measurementId: "G-R2505E0EXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;