import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAMBrSAQOLX1nJeCUNa6tIXobIy8JiDAs",
  authDomain: "chief-portal.firebaseapp.com",
  projectId: "chief-portal",
  storageBucket: "chief-portal.appspot.com",
  messagingSenderId: "244703285182",
  appId: "1:244703285182:web:0928fb5b1aca0413a733ef",
  measurementId: "G-STZRR4E7Y5",
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
