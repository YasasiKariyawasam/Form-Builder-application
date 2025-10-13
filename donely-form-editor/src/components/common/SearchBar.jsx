
// src/components/common/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = 'Search...', className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
    </div>
  );
};

export default SearchBar;