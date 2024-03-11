// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABnVL2wl5O_yACndPBakmE3hRTvGJg3gs",
  authDomain: "not-the-artist.firebaseapp.com",
  projectId: "not-the-artist",
  storageBucket: "not-the-artist.appspot.com",
  messagingSenderId: "377540203396",
  appId: "1:377540203396:web:ae5524ad3f28698a9943d1",
  measurementId: "G-P3DWPEYVY4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);