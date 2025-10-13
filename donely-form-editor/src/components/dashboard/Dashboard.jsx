import React, { useState } from 'react';
import { Home, Folder, FileText, Upload, MoreHorizontal, Search, MapPin, Settings, User, Play, ArrowRight } from 'lucide-react';

export default function SonolaDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const templates = [
    {
      category: 'Web Page',
      description: 'Good products deserve good websites.',
      image: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
      items: ['doc1', 'doc2', 'doc3', 'doc4']
    },
    {
      category: 'Presentations',
      description: 'Easily edit our animated templates.',
      image: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
      items: ['slide1', 'slide2', 'slide3']
    },
    {
      category: 'Social Media',
      description: 'Everything you need for socials.',
      image: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      items: ['post1', 'post2', 'post3', 'post4']
    },
    {
      category: 'Sales Pitch',
      description: 'Turn your dreams into reality.',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      items: ['pitch1', 'pitch2']
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-teal-100">
      

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">
          

          {/* Hero Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-8 shadow-lg">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Getting started<br />in Sonola
                </h1>
                <p className="text-gray-600 mb-6">Create intriguing marketing contents with ease!</p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2">
                  <span className="text-lg">▶</span> Start creating now
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Retention Chart */}
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="text-2xl font-bold mb-1">Increase</div>
                  <div className="text-xl font-bold mb-1">Customer</div>
                  <div className="text-xl font-bold text-blue-600 mb-2">Retention by 85%</div>
                  <p className="text-xs text-gray-500 mb-3">AI Summarized Reports</p>
                  <div className="relative h-20">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path d="M 0,35 Q 25,30 50,20 T 100,5" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                      <circle cx="100" cy="5" r="3" fill="#3b82f6"/>
                    </svg>
                  </div>
                </div>

                {/* Card 2 - Video */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-md relative">
                  <img src="data:image/svg+xml,%3Csvg width='200' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='150' fill='%234a5568'/%3E%3C/svg%3E" alt="Video" className="w-full h-full object-cover opacity-60"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-bold">Emma Owens</div>
                    <div className="text-xs opacity-80">Lead Project Director</div>
                  </div>
                </div>

                {/* Card 3 - Schedule Posts */}
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="font-bold text-gray-900 mb-1">Schedule Posts</div>
                  <div className="text-xs text-gray-500 mb-3">Advanced Content Calendar</div>
                  <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg p-2 h-16 flex items-center justify-center">
                    <div className="text-2xl">📱📸🎯</div>
                  </div>
                </div>

                {/* Card 4 - Integrations */}
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <div className="font-bold text-gray-900 mb-3">Collaborate</div>
                  <div className="flex -space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">Invite people...</div>
                  <div className="font-bold text-gray-900 mb-1">Integrations</div>
                  <div className="flex gap-1">
                    <span className="text-xl">🎨</span>
                    <span className="text-xl">💬</span>
                    <span className="text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For You Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400">⭐</span>
              <h2 className="text-lg font-semibold text-gray-700">For you</h2>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
              {templates.map((template, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all mb-3">
                    <div 
                      className="rounded-xl overflow-hidden mb-3 h-40"
                      style={{ background: template.image }}
                    >
                      <div className="grid grid-cols-2 gap-2 p-2 h-full">
                        {template.items.map((item, i) => (
                          <div key={i} className="bg-white/50 backdrop-blur-sm rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="font-semibold text-gray-900 mb-1">{template.category}</div>
                    <div className="text-sm text-gray-500 flex items-center justify-between">
                      <span>{template.description}</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                View all templates <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Recents Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400">🕐</span>
              <h2 className="text-lg font-semibold text-gray-700">Recents</h2>
              <div className="flex-1"></div>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
                See in projects <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}