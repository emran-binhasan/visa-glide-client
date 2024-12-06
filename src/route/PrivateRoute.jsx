import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = () => {
    const{loading,setLoading} = useContext(AuthContext);
    if(loading){
        return <div>Loading</div>
    }
};

export default PrivateRoute;