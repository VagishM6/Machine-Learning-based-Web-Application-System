// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
// import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore"
import {getAuth} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkPD7B-w23vrTPuaL4PKAooN-mYjW7Z3g",
  authDomain: "projectmorph-12b6a.firebaseapp.com",
  projectId: "projectmorph-12b6a",
  storageBucket: "projectmorph-12b6a.appspot.com",
  messagingSenderId: "195333936616",
  appId: "1:195333936616:web:37f51a79616ab5dd6bc05d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// export function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
// }