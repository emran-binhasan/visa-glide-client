import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase.config";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);


    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateData = async (updatedUserData) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, updatedUserData);
            setUser({ ...auth.currentUser, ...updatedUserData }); // Update local user state
        }
    };
    
    const logOutUser = () =>
        signOut(auth)
    .then(()=>console.log('Signed Out'))
    .catch(error => console.log(error))

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false) 
        })

        return ()=> unsubscribe()
    },[])

    const authInfo = {createUser,loginUser,user,setUser,logOutUser,loading,setLoading,updateData};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;