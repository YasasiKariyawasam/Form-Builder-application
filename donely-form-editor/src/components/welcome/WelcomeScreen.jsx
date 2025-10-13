// src/components/welcome/WelcomeScreen.jsx (Optional: With React Router)
// Use this version if you're using React Router

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleTheme = () => setIsDark(!isDark);
  
  const nextSlide = () => {
    if (currentSlide === 2) {
      // Last slide - navigate to dashboard
      navigate('/dashboard');
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const slides = [
    {
      title: "Welcome to Sonola",
      description: "With Sonola, making stand-out marketing content is as easy as a few clicks. Let's get started!",
      stat: "63% of marketers say creating engaging content consistently is their biggest challenge.",
      source: "Content Marketing Institute, 2022"
    },
    {
      title: "Build Beautiful Forms",
      description: "Create stunning forms and surveys with our intuitive drag-and-drop interface. No coding required!",
      stat: "Forms built with Sonola see 45% higher completion rates.",
      source: "Sonola Analytics, 2024"
    },
    {
      title: "Automate Your Workflow",
      description: "Connect your forms to your favorite tools and automate repetitive tasks with AI-powered workflows.",
      stat: "Save up to 10 hours per week with intelligent automation.",
      source: "Productivity Report, 2024"
    }
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Skip Button */}
        <button
          onClick={() => navigate('/dashboard')}
          className="fixed top-4 left-4 z-50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Skip →
        </button>

        {/* Main Card */}
        <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-white dark:bg-gray-800">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {slides[currentSlide].description}
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed mb-2">
                    {slides[currentSlide].stat}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {slides[currentSlide].source}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className="transition-all duration-300"
                    >
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'w-12 bg-blue-600 dark:bg-blue-500'
                            : 'w-2 bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  {currentSlide === 2 ? 'Get Started' : 'Next'}
                </button>
              </div>
            </div>

            {/* Right Side - Tailwind "S" Logo */}
            <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 flex items-center justify-center p-8 md:p-12 overflow-hidden">
              
              {/* Decorative Blur Lights */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>

              {/* Stylized "S" Logo */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                <div className="w-44 h-12 rounded-lg transform -skew-x-[25deg] bg-gradient-to-br from-[#C59CFF] via-[#9E7BFF] to-[#7E5BFF] shadow-[0_6px_20px_rgba(0,0,0,0.3)] border border-white/30"></div>
                <div className="w-44 h-12 rounded-lg transform -skew-x-[25deg] bg-gradient-to-br from-[#9E7BFF] via-[#745CFF] to-[#4A3AFF] shadow-[0_6px_20px_rgba(0,0,0,0.35)] border border-white/20"></div>
                <div className="w-44 h-12 rounded-lg transform -skew-x-[25deg] bg-gradient-to-br from-[#5E46FF] via-[#352DFF] to-[#2718D9] shadow-[0_6px_25px_rgba(0,0,0,0.4)] border border-white/10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent blur-xl rounded-2xl pointer-events-none"></div>
              </div>

              {/* SONOLA Text */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white/60 dark:text-white/40 text-sm font-semibold tracking-widest">
                  © SONOLA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;