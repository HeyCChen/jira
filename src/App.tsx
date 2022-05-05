import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticatedApp';
import { useAuth } from './context/authContext';
import { UnauthenticatedApp } from './unauthenticatedApp';

function App() {
  const { user } = useAuth();
  return (
    <div className="center">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
