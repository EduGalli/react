import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwPw1b8_o9DMgE2cYH7sJ-DvqeCejM2A",
  authDomain: "proyecto-final-33513.firebaseapp.com",
  projectId: "proyecto-final-33513",
  storageBucket: "proyecto-final-33513.appspot.com",
  messagingSenderId: "2505372936",
  appId: "1:2505372936:web:75f2c41b01d72ed95168bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
