// src/components/layout/MainLayout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-teal-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;