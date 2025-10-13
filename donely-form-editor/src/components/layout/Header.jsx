// src/components/layout/Header.jsx
import React from 'react';
import SearchBar from '../common/SearchBar';
import ThemeToggle from '../common/ThemeToggle';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded"></div>
          </div>
          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">SONOLA</span>
        </div>
      </div>
      
      {/* Search Bar */}
      <SearchBar 
        placeholder="Search projects and experiences" 
        className="flex-1 max-w-md mx-8"
      />
      
      {/* Actions */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg font-medium text-sm hover:shadow-md transition-all flex items-center gap-2 border border-gray-200 dark:border-gray-700">
          Try Pro <span className="text-yellow-500">✨</span>
        </button>
      </div>
    </div>
  );
};

export default Header;