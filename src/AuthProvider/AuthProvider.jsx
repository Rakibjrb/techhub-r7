import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(false);

  const updateNameAndPhoto = (
    name = "User 4194",
    photo = "https://i.ibb.co/5x441PC/user.png"
  ) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const userSignUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const requestUserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const requestUserLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createAccountWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const toggleDarkLight = () => {
    setTheme(!theme);
  };

  const authInfo = {
    auth,
    user,
    loading,
    theme,
    userSignUpWithEmailAndPassword,
    updateNameAndPhoto,
    requestUserLogin,
    requestUserLogOut,
    createAccountWithGoogle,
    toggleDarkLight,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
