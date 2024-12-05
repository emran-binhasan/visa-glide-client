import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const[user, setUser] = useState(null)
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>
        signOut(auth)
    .then(()=>console.log('Signed Out'))
    .catch(error => console.log(error))

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)     
        })

        return ()=> unsubscribe()
    },[])

    const authInfo = {createUser,loginUser,user,setUser,logOutUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;