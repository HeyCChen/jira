import React from 'react';
import { useAuth } from './context/authContext';
import { ProjectListScreen } from './screens/projectList';

export const AuthenticatedApp = () => {

    const { logout } = useAuth();

    return (
        <>
            <button onClick={logout}>登出用户</button>
            <ProjectListScreen />
        </>
    )
}
