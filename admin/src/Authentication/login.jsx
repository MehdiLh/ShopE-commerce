import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:4000/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        onLogin();
        navigate('/');
      } else {
        setError(data.errors || 'Login failed. Please try again.');
      }
    } catch (error) { 
      console.error('Login error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Admin</h1>
        <div className="login-fields">
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={login} disabled={loading}>
          {loading ? 'Loading...' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default Login;
