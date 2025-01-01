import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";




// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  const Auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  //   Create a New Useing Using Email & Password
  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  //   Login a Existing User
  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  //   Register or Login Using google

  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  // Existin User Logout
  const LogOutUser = () => {
    setLoading(true);
    return signOut(Auth);
  };


  // get the user location automatically
  const handleAutoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        .then((response) => {
          setAddress(response.data.display_name)
        })
        .catch (() => {
          setAddress("Unable to get address")
        })
      });
    }
  }

  //   Track User Logged in or Logout
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
      if (currentUser) {
        axios.post(`${import.meta.env.VITE_API_URL}/authentication`, {
          email: currentUser.email,
        }).then(data => {
          if(data.data) {
            localStorage.setItem('access-token', data?.data?.token);
            setLoading(false);
          }
        })
      } else {
        localStorage.removeItem('access-token');
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [Auth]);

  const authInfo = {
    user,
    address,
    loading,
    CreateUser,
    LoginUser,
    LoginWithGoogle,
    LogOutUser,
    setUser,
    setLoading,
    handleAutoLocation
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
