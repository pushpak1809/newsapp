import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // firebase config data
  apiKey: "AIzaSyAu0XGTiRf20eDph_zmWv2747UqYq_wFwM",
  authDomain: "news-app-8d7d2.firebaseapp.com",
  projectId: "news-app-8d7d2",
  storageBucket: "news-app-8d7d2.appspot.com",
  messagingSenderId: "541993775690",
  appId: "1:541993775690:web:cbc145ede050efc4e46cb3",
  measurementId: "G-J43K3YT0QX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
