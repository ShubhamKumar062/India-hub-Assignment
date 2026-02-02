import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus } from 'lucide-react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      login({ username, email });
      navigate('/dashboard');
    } else {
        alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card-centered">
        <div className="auth-icon-wrapper">
             <UserPlus className="auth-icon" size={24} />
        </div>
        <h2 className="auth-title">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username" className="auth-label">Full Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="auth-input"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="auth-label">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               className="auth-input"
               placeholder="Enter your email"
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
               placeholder="Create a password"
            />
          </div>
          <button type="submit" className="btn-auth-submit">Sign Up</button>
        </form>
        
        <div className="auth-footer">
          <Link to="/" className="auth-link">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
