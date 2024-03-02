import React, { useContext } from 'react'
import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from '../context/AuthContext.tsx';
import { reactRoutes } from '../utils/routes.tsx';

const AdminProtectedRoute = ({children}) => {
    const { isAuthenticated} = useContext(AuthContext);
    let location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to={reactRoutes.auth} state={{ from: location}} replace />
    }
 return children

};

export default AdminProtectedRoute;