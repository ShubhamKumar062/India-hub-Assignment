import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import './App.css';

const Layout = ({ children }) => {
  return (
    <div className="app-min-height">
        <Navbar />
        {children}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
