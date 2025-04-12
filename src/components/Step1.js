// import React from 'react';
// import AIHRecomm from "../images/AIHR.png";

// const Step1 = ({ onNext }) => (
//   <div style={styles.container}>
//     <h2 style={styles.title}>AI Health Recommendations</h2>
//     <p style={styles.description}>Get personalized health tips based on your data.</p>
//     <img src={AIHRecomm} alt="AIHealthRecomm" style={styles.image} />
//     <button style={styles.button} onClick={onNext}>
//       Next
//     </button>
//   </div>
// );

// const styles = {
//   container: { textAlign: 'center', padding: '20px' },
//   title: { fontSize: '22px', fontWeight: '600', marginBottom: '10px' },
//   description: { fontSize: '16px', marginBottom: '20px' },
//   image: {    
//     alignSelf: 'center',
//     itemalign: 'center',
//     paddingBottom: '20px',
//     width: '80%', // Adjust image size as needed
//     height: 'auto', // Maintain aspect ratio
//     margin: 'auto'
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

// export default Step1;
import React from 'react';
import { Brain, ChevronRight, Sparkles, Activity } from 'lucide-react';

const Step1 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header Icon */}
        <div className="text-center space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-6 opacity-20 animate-pulse delay-100"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Health Recommendations</h2>
            <p className="text-gray-600 mt-2">
              Get personalized health insights powered by advanced AI
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Smart Analysis</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our AI analyzes your health data to provide tailored recommendations
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Daily Insights</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Get daily health tips and actionable wellness advice
            </p>
          </div>
        </div>

        {/* Example Recommendations */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <h3 className="font-semibold mb-4">Example Recommendations:</h3>
          <ul className="space-y-3 text-blue-50">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span>Personalized exercise routines</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span>Dietary suggestions based on your profile</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span>Sleep optimization tips</span>
            </li>
          </ul>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
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

export default Step1;