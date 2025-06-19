// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmcYA-6HSgbLbdXgIknCX9DcLGTyztwcg",
    authDomain: "coffee-store-app-6b113.firebaseapp.com",
    projectId: "coffee-store-app-6b113",
    storageBucket: "coffee-store-app-6b113.firebasestorage.app",
    messagingSenderId: "15281919070",
    appId: "1:15281919070:web:800892b60758ce144950cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);