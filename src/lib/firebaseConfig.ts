// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZdRgU_glhA_gmL0gymJEQPEJcNsKLWo",
  authDomain: "medi-care-54961.firebaseapp.com",
  projectId: "medi-care-54961",
  storageBucket: "medi-care-54961.firebasestorage.app",
  messagingSenderId: "193341826149",
  appId: "1:193341826149:web:6fd9f7bbf32dffd697128c",
  measurementId: "G-MY68N6PY8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);