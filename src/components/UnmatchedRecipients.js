// src/components/UnmatchedRecipients.js
import React, { useState, useEffect } from 'react';

const UnmatchedRecipients = () => {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from unmatchedrecipients.json
    fetch('/unmatchedrecipients.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch unmatched recipients');
        }
        return response.json();
      })
      .then((data) => {
        setRecipients(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching unmatched recipients:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-8 text-gray-600">Loading unmatched recipients...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Unmatched Recipients</h1>
      {recipients.length === 0 ? (
        <p className="text-center text-gray-500">No unmatched recipients found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipients.map((recipient, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient ID: {recipient.patientId}</h2>
              <p><strong>Age:</strong> {recipient.age}</p>
              <p><strong>Gender:</strong> {recipient.gender}</p>
              <p><strong>Height:</strong> {recipient.height} cm</p>
              <p><strong>Weight:</strong> {recipient.weight} kg</p>
              <p><strong>Blood Type:</strong> {recipient.bloodType}</p>
              <p><strong>Organ Needed:</strong> {recipient.organNeeded}</p>
              <p><strong>Location:</strong> {recipient.currentLocation}</p>
              <p><strong>Saved On:</strong> {new Date(recipient.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UnmatchedRecipients;