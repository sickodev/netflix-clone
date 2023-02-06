// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhJJhBPAykGE4-Z_9EWf6MFlBDYZ4tcXU",
    authDomain: "netflix-clone-ee5d2.firebaseapp.com",
    projectId: "netflix-clone-ee5d2",
    storageBucket: "netflix-clone-ee5d2.appspot.com",
    messagingSenderId: "339654873800",
    appId: "1:339654873800:web:53b08c1f7a4c56c2fbcbfd",
    measurementId: "G-CXT5FQ7N3X",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
