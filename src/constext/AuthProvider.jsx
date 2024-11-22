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




// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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

  //   Track User Logged in or Logout
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser) {
      //   axios.post(`${import.meta.env.VITE_API_URL}/authentication`, {
      //     email: currentUser.email,
      //   }).then(data => {
      //     if(data.data) {
      //       localStorage.setItem('access-token', data?.data?.token);
      //       setLoading(false);
      //     }
      //   })
      // } else {
      //   localStorage.removeItem('access-token');
      //   setLoading(false);
      //   setUser(null);
      // }
    });

    return () => {
      unSubscribe();
    };
  }, [Auth]);

  const authInfo = {
    user,
    loading,
    CreateUser,
    LoginUser,
    LoginWithGoogle,
    LogOutUser,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
