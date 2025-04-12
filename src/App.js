import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LoginSignup from "./components/LoginSignup";
import HomePage from "./components/HomePage";
import PaymentPage from "./components/PaymentPage";
import HealthDataInput from "./components/HealthDataInput";
import RecommendationsPage from "./components/RecommendationsPage";
import ChatbotPage from "./components/ChatbotPage";
import OnboardingContainer from "./components/OnboardingContainer";
import ThreeDSimulation from "./components/ThreeDSimulation";
import OrganMatchForm from "./components/OrganMatchForm";
import UnmatchedRecipients from "./components/UnmatchedRecipients"; // Add this

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/onboarding" element={<OnboardingContainer />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/input-health" element={<HealthDataInput />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/3d-simulation" element={<ThreeDSimulation />} />
        <Route path="/organ-match" element={<OrganMatchForm />} />
        <Route path="/unmatched-recipients" element={<UnmatchedRecipients />} /> {/* Add this */}
      </Routes>
    </Router>
  );
};

export default App;