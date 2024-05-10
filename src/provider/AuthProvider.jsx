
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';

//Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout user
  const logOut = () => {
    setUser(null);
    return signOut();
  };

  //google signIn
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github sign in
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Update user profile
  const updateUserProfile = (fullName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    githubLogin,
    logOut,
    user,
    setUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider