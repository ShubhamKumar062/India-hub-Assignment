import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login({ username });
      navigate('/dashboard');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card-centered">
        <div className="auth-icon-wrapper">
             <Lock className="auth-icon" size={24} />
        </div>
        <h2 className="auth-title">Sign in</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username" className="auth-label">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="auth-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="auth-label">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn-auth-submit">Sign In</button>
        </form>
        
        <div className="auth-footer">
          <a href="#" className="auth-link">Forgot password?</a>
          <Link to="/signup" className="auth-link">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
