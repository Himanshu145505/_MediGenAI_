import React from 'react';
import { Heart, Brain, Apple, Dumbbell, Moon, Pill as Pills, Sparkles, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';

const RecommendationsPage = () => {
  const recommendations = [
    {
      category: "Diet & Nutrition",
      icon: Apple,
      color: "from-green-500 to-emerald-600",
      items: [
        "Increase protein intake to 70g daily",
        "Add more leafy greens to your meals",
        "Consider vitamin D supplements"
      ]
    },
    {
      category: "Physical Activity",
      icon: Dumbbell,
      color: "from-orange-500 to-red-600",
      items: [
        "30 minutes of cardio, 3 times a week",
        "Include strength training exercises",
        "Take regular walking breaks"
      ]
    },
    {
      category: "Sleep & Rest",
      icon: Moon,
      color: "from-indigo-500 to-purple-600",
      items: [
        "Maintain 7-8 hours of sleep",
        "Create a consistent sleep schedule",
        "Reduce screen time before bed"
      ]
    },
    {
      category: "Mental Wellness",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      items: [
        "Practice daily meditation",
        "Try breathing exercises",
        "Consider journaling"
      ]
    }
  ];

  const healthMetrics = [
    { label: "Heart Rate", value: "72 bpm", trend: "stable", icon: Heart },
    { label: "Sleep Quality", value: "Good", trend: "improving", icon: Moon },
    { label: "Activity Level", value: "Moderate", trend: "increasing", icon: Activity },
    { label: "Medication", value: "On Track", trend: "stable", icon: Pills }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 pt-8 pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Health Recommendations</h1>
          <p className="text-gray-600 mt-1 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            Personalized insights for your well-being
          </p>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="px-4 mt-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  metric.trend === 'improving' ? 'bg-green-100 text-green-700' :
                  metric.trend === 'increasing' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {metric.trend}
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-900 mt-2">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="px-4 mt-6 max-w-7xl mx-auto space-y-4">
        {recommendations.map((category, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className={`bg-gradient-to-r ${category.color} p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <category.icon className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-gray-700">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="px-4 mt-6 max-w-7xl mx-auto">
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5" />
          Get More Personalized Recommendations
        </button>
      </div>
    </div>
  );
};

export default RecommendationsPage;