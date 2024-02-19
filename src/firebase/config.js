// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHjx5XqeCo2euGNVpnumPpiCQV-L275BY",
    authDomain: "vue-firebase-crud-a63b2.firebaseapp.com",
    projectId: "vue-firebase-crud-a63b2",
    storageBucket: "vue-firebase-crud-a63b2.appspot.com",
    messagingSenderId: "751229620858",
    appId: "1:751229620858:web:b793a7891af6392fb3a1c3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebaseApp);
const projectAuth = getAuth(firebaseApp);
const projectStorage = getStorage(firebaseApp);
const timestamp = serverTimestamp;
export { projectAuth, projectFirestore, projectStorage, timestamp };