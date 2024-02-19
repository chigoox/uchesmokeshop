// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeLzX5V0arUMsGQZOlkrmmlhlqSQ4X-iI",
  authDomain: "afrosmoke-a1742.firebaseapp.com",
  projectId: "afrosmoke-a1742",
  storageBucket: "afrosmoke-a1742.appspot.com",
  messagingSenderId: "971357862081",
  appId: "1:971357862081:web:30060402450fcc0768bc40",
  measurementId: "G-BD4JXJ617X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)
const STORAGE = getStorage(app)


export default app
export { AUTH, DATABASE, STORAGE };

