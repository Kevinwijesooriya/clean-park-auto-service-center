// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb7sJdJjR7c-rsk7gjEl-XWle74trXyq0",
  authDomain: "clean-park-auto-service.firebaseapp.com",
  projectId: "clean-park-auto-service",
  storageBucket: "clean-park-auto-service.appspot.com",
  messagingSenderId: "795682819718",
  appId: "1:795682819718:web:15104ef20938fa26990b07",
  measurementId: "G-GQ63DRB68Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
