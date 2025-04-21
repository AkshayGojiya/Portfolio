import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWOx7xrUa3Z7m7qWGfeeNqVkNpZLhs2nQ",
  authDomain: "portfolio-c6e06.firebaseapp.com",
  projectId: "portfolio-c6e06",
  storageBucket: "portfolio-c6e06.firebasestorage.app",
  messagingSenderId: "179685786084",
  appId: "1:179685786084:web:277f0d41ca53ac0d35c7f1",
  measurementId: "G-JKVG8041FW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };