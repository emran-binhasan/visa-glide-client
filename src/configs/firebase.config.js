// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDdDTJPaVKnJNs7K5v8DftRBIHrGtMrFZA",
  authDomain: "visa-glide.firebaseapp.com",
  projectId: "visa-glide",
  storageBucket: "visa-glide.firebasestorage.app",
  messagingSenderId: "496543058414",
  appId: "1:496543058414:web:c6048364038d8e7041e6ff",
  measurementId: "G-1WRM9NSHMD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)