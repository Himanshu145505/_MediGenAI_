import React, { useState } from 'react';
import { 
  FileText, 
  User, 
  Calendar, 
  AlertCircle,
  Upload,
  CheckCircle2,
  HeartPulse,
  Weight,
  Activity,
  Droplet,
  Flame,


} from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const HealthDataInput = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Height: "",
    Weight: "",
    Gender: "",
    SystolicBP: "",
    DiastolicBP: "",
    Cholesterol: "",
    Glucose: "",
    Smoking: "",
    AlcoholIntake: "",
    PhysicalActivity: "",
    CardiovascularDisease: "",
    Existing_Conditions: "",
    Allergies: "",
    Past_Surgeries: "",
    Ongoing_Diseases: "",
    Medications: "",
    Lab_Results: "",
    Medical_Imaging_Files: "",
    Consent: false,
  });

  const [report, setReport] = useState("");
  const [error, setError] = useState("");
  const [showSimulationButton, setShowSimulationButton] = useState(false);
  const [transplantPrompt, setTransplantPrompt] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, Medical_Imaging_Files: file.name });
    }
  };

  const handleConsentChange = () => {
    setFormData({ ...formData, Consent: !formData.Consent });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setReport("");
    setShowSimulationButton(false);

    try {
      const fields = {
        Name: formData.Name,
        Age: parseInt(formData.Age, 10),
        Height: parseFloat(formData.Height),
        Weight: parseFloat(formData.Weight),
        Gender: formData.Gender,
        SystolicBP: parseInt(formData.SystolicBP, 10),
        DiastolicBP: parseInt(formData.DiastolicBP, 10),
        Cholesterol: parseInt(formData.Cholesterol, 10),
        Glucose: parseInt(formData.Glucose, 10),
        Smoking: formData.Smoking,
        AlcoholIntake: formData.AlcoholIntake,
        PhysicalActivity: formData.PhysicalActivity,
        CardiovascularDisease: formData.CardiovascularDisease,
        Existing_Conditions: formData.Existing_Conditions,
        Allergies: formData.Allergies,
        Past_Surgeries: formData.Past_Surgeries,
        Ongoing_Diseases: formData.Ongoing_Diseases,
        Medications: formData.Medications,
        Lab_Results: formData.Lab_Results,
        Medical_Imaging_Files: formData.Medical_Imaging_Files,
        Consent: formData.Consent ? "Yes" : "No",
      };

      console.log("Sending data to backend:", fields); // Debugging

      const response = await axios.post(
        "http://127.0.0.1:8000/generate_detailed_report/",
        fields,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from backend:", response.data); // Debugging

      setReport(response.data.medical_report);
      setTransplantPrompt(response.data.transplant_prompt);
      setShowSimulationButton(response.data.transplant_needed);
    } catch (err) {
      setError(
        "Failed to generate the report. Please check your inputs and try again."
      );
      console.error("Error:", err.response ? err.response.data : err.message); // Debugging
    }
  };

  const handleShowSimulation = () => {
    navigate("/3d-simulation", {
      state: { transplantPrompt },
    });
  };

  return (
    <div className="medical-card max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="h-8 w-8 text-blue-600 floating-element" />
        <h1 className="text-2xl font-bold text-gray-900">Transplant Analysis</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <div className="relative">
              <label className="medical-label">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label">Age</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Age"
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label">Height (cm)</label>
              <div className="relative">
                <Activity className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="Height"
                  value={formData.Height}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Height in cm"
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label">Weight (kg)</label>
              <div className="relative">
                <Weight className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="Weight"
                  value={formData.Weight}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Weight in kg"
                />
              </div>
            </div>

            <div>
              <label className="medical-label">Gender</label>
              <select
                name="Gender"
                value={formData.Gender}
                onChange={handleChange}
                required
                className="medical-select"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Medical Information Section */}
          <div className="space-y-4">
            <div className="relative">
              <label className="medical-label">Systolic Blood Pressure</label>
              <div className="relative">
                <HeartPulse className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="SystolicBP"
                  value={formData.SystolicBP}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Systolic BP"
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label">Diastolic Blood Pressure</label>
              <div className="relative">
                <HeartPulse className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="DiastolicBP"
                  value={formData.DiastolicBP}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Diastolic BP"
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label">Cholesterol (mg/dL)</label>
              <div className="relative">
                <Droplet className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="Cholesterol"
                  value={formData.Cholesterol}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Cholesterol"
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label">Glucose (mg/dL)</label>
              <div className="relative">
                <Flame className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="Glucose"
                  value={formData.Glucose}
                  onChange={handleChange}
                  required
                  className="medical-input pl-10"
                  placeholder="Glucose"
                />
              </div>
            </div>

            <div>
              <label className="medical-label">Smoking</label>
              <select
                name="Smoking"
                value={formData.Smoking}
                onChange={handleChange}
                required
                className="medical-select"
              >
                <option value="">Select Smoking Status</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="medical-label">Alcohol Intake</label>
              <select
                name="AlcoholIntake"
                value={formData.AlcoholIntake}
                onChange={handleChange}
                required
                className="medical-select"
              >
                <option value="">Select Alcohol Intake</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="medical-label">Physical Activity</label>
              <select
                name="PhysicalActivity"
                value={formData.PhysicalActivity}
                onChange={handleChange}
                required
                className="medical-select"
              >
                <option value="">Select Physical Activity</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="medical-label">Cardiovascular Disease</label>
              <select
                name="CardiovascularDisease"
                value={formData.CardiovascularDisease}
                onChange={handleChange}
                required
                className="medical-select"
              >
                <option value="">Select Presence of Cardiovascular Disease</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="mt-6">
          <label className="medical-label">Medical Imaging Files</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors duration-200">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="Medical_Imaging_Files"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Consent Section */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.Consent}
            onChange={handleConsentChange}
            className="consent-checkbox"
          />
          <label className="text-sm text-gray-700">
            I consent to share my data for medical analysis
          </label>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <button type="submit" className="medical-button-primary pulse-effect">
          Generate Report
        </button>
      </form>

      {report && (
        <div className="report-container">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900">Medical Report</h3>
          </div>
          <p className="text-gray-700 whitespace-pre-line">{report}</p>
        </div>
      )}

      {showSimulationButton && (
        <button
          onClick={handleShowSimulation}
          className="medical-button-success mt-4"
        >
          Start 3D Simulation
        </button>
      )}
    </div>
  );
};

export default HealthDataInput;