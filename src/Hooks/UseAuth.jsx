import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const UseAuth = () => {
    const context = useContext(AuthContext);
    
    return context;

}

export default UseAuth;