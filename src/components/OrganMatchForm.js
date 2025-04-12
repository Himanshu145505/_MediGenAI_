import React, { useState } from 'react';
import { matchOrgans } from '../utils/organMatchAlgo';
import { User, Calendar, Droplet, HeartPulse, MapPin, Scale, FileText } from 'lucide-react';
import "../index.css";

const OrganMatchForm = () => {
  const [formData, setFormData] = useState({
    patientId: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodType: "",
    organNeeded: "",
    organSpecification: "",
    minOrganSize: "",
    maxOrganSize: "",
    hlaTypingA: "",
    hlaTypingB: "",
    hlaTypingDR: "",
    praPercentage: "",
    previousTransplants: "No",
    previousTransplantDetails: "",
    cmvStatus: "",
    hepBStatus: "",
    hepCStatus: "",
    hivStatus: "",
    otherViralStatus: "",
    meldScore: "",
    urgencyLevel: "Standard",
    dialysisStatus: "",
    dialysisDuration: "",
    hospitalizationStatus: "Outpatient",
    survivalTimeWithoutTransplant: "",
    currentLocation: "",
    maxColdIschemiaTime: "",
    acceptExtendedCriteriaDonors: false,
    maxTravelDistance: "",
    transportationArranged: false,
    pediatricStatus: false,
    acceptABOIncompatible: false,
    desensitizationAvailable: false,
    acceptConditionalOrgans: [],
    transplantCommitteeApproval: false,
    insuranceApproval: false,
    nottoRegistrationNumber: "",
    livingDonorSearchActive: false,
    searchPriorities: [],
    saveSearch: false,
    searchName: "",
  });
  const [matches, setMatches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "acceptConditionalOrgans") {
        const updatedOptions = formData.acceptConditionalOrgans.includes(value)
          ? formData.acceptConditionalOrgans.filter(option => option !== value)
          : [...formData.acceptConditionalOrgans, value];
        setFormData({ ...formData, acceptConditionalOrgans: updatedOptions });
      } else if (name === "searchPriorities") {
        const updatedPriorities = formData.searchPriorities.includes(value)
          ? formData.searchPriorities.filter(priority => priority !== value)
          : [...formData.searchPriorities, value];
        setFormData({ ...formData, searchPriorities: updatedPriorities });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === "organNeeded") setFormData({ ...formData, organSpecification: "", [name]: value });
      if (name === "previousTransplants" && value === "No") setFormData({ ...formData, previousTransplantDetails: "", [name]: value });
      if (name === "dialysisStatus" && value !== "On Dialysis") setFormData({ ...formData, dialysisDuration: "", [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.saveSearch && !formData.searchName) {
      alert("Please enter a name for your saved search.");
      return;
    }
    console.log("Form Data Submitted:", formData); // Add this
    setIsLoading(true);
    const matchResults = matchOrgans(formData);
    setMatches(matchResults);
    setIsLoading(false);
    console.log("Recipient Data:", formData);
    console.log("Matches:", matchResults);
    alert(matchResults.length > 0 ? `Found ${matchResults.length} transplant-ready matches!` : "No transplant-ready matches found.");
  };

  const renderOrganSpecificFields = () => {
    switch (formData.organNeeded) {
      case "Liver":
        return (
          <div>
            <label className="medical-label">Liver Requirement</label>
            <select name="organSpecification" value={formData.organSpecification} onChange={handleChange} className="medical-input">
              <option value="">Select Requirement</option>
              <option value="Whole Liver">Whole Liver</option>
              <option value="Right Lobe">Right Lobe</option>
              <option value="Left Lobe">Left Lobe</option>
              <option value="Left Lateral Segment">Left Lateral Segment</option>
            </select>
          </div>
        );
      case "Lungs":
        return (
          <div>
            <label className="medical-label">Lung Requirement</label>
            <select name="organSpecification" value={formData.organSpecification} onChange={handleChange} className="medical-input">
              <option value="">Select Requirement</option>
              <option value="Single Right">Single Right Lung</option>
              <option value="Single Left">Single Left Lung</option>
              <option value="Double">Double Lung</option>
            </select>
          </div>
        );
      case "Kidney":
        return (
          <div>
            <label className="medical-label">Kidney Preference</label>
            <select name="organSpecification" value={formData.organSpecification} onChange={handleChange} className="medical-input">
              <option value="">Select Preference</option>
              <option value="Either">Either Kidney</option>
              <option value="Left">Left Kidney Preferred</option>
              <option value="Right">Right Kidney Preferred</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="medical-card max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <HeartPulse className="h-8 w-8 text-red-600 floating-element" />
        <h1 className="text-2xl font-bold text-gray-900">Find an Organ Match</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Patient Information */}
        <div className="section-card">
          <h2 className="section-title">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="medical-label">Patient ID/Hospital Reg. No.</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} required className="medical-input pl-10" placeholder="Patient Identifier" />
              </div>
            </div>
            <div>
              <label className="medical-label">Age</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="number" name="age" value={formData.age} onChange={handleChange} required className="medical-input pl-10" placeholder="Patient Age" min="0" max="120" />
              </div>
            </div>
            <div>
              <label className="medical-label">Gender</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select name="gender" value={formData.gender} onChange={handleChange} required className="medical-input pl-10">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="medical-label">Height (cm)</label>
              <input type="number" name="height" value={formData.height} onChange={handleChange} required className="medical-input" placeholder="Height in cm" min="0" />
            </div>
            <div>
              <label className="medical-label">Weight (kg)</label>
              <div className="relative">
                <Scale className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} required className="medical-input pl-10" placeholder="Weight in kg" min="0" />
              </div>
            </div>
            <div>
              <label className="medical-label">Blood Type</label>
              <div className="relative">
                <Droplet className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select name="bloodType" value={formData.bloodType} onChange={handleChange} required className="medical-input pl-10">
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Organ-Specific Requirements */}
        <div className="section-card">
          <h2 className="section-title">Organ-Specific Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="medical-label">Organ Needed</label>
              <select name="organNeeded" value={formData.organNeeded} onChange={handleChange} required className="medical-input">
                <option value="">Select Organ</option>
                <option value="Kidney">Kidney</option>
                <option value="Liver">Liver</option>
                <option value="Heart">Heart</option>
                <option value="Lungs">Lungs</option>
                <option value="Pancreas">Pancreas</option>
                <option value="Small Bowel">Small Bowel</option>
                <option value="Cornea">Cornea</option>
              </select>
            </div>
            {renderOrganSpecificFields()}
            <div>
              <label className="medical-label">Minimum Acceptable Organ Size (cm)</label>
              <input type="text" name="minOrganSize" value={formData.minOrganSize} onChange={handleChange} className="medical-input" placeholder="Minimum size if applicable" />
            </div>
            <div>
              <label className="medical-label">Maximum Acceptable Organ Size (cm)</label>
              <input type="text" name="maxOrganSize" value={formData.maxOrganSize} onChange={handleChange} className="medical-input" placeholder="Maximum size if applicable" />
            </div>
          </div>
        </div>

        {/* Medical Criteria */}
        <div className="section-card">
          <h2 className="section-title">Medical Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="medical-label">HLA-A Typing</label>
              <input type="text" name="hlaTypingA" value={formData.hlaTypingA} onChange={handleChange} className="medical-input" placeholder="e.g., A1, A2" />
            </div>
            <div>
              <label className="medical-label">HLA-B Typing</label>
              <input type="text" name="hlaTypingB" value={formData.hlaTypingB} onChange={handleChange} className="medical-input" placeholder="e.g., B7, B8" />
            </div>
            <div>
              <label className="medical-label">HLA-DR Typing</label>
              <input type="text" name="hlaTypingDR" value={formData.hlaTypingDR} onChange={handleChange} className="medical-input" placeholder="e.g., DR1, DR4" />
            </div>
            <div>
              <label className="medical-label">PRA Percentage</label>
              <input type="number" name="praPercentage" value={formData.praPercentage} onChange={handleChange} className="medical-input" placeholder="Panel Reactive Antibody %" min="0" max="100" />
            </div>
            <div>
              <label className="medical-label">Previous Transplants</label>
              <select name="previousTransplants" value={formData.previousTransplants} onChange={handleChange} className="medical-input">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            {formData.previousTransplants === "Yes" && (
              <div>
                <label className="medical-label">Previous Transplant Details</label>
                <input type="text" name="previousTransplantDetails" value={formData.previousTransplantDetails} onChange={handleChange} className="medical-input" placeholder="Organ, date, outcome" />
              </div>
            )}
            <div>
              <label className="medical-label">CMV Status</label>
              <select name="cmvStatus" value={formData.cmvStatus} onChange={handleChange} className="medical-input">
                <option value="">Select Status</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label className="medical-label">Hepatitis B Status</label>
              <select name="hepBStatus" value={formData.hepBStatus} onChange={handleChange} className="medical-input">
                <option value="">Select Status</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label className="medical-label">Hepatitis C Status</label>
              <select name="hepCStatus" value={formData.hepCStatus} onChange={handleChange} className="medical-input">
                <option value="">Select Status</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label className="medical-label">HIV Status</label>
              <select name="hivStatus" value={formData.hivStatus} onChange={handleChange} className="medical-input">
                <option value="">Select Status</option>
                <option value="Positive">Positive</option>
                <option value="Negative">Negative</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label className="medical-label">Other Viral Status</label>
              <input type="text" name="otherViralStatus" value={formData.otherViralStatus} onChange={handleChange} className="medical-input" placeholder="EBV, HHV-8, etc." />
            </div>
          </div>
        </div>

        {/* Urgency Factors */}
        <div className="section-card">
          <h2 className="section-title">Urgency Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.organNeeded === "Liver" && (
              <div>
                <label className="medical-label">MELD/PELD Score</label>
                <input type="number" name="meldScore" value={formData.meldScore} onChange={handleChange} className="medical-input" placeholder="Model for End-Stage Liver Disease" min="6" max="40" />
              </div>
            )}
            <div>
              <label className="medical-label">Urgency Level</label>
              <select name="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange} className="medical-input">
                <option value="Standard">Standard</option>
                <option value="Urgent">Urgent</option>
                <option value="Super-Urgent">Super-Urgent</option>
              </select>
            </div>
            {formData.organNeeded === "Kidney" && (
              <>
                <div>
                  <label className="medical-label">Dialysis Status</label>
                  <select name="dialysisStatus" value={formData.dialysisStatus} onChange={handleChange} className="medical-input">
                    <option value="">Select Status</option>
                    <option value="Not Required">Not Required</option>
                    <option value="On Dialysis">On Dialysis</option>
                    <option value="Peritoneal Dialysis">Peritoneal Dialysis</option>
                    <option value="Hemodialysis">Hemodialysis</option>
                  </select>
                </div>
                {(formData.dialysisStatus === "On Dialysis" || formData.dialysisStatus === "Peritoneal Dialysis" || formData.dialysisStatus === "Hemodialysis") && (
                  <div>
                    <label className="medical-label">Dialysis Duration (months)</label>
                    <input type="number" name="dialysisDuration" value={formData.dialysisDuration} onChange={handleChange} className="medical-input" placeholder="Duration in months" min="0" />
                  </div>
                )}
              </>
            )}
            <div>
              <label className="medical-label">Current Hospitalization Status</label>
              <select name="hospitalizationStatus" value={formData.hospitalizationStatus} onChange={handleChange} className="medical-input">
                <option value="Outpatient">Outpatient</option>
                <option value="Inpatient">Inpatient</option>
                <option value="ICU">ICU</option>
              </select>
            </div>
            <div>
              <label className="medical-label">Expected Survival Without Transplant</label>
              <select name="survivalTimeWithoutTransplant" value={formData.survivalTimeWithoutTransplant} onChange={handleChange} className="medical-input">
                <option value="">Select Estimate</option>
                <option value="< 1 week">Less than 1 week</option>
                <option value="1-4 weeks">1-4 weeks</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
                <option value="> 1 year">More than 1 year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logistical Parameters */}
        <div className="section-card">
          <h2 className="section-title">Logistical Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="medical-label">Current Location/Hospital</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="text" name="currentLocation" value={formData.currentLocation} onChange={handleChange} className="medical-input pl-10" placeholder="Hospital name & city" />
              </div>
            </div>
            <div>
              <label className="medical-label">Maximum Cold Ischemia Time (hours)</label>
              <input type="number" name="maxColdIschemiaTime" value={formData.maxColdIschemiaTime} onChange={handleChange} className="medical-input" placeholder="Maximum hours" min="0" />
            </div>
            <div>
              <label className="medical-label">Maximum Travel Distance (km)</label>
              <input type="number" name="maxTravelDistance" value={formData.maxTravelDistance} onChange={handleChange} className="medical-input" placeholder="Maximum distance" min="0" />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <input type="checkbox" name="acceptExtendedCriteriaDonors" checked={formData.acceptExtendedCriteriaDonors} onChange={handleChange} id="extendedCriteria" className="medical-checkbox" />
              <label htmlFor="extendedCriteria" className="text-sm text-gray-700">Accept Extended Criteria Donors</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="transportationArranged" checked={formData.transportationArranged} onChange={handleChange} id="transportation" className="medical-checkbox" />
              <label htmlFor="transportation" className="text-sm text-gray-700">Transportation Arrangements Available</label>
            </div>
          </div>
        </div>

        {/* Special Considerations */}
        <div className="section-card">
          <h2 className="section-title">Special Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="pediatricStatus" checked={formData.pediatricStatus} onChange={handleChange} id="pediatric" className="medical-checkbox" />
              <label htmlFor="pediatric" className="text-sm text-gray-700">Pediatric Status (for priority matching)</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="acceptABOIncompatible" checked={formData.acceptABOIncompatible} onChange={handleChange} id="aboIncompatible" className="medical-checkbox" />
              <label htmlFor="aboIncompatible" className="text-sm text-gray-700">Willing to Accept ABO-Incompatible with Treatment</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="desensitizationAvailable" checked={formData.desensitizationAvailable} onChange={handleChange} id="desensitization" className="medical-checkbox" />
              <label htmlFor="desensitization" className="text-sm text-gray-700">Desensitization Protocols Available</label>
            </div>
            <div className="md:col-span-2">
              <label className="medical-label">Accept Organs with Conditions</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="acceptConditionalOrgans" value="Fatty Liver" checked={formData.acceptConditionalOrgans.includes("Fatty Liver")} onChange={handleChange} id="fattyLiver" className="medical-checkbox" />
                  <label htmlFor="fattyLiver" className="text-sm text-gray-700">Fatty Liver</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="acceptConditionalOrgans" value="Smoker Lungs" checked={formData.acceptConditionalOrgans.includes("Smoker Lungs")} onChange={handleChange} id="smokerLungs" className="medical-checkbox" />
                  <label htmlFor="smokerLungs" className="text-sm text-gray-700">Smoker Lungs</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="acceptConditionalOrgans" value="Older Donor" checked={formData.acceptConditionalOrgans.includes("Older Donor")} onChange={handleChange} id="olderDonor" className="medical-checkbox" />
                  <label htmlFor="olderDonor" className="text-sm text-gray-700">Older Donor</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="acceptConditionalOrgans" value="Donation After Cardiac Death" checked={formData.acceptConditionalOrgans.includes("Donation After Cardiac Death")} onChange={handleChange} id="dcd" className="medical-checkbox" />
                  <label htmlFor="dcd" className="text-sm text-gray-700">Donation After Cardiac Death</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal/Administrative */}
        <div className="section-card">
          <h2 className="section-title">Legal/Administrative</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="transplantCommitteeApproval" checked={formData.transplantCommitteeApproval} onChange={handleChange} id="committeeApproval" className="medical-checkbox" />
              <label htmlFor="committeeApproval" className="text-sm text-gray-700">Transplant Committee Approval Status</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="insuranceApproval" checked={formData.insuranceApproval} onChange={handleChange} id="insuranceApproval" className="medical-checkbox" />
              <label htmlFor="insuranceApproval" className="text-sm text-gray-700">Insurance/Funding Approval Status</label>
            </div>
            <div>
              <label className="medical-label">NOTTO Registration Details</label>
              <input type="text" name="nottoRegistrationNumber" value={formData.nottoRegistrationNumber} onChange={handleChange} className="medical-input" placeholder="Registration number" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="livingDonorSearchActive" checked={formData.livingDonorSearchActive} onChange={handleChange} id="livingDonor" className="medical-checkbox" />
              <label htmlFor="livingDonor" className="text-sm text-gray-700">Living Donor Search Simultaneously Active</label>
            </div>
          </div>
        </div>

        {/* Search Priorities */}
        <div className="section-card">
          <h2 className="section-title">Search Priorities</h2>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-sm text-gray-600">Select factors that should be prioritized in matching:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="searchPriorities" value="HLA Matching" checked={formData.searchPriorities.includes("HLA Matching")} onChange={handleChange} id="hlaPriority" className="medical-checkbox" />
                <label htmlFor="hlaPriority" className="text-sm text-gray-700">HLA Matching</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="searchPriorities" value="Waiting Time" checked={formData.searchPriorities.includes("Waiting Time")} onChange={handleChange} id="waitingTimePriority" className="medical-checkbox" />
                <label htmlFor="waitingTimePriority" className="text-sm text-gray-700">Waiting Time</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="searchPriorities" value="Medical Urgency" checked={formData.searchPriorities.includes("Medical Urgency")} onChange={handleChange} id="urgencyPriority" className="medical-checkbox" />
                <label htmlFor="urgencyPriority" className="text-sm text-gray-700">Medical Urgency</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="searchPriorities" value="Size Matching" checked={formData.searchPriorities.includes("Size Matching")} onChange={handleChange} id="sizePriority" className="medical-checkbox" />
                <label htmlFor="sizePriority" className="text-sm text-gray-700">Size Matching</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="searchPriorities" value="Age Matching" checked={formData.searchPriorities.includes("Age Matching")} onChange={handleChange} id="agePriority" className="medical-checkbox" />
                <label htmlFor="agePriority" className="text-sm text-gray-700">Age Matching</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="searchPriorities" value="Geographic Proximity" checked={formData.searchPriorities.includes("Geographic Proximity")} onChange={handleChange} id="proximityPriority" className="medical-checkbox" />
                <label htmlFor="proximityPriority" className="text-sm text-gray-700">Geographic Proximity</label>
              </div>
            </div>
          </div>
        </div>

        {/* Save Search */}
        <div className="section-card">
          <h2 className="section-title">Save Search</h2>
          <div className="flex items-center gap-2 mb-3">
            <input type="checkbox" name="saveSearch" checked={formData.saveSearch} onChange={handleChange} id="saveSearch" className="medical-checkbox" />
            <label htmlFor="saveSearch" className="text-sm text-gray-700">Save this search for future reference</label>
          </div>
          {formData.saveSearch && (
            <div>
              <label className="medical-label">Search Name</label>
              <input type="text" name="searchName" value={formData.searchName} onChange={handleChange} className="medical-input" placeholder="Enter a name for this search" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            Search for Matching Organs
          </button>
        </div>
      </form>

      {isLoading && <p className="text-center text-blue-600 mt-4">Finding matches...</p>}

      {matches && !isLoading && (
        <div className="mt-8">
          <h2 className="section-title">Transplant-Ready Matches</h2>
          {matches.length > 0 ? (
            <ul className="space-y-4">
              {matches.map((donor) => (
               <li key={donor.donorId} className="match-result">
               <p><strong>Donor ID:</strong> {donor.donorId}</p>
               <p><strong>Age:</strong> {donor.age}</p>
               <p><strong>Gender:</strong> {donor.gender}</p>
               <p><strong>Height:</strong> {donor.height} cm</p>
               <p><strong>Weight:</strong> {donor.weight} kg</p>
               <p><strong>Blood Type:</strong> {donor.bloodType}</p>
               <p><strong>Organ:</strong> {donor.organAvailable} ({donor.organSpecification})</p>
               <p><strong>Organ Size:</strong> {donor.organSize} {donor.organAvailable === "Kidney" ? "cm" : "g"}</p>
               <p><strong>HLA Typing:</strong> A:{donor.hlaTypingA}, B:{donor.hlaTypingB}, DR:{donor.hlaTypingDR}</p>
               <p><strong>CMV Status:</strong> {donor.cmvStatus}</p>
               <p><strong>Hepatitis B Status:</strong> {donor.hepBStatus}</p>
               <p><strong>Hepatitis C Status:</strong> {donor.hepCStatus}</p>
               <p><strong>HIV Status:</strong> {donor.hivStatus}</p>
               <p><strong>Other Viral Status:</strong> {donor.otherViralStatus}</p>
               <p><strong>Crossmatch Result:</strong> {donor.crossmatchResult}</p>
               <p><strong>Location:</strong> {donor.location} (~{calculateDistance(formData.currentLocation, donor.location)} km)</p>
               <p><strong>Cold Ischemia Time:</strong> {donor.coldIschemiaTime} hours</p>
               <p><strong>Extended Criteria Donor:</strong> {donor.isExtendedCriteria ? "Yes" : "No"}</p>
               <p><strong>Conditions:</strong> {donor.conditions.length > 0 ? donor.conditions.join(", ") : "None"}</p>
               <p><strong>Status:</strong> Transplant-Ready</p>
             </li>
              ))}
            </ul>
          ) : (
            <p>No transplant-ready matches found.</p>
          )}
        </div>
      )}
    </div>
  );
};

const calculateDistance = (loc1, loc2) => {
  const locationMap = { "New York": 0, "Boston": 300, "Chicago": 1200 };
  return Math.abs((locationMap[loc1] || 0) - (locationMap[loc2] || 0)) || 1000;
};

export default OrganMatchForm;