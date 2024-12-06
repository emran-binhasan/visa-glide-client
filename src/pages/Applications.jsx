import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Applications = () => {
    const {user} = useContext(AuthContext);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/applications/${user.uid}`)
  //     .then(response => response.json())
  //     .then(data => setUser(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);
    return (
        <div className='container mx-auto py-5 my-5'>
           <h2 className='text-xl md:3xl font-medium text-center'>Appiled Visas</h2>
        </div>
    );
};

export default Applications;