// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ8dT8kbp0Y2bjLhNMPNHRsSrSV6ivHXk",
  authDomain: "sellyourskills-21732.firebaseapp.com",
  projectId: "sellyourskills-21732",
  storageBucket: "sellyourskills-21732.appspot.com",
  messagingSenderId: "429226413909",
  appId: "1:429226413909:web:bf3fcc7a7e23662c6929dc",
  measurementId: "G-Y6E3TSJGP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth, app};