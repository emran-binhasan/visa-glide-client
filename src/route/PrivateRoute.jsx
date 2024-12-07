import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const{loading,user} = useContext(AuthContext);
    if(loading){
        return <div>Loading</div>
    }
    if(!user){
       return <Navigate state={location.pathname} replace to='/auth/login'/>
    }
    return children
};

export default PrivateRoute;