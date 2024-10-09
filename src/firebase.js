// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUnn1_jC5pOJdc4g0oLNeipsh6aacnv_U",
  authDomain: "react-portfolio-520b4.firebaseapp.com",
  projectId: "react-portfolio-520b4",
  storageBucket: "react-portfolio-520b4.appspot.com",
  messagingSenderId: "504088389107",
  appId: "1:504088389107:web:0deecfb4b6870f7cb99e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);