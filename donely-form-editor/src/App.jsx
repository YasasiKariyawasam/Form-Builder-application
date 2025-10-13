// src/App.jsx
// Make sure to run: npm install react-router-dom lucide-react
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import FormEditor from './components/form/FormEditor'; // ✅ Import the Form Editor component

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Welcome Screen Route */}
          <Route path="/welcome" element={<WelcomeScreen />} />

          {/* Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />

          {/* ✅ Form Editor Route */}
          <Route
            path="/form-editor"
            element={
              <MainLayout>
                <FormEditor />
              </MainLayout>
            }
          />

          {/* Default Route - Redirect to Welcome */}
          <Route path="/" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
