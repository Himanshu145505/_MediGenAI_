const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to your local MongoDB
mongoose.connect('mongodb://localhost:27017/Medigen_AI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a simple Recipient schema
const recipientSchema = new mongoose.Schema({
  patientId: String,
  age: String,
  gender: String,
  height: String,
  weight: String,
  bloodType: String,
  organNeeded: String,
  organSpecification: String,
  minOrganSize: String,
  maxOrganSize: String,
  hlaTypingA: String,
  hlaTypingB: String,
  hlaTypingDR: String,
  praPercentage: String,
  previousTransplants: String,
  previousTransplantDetails: String,
  cmvStatus: String,
  hepBStatus: String,
  hepCStatus: String,
  hivStatus: String,
  otherViralStatus: String,
  meldScore: String,
  urgencyLevel: String,
  dialysisStatus: String,
  dialysisDuration: String,
  hospitalizationStatus: String,
  survivalTimeWithoutTransplant: String,
  currentLocation: String,
  maxColdIschemiaTime: String,
  acceptExtendedCriteriaDonors: Boolean,
  maxTravelDistance: String,
  transportationArranged: Boolean,
  pediatricStatus: Boolean,
  acceptABOIncompatible: Boolean,
  desensitizationAvailable: Boolean,
  acceptConditionalOrgans: [String],
  transplantCommitteeApproval: Boolean,
  insuranceApproval: Boolean,
  nottoRegistrationNumber: String,
  livingDonorSearchActive: Boolean,
  searchPriorities: [String],
  saveSearch: Boolean,
  searchName: String,
  timestamp: String,
});

const SavedRecipient = mongoose.model('SavedRecipient', recipientSchema, 'savedRecipients');

// API to get saved recipients
app.get('/api/saved-recipients', async (req, res) => {
  try {
    const recipients = await SavedRecipient.find();
    res.json(recipients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipients' });
  }
});

// API to save a new recipient
app.post('/api/saved-recipients', async (req, res) => {
  try {
    const newRecipient = new SavedRecipient(req.body);
    await newRecipient.save();
    res.status(201).json(newRecipient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save recipient' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));