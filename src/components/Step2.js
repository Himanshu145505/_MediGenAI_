// import React from 'react';
// import Visual from "../images/Visual.png";
// const Step2 = ({ onNext }) => (
//   <div style={styles.container}>
//     <h2 style={styles.title}>3D Visualizations</h2>
//     <p style={styles.description}>
//       Experience interactive organs and learn personalized visuals.
//     </p>
//     <img
//       src={Visual}
//       alt="3D Visualizations"
//       style={styles.image}
//     />
//     <button style={styles.button} onClick={onNext}>
//       Next
//     </button>
//   </div>
// );

// const styles = {
//   container: { textAlign: 'center', padding: '20px' },
//   title: { fontSize: '22px', fontWeight: '600', marginBottom: '10px' },
//   description: { fontSize: '16px', marginBottom: '20px' },
//   image: {    alignSelf: 'center',
//     itemalign: 'center',
//     paddingBottom: '20px',
//     width: '80%', // Adjust image size as needed
//     height: 'auto', // Maintain aspect ratio
//     margin:"auto"
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     color: '#FFF',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default Step2;

import React from 'react';
import { Cuboid as Cube, ChevronRight, Eye, Heart, Brain } from 'lucide-react';

const Step2 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header Icon */}
        <div className="text-center space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-purple-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-purple-600 rounded-3xl -rotate-6 opacity-20 animate-pulse delay-100"></div>
            <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
              <Cube className="w-10 h-10 text-white floating-element" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900">3D Visualizations</h2>
            <p className="text-gray-600 mt-2">
              Experience interactive medical visualizations in stunning 3D
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Interactive View</h3>
            <p className="text-xs text-gray-500 mt-1">Rotate and zoom organs</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Smart Details</h3>
            <p className="text-xs text-gray-500 mt-1">AI-powered insights</p>
          </div>
        </div>

        {/* 3D Preview Card */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 animate-pulse" />
            <h3 className="font-semibold">Preview Features</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">High-resolution organ models</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">Real-time manipulation</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">Cross-sectional views</span>
            </li>
          </ul>
        </div>

        {/* Interactive Demo Box */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="aspect-video bg-gradient-to-br from-purple-50 to-white rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Cube className="w-12 h-12 text-purple-400 mx-auto floating-element" />
              <p className="text-sm text-purple-600 font-medium mt-2">Interactive Demo</p>
              <p className="text-xs text-gray-500">Coming in full version</p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="group relative w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
          <span className="relative z-10">Continue</span>
        </button>
      </div>
    </div>
  );
};

export default Step2;