import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import data from '../data/response1.json';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null; 

  return (
    <div className="dashboard-content">
        <Sidebar categories={data.categories} />
        <main className="main-content">
          <ProductList items={data.Frequent} />
        </main>
    </div>
  );
};

export default Dashboard;
