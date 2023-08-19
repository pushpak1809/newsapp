import "./App.css";
import { useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import NewsList from "./Components/NewsList"; // Import the NewsList component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [showNewsList, setShowNewsList] = useState(false); // State for showing NewsList

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });

        setIsLoggedIn(true);
        setShowNewsList(true); // Show NewsList on successful login
      } else {
        setIsLoggedIn(false);
        setShowNewsList(false); // Hide NewsList on logout
      }
    });

    return () => unsubscribe();
  }, []);

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserData({ displayName, email });

        setIsLoggedIn(true);
        setShowNewsList(true); // Show NewsList on successful login
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserData({});
        setIsLoggedIn(false);
        setShowNewsList(false); // Hide NewsList on logout
      })
      .catch((error) => {
        // An error happened.
        console.log({ error });
      });
  };

  return (
    <div className="App">
      {!isLoggedIn && (
        <button
          onClick={SignUpUsingGoogle}
          type="button"
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      )}

      {isLoggedIn && (
        <div className="wrapper">
          <div className="profile-card js-profile-card">
            {/* ... (existing profile card code) */}
            <button
              className="profile-card__button button--orange"
              onClick={Logout}
            >
              Log out
            </button>
          </div>
        </div>
      )}

      {/* Conditionally render NewsList */}
      {showNewsList && <NewsList />}
    </div>
  );
}

export default App;
