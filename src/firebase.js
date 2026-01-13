// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQHbpUYbusWU3xslS-4oJYdM6bVkuQWJ4",
  authDomain: "plxxfwebland.firebaseapp.com",
  projectId: "plxxfwebland",
  storageBucket: "plxxfwebland.firebasestorage.app",
  messagingSenderId: "963398306712",
  appId: "1:963398306712:web:50a199991f0ff7b5b339ed",
  measurementId: "G-YKZPETV4L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);