// import React from 'react';
// import Seamless from "../images/Seamless.png";
// const Step3 = ({ onComplete }) => (
//   <div style={styles.container}>
//     <h2 style={styles.title}>Seamless Interaction</h2>
//     <p style={styles.description}>Chat with our intelligent assistant anytime.</p>
//     <img
//       src={Seamless}
//       alt="Seamless Interaction"
//       style={styles.image}
//     />
//     <button style={styles.button} onClick={onComplete}>
//       Get Started
//     </button>
//   </div>
// );

// const styles = {
//   container: { textAlign: 'center', padding: '20px' },
//   title: { fontSize: '22px', fontWeight: '600', marginBottom: '10px' },
//   description: { fontSize: '16px', marginBottom: '20px' },
//   image: {
//     paddingBottom: '20px',
//     alignSelf: 'center',
//     itemalign: 'center',
//     width: '80%', // Adjust image size as needed
//     height: 'auto', // Maintain aspect ratio
//     margin:"auto",
//   },
//   button: {
//     backgroundColor: '#28a745',
//     color: '#FFF',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default Step3;

import React from 'react';
import { MessageSquare, ChevronRight, Zap, Clock, Shield } from 'lucide-react';

const Step3 = ({ onComplete }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header Icon */}
        <div className="text-center space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-emerald-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-emerald-600 rounded-3xl -rotate-6 opacity-20 animate-pulse delay-100"></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
              <MessageSquare className="w-10 h-10 text-white floating-element" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Seamless Interaction</h2>
            <p className="text-gray-600 mt-2">
              Experience intelligent healthcare assistance at your fingertips
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Instant Response</h3>
            <p className="text-xs text-gray-500 mt-1">AI-powered assistance</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900">24/7 Available</h3>
            <p className="text-xs text-gray-500 mt-1">Always here for you</p>
          </div>
        </div>

        {/* Chat Preview */}
        <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h3 className="font-semibold text-gray-900">Smart Assistant Preview</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-sm text-gray-600">
                How can I help you with your health today?
              </div>
            </div>
            
            <div className="flex gap-3 justify-end">
              <div className="bg-emerald-500 rounded-2xl rounded-tr-none p-3 text-sm text-white">
                I need help understanding my lab results.
              </div>
              <div className="bg-emerald-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
          <h3 className="font-semibold mb-4">Key Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">Natural language understanding</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">Personalized health guidance</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">Secure medical data handling</span>
            </li>
          </ul>
        </div>

        {/* Get Started Button */}
        <button
          onClick={onComplete}
          className="group relative w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
          <span className="relative z-10">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default Step3;