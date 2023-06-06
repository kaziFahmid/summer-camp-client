// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Z83zWgHxBejGxHkH1lIsCcvgQyFlRHE",
  authDomain: "summer-camp-335b6.firebaseapp.com",
  projectId: "summer-camp-335b6",
  storageBucket: "summer-camp-335b6.appspot.com",
  messagingSenderId: "621488536723",
  appId: "1:621488536723:web:7eb025657bdec2a7866166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app