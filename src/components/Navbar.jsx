import { Search, HelpCircle, Bell, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="brand-logo">
             <div className="logo-icon">d</div>
             <span className="brand-name">IndiaDataHub</span>
          </div>
          <div className="search-bar">
            <Search className="search-icon" size={18} />
             <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="navbar-right">
          <div className="nav-item">Database <span className="dropdown-arrow">▼</span></div>
          <div className="nav-item">Calendar</div>
          <div className="nav-item">Help</div>
          
          {user && (
            <div className="user-profile" onClick={handleLogout} title="Logout">
               <img src="https://via.placeholder.com/32" alt="User" className="avatar" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
