// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoji0YqzjOP5H2pQ8XmqD27yLrXetK0V0",
  authDomain: "my-first-project-164d9.firebaseapp.com",
  projectId: "my-first-project-164d9",
  storageBucket: "my-first-project-164d9.appspot.com",
  messagingSenderId: "586476964113",
  appId: "1:586476964113:web:a4c44f468d2c7a813124b0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
