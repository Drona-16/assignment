// src/Dashboard.js
import React from 'react';
import ProductivityGrid from './components/grid';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

    const onButtonClick1 = () => {
        
          navigate('/dashboard')
        
      }
    
      const onButtonClick2 = () => {
        
        navigate('/search')
      
    }

  return (
    <div>
      <h1>My Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      {/* Add your dashboard components here */}
      <ProductivityGrid></ProductivityGrid>
      <input className={'inputButton'} type="button" onClick={onButtonClick1} value={'Dashboard'} />
      <input className={'inputButton'} type="button" onClick={onButtonClick2} value={'Search Employee'} />
    </div>
  );
};

export default Dashboard;
