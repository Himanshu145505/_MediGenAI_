import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Home, Search, Sparkles, Activity, HeartPulse, ClipboardList, Settings, UserCircle, Brain, Cuboid as Cube, Dna, LogOut } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleReportsClick = () => {
    navigate('/input-health');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 pt-8 pb-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome!</h2>
            <p className="text-blue-600 font-medium">Doctor</p>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
              <Activity className="h-4 w-4" />
              Empowering doctors with AI-driven insights
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Logout</span>
            </button>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
              <span className="text-lg font-semibold">D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-6 max-w-7xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search medical records, medications, research..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
          />
        </div>
      </div>

      {/* AI Medical Insights */}
      <div className="mt-6 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-6 w-6" />
            <h3 className="text-xl font-semibold">AI-Driven Medical Insights</h3>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Today's Clinical Recommendations:</p>
              <ul className="mt-2 space-y-2 text-blue-50">
                <li>• Review AI-based patient risk assessments</li>
                <li>• Check updated drug interaction warnings</li>
                <li>• Explore recent medical case studies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 px-4 max-w-7xl mx-auto">
        <div className="mt-4 grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/organ-match')}
            className="bg-gradient-to-br from-amber-500 to-amber-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
          >
            <HeartPulse className="h-6 w-6" />
            <span>Organ Match</span>
          </button>

          <button
            onClick={() => navigate('/input-health')}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
          >
            <Activity className="h-6 w-6" />
            <span>Transplant Analysis</span>
          </button>

          <button
            onClick={() => navigate('/3d-simulation')}
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
          >
            <Cube className="h-6 w-6" />
            <span>3D Medical Simulations</span>
          </button>

        
<button
  onClick={() => navigate('/unmatched-recipients')} 
  className="bg-gradient-to-br from-purple-500 to-purple-700 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
>
  <Dna className="h-6 w-6" />
  <span>Unmatched Recipient</span>
</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-around py-3">
          <button
            onClick={handleHomeClick}
            className="flex flex-col items-center gap-1 text-blue-600"
          >
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={handleReportsClick}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <ClipboardList className="h-6 w-6" />
            <span className="text-xs font-medium">Reports</span>
          </button>
          <button
            onClick={handleSettingsClick}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs font-medium">Settings</span>
          </button>
          <button
            onClick={handleProfileClick}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <UserCircle className="h-6 w-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;