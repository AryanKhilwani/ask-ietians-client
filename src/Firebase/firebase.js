// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA34XIJC0HM2qo9kvXyqEeqv1z07S4w80k",
    authDomain: "ask-ietians.firebaseapp.com",
    projectId: "ask-ietians",
    storageBucket: "ask-ietians.appspot.com",
    messagingSenderId: "586232139977",
    appId: "1:586232139977:web:bfefb7ef62f92adb99bd18",
    measurementId: "G-3T5L81NVMX"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(FirebaseApp);
export default FirebaseApp;