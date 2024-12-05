import { createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authInfo = {title:'hello world'};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;