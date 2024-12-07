import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase.config";
export const AuthContext = createContext();
import Swal from "sweetalert2";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        const path = location.state?location.state:'/';
        navigate(path)
      })
      .catch((error) => {
        toast.error(error.message); 
      });
  };


  const updateData = async (updatedUserData) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, updatedUserData);
      setUser({ ...auth.currentUser, ...updatedUserData }); // Update local user state
    }
  };

  const logOutUser = () => {
    signOut(auth).then(() => {
      Swal.fire({
        title: `Hey ${user.displayName ? user.displayName : ""}`,
        text: "You have logged out succesfully!",
        icon: "info",
      });
      navigate;
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    logOutUser,
    loading,
    setLoading,
    updateData,
    handleGoogleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
