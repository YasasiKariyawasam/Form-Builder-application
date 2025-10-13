// src/components/dashboard/GettingStartedCard.jsx
import React from 'react';
import { Play } from 'lucide-react';
import Button from '../common/Button';

const GettingStartedCard = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Getting started<br />in Sonola
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Create intriguing marketing contents with ease!
          </p>
          <Button icon="▶" size="lg">
            Start creating now
          </Button>
        </div>
        
        {/* Right Side - Metric Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 - Retention Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Increase</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">Customer</div>
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Retention by 85%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">AI Summarized Reports</p>
            <div className="relative h-20">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M 0,35 Q 25,30 50,20 T 100,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 dark:text-blue-400"/>
                <circle cx="100" cy="5" r="3" fill="currentColor" className="text-blue-600 dark:text-blue-400"/>
              </svg>
            </div>
          </div>

          {/* Card 2 - Video */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden shadow-md relative">
            <div className="w-full h-full bg-gray-600/60 dark:bg-gray-500/60"></div>
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="font-bold text-gray-900 dark:text-white mb-1">Schedule Posts</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">Advanced Content Calendar</div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-lg p-2 h-16 flex items-center justify-center">
              <div className="text-2xl">📱📸🎯</div>
            </div>
          </div>

          {/* Card 4 - Integrations */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="font-bold text-gray-900 dark:text-white mb-3">Collaborate</div>
            <div className="flex -space-x-2 mb-2">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">Invite people...</div>
            <div className="font-bold text-gray-900 dark:text-white mb-1">Integrations</div>
            <div className="flex gap-1">
              <span className="text-xl">🎨</span>
              <span className="text-xl">💬</span>
              <span className="text-xl">📊</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedCard;