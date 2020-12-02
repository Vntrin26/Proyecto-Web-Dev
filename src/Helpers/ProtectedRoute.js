import React from 'react'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {

    const Component = props.children;
    const isAuthenticated = props.logged;
    
    return isAuthenticated ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: '/' }} />
    );
}

export default ProtectedRoute;