// src/components/dashboard/TemplateCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const TemplateCard = ({ category, description, gradient, items }) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all mb-3">
        <div 
          className="rounded-xl overflow-hidden mb-3 h-40"
          style={{ background: gradient }}
        >
          <div className="grid grid-cols-2 gap-2 p-2 h-full">
            {Array.from({ length: items }).map((_, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-sm rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="font-semibold text-gray-900 mb-1">{category}</div>
        <div className="text-sm text-gray-500 flex items-center justify-between">
          <span>{description}</span>
          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;