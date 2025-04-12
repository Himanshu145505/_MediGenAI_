import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, ChevronRight, HeartPulse, Dna, Activity } from 'lucide-react';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding'); // Changed to /home for doctor dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-6 opacity-20 animate-pulse delay-100"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900">
            MediGen <span className="text-blue-600">AI</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-sm mx-auto">
            Empowering doctors with AI-driven organ transplant solutions
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 py-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <HeartPulse className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Organ Matching</h3>
            <p className="text-xs text-gray-500 mt-1">Fast donor pairing</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Dna className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Smart Alerts</h3>
            <p className="text-xs text-gray-500 mt-1">Match notifications</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">3D Visualization</h3>
            <p className="text-xs text-gray-500 mt-1">Surgical planning</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Stethoscope className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Health Insights</h3>
            <p className="text-xs text-gray-500 mt-1">Data-driven analysis</p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="pt-4">
          <button
            onClick={handleGetStarted}
            className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
            <span className="relative z-10">Start Assisting</span>
          </button>
          
          <p className="mt-4 text-sm text-gray-500">
            Precision tools for transplant excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;