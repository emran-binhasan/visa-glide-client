import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    if(user){
        navigate('/')
    }
    return children
};

export default PublicRoute;