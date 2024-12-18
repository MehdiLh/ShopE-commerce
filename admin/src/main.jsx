import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './Authentication/login';
import App from './App.jsx';
import './index.css';

// A simple wrapper for protected routes
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Root = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: '*',
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <App onLogout={handleLogout} />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
