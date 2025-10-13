// src/components/layout/Sidebar.jsx
import React from 'react';
import { Home, Folder, FileText, Upload, MoreHorizontal, MapPin, Settings, User } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'projects', label: 'Projects', Icon: Folder },
    { id: 'templates', label: 'Templates', Icon: FileText },
    { id: 'uploads', label: 'Uploads', Icon: Upload },
    { id: 'more', label: 'More', Icon: MoreHorizontal }
  ];

  return (
    <div className="w-36 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-6 shadow-lg">
      <div className="space-y-8">
        {navItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
              activeTab === id 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-auto space-y-4">
        <button className="p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          <MapPin size={24} />
        </button>
        <button className="p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          <Settings size={24} />
        </button>
        <button className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;