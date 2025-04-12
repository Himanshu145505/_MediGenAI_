import { donorData } from '../data/donors';

const bloodTypeCompatibility = {
  "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A-": ["A-", "A+", "AB-", "AB+"],
  "A+": ["A+", "AB+"],
  "B-": ["B-", "B+", "AB-", "AB+"],
  "B+": ["B+", "AB+"],
  "AB-": ["AB-", "AB+"],
  "AB+": ["AB+"],
};

const defaultColdIschemiaLimits = {
  Kidney: 24,
  Liver: 12,
  Heart: 6,
  Lungs: 6,
  Pancreas: 12,
  "Small Bowel": 10,
  Cornea: Infinity,
};

export const matchOrgans = (recipientData) => {
  console.log("Recipient Data in matchOrgans:", recipientData);
  const compatibleDonors = donorData.filter((donor) => {
    console.log(`Checking Donor ${donor.donorId}:`, donor);

    // Blood Type
    const isBloodCompatible =
      bloodTypeCompatibility[donor.bloodType]?.includes(recipientData.bloodType) ||
      (recipientData.acceptABOIncompatible && recipientData.desensitizationAvailable);
    if (!isBloodCompatible) {
      console.log(`${donor.donorId} failed: Blood type mismatch (Donor: ${donor.bloodType}, Recipient: ${recipientData.bloodType})`);
      return false;
    }

    // Organ Match
    if (donor.organAvailable !== recipientData.organNeeded) {
      console.log(`${donor.donorId} failed: Organ mismatch (Donor: ${donor.organAvailable}, Recipient: ${recipientData.organNeeded})`);
      return false;
    }
    if (
      recipientData.organSpecification &&
      donor.organSpecification &&
      recipientData.organSpecification !== "Either" &&
      donor.organSpecification !== recipientData.organSpecification
    ) {
      console.log(`${donor.donorId} failed: Organ specification mismatch (Donor: ${donor.organSpecification}, Recipient: ${recipientData.organSpecification})`);
      return false;
    }

    // Size Compatibility
    const donorSize = parseFloat(donor.organSize) || 0;
    const minSize = parseFloat(recipientData.minOrganSize) || 0;
    const maxSize = parseFloat(recipientData.maxOrganSize) || Infinity;
    if (donorSize < minSize || donorSize > maxSize) {
      console.log(`${donor.donorId} failed: Size mismatch (Donor: ${donorSize}, Range: ${minSize}-${maxSize})`);
      return false;
    }

    // Age Matching
    const ageDiff = Math.abs(donor.age - recipientData.age);
    const ageLimit = recipientData.pediatricStatus ? 10 : 20;
    if (ageDiff > ageLimit && recipientData.urgencyLevel !== "Super-Urgent") {
      console.log(`${donor.donorId} failed: Age difference too large (Diff: ${ageDiff}, Limit: ${ageLimit})`);
      return false;
    }

    // Weight Matching
    const recipientWeight = parseFloat(recipientData.weight) || 0;
    const donorWeight = parseFloat(donor.weight) || 0;
    const weightRatio = donorWeight / recipientWeight;
    if (recipientWeight && donorWeight && (weightRatio < 0.7 || weightRatio > 1.3)) {
      console.log(`${donor.donorId} failed: Weight ratio out of range (Ratio: ${weightRatio})`);
      return false;
    }

    // Viral Status
    if (
      recipientData.hivStatus === "Negative" &&
      donor.hivStatus === "Positive" &&
      !recipientData.acceptConditionalOrgans.includes("HIV Positive Donors")
    ) {
      console.log(`${donor.donorId} failed: HIV mismatch`);
      return false;
    }
    if (
      recipientData.hepBStatus === "Negative" &&
      donor.hepBStatus === "Positive" &&
      !recipientData.acceptConditionalOrgans.includes("Hepatitis B Positive Donors")
    ) {
      console.log(`${donor.donorId} failed: Hep B mismatch`);
      return false;
    }
    if (
      recipientData.hepCStatus === "Negative" &&
      donor.hepCStatus === "Positive" &&
      !recipientData.acceptConditionalOrgans.includes("Hepatitis C Positive Donors")
    ) {
      console.log(`${donor.donorId} failed: Hep C mismatch`);
      return false;
    }
    if (
      recipientData.cmvStatus === "Negative" &&
      donor.cmvStatus === "Positive" &&
      !recipientData.acceptConditionalOrgans.includes("CMV Positive Donors")
    ) {
      console.log(`${donor.donorId} failed: CMV mismatch`);
      return false;
    }
    if (
      recipientData.otherViralStatus &&
      donor.otherViralStatus &&
      recipientData.otherViralStatus !== donor.otherViralStatus &&
      !recipientData.acceptConditionalOrgans.includes(donor.otherViralStatus)
    ) {
      console.log(`${donor.donorId} failed: Other viral status mismatch (Donor: ${donor.otherViralStatus}, Recipient: ${recipientData.otherViralStatus})`);
      return false;
    }

    // HLA Matching
    if (
      recipientData.hlaTypingA &&
      donor.hlaTypingA &&
      recipientData.hlaTypingA !== donor.hlaTypingA
    ) {
      console.log(`${donor.donorId} failed: HLA-A mismatch (Donor: ${donor.hlaTypingA}, Recipient: ${recipientData.hlaTypingA})`);
      return false;
    }
    if (
      recipientData.hlaTypingB &&
      donor.hlaTypingB &&
      recipientData.hlaTypingB !== donor.hlaTypingB
    ) {
      console.log(`${donor.donorId} failed: HLA-B mismatch (Donor: ${donor.hlaTypingB}, Recipient: ${recipientData.hlaTypingB})`);
      return false;
    }
    if (
      recipientData.hlaTypingDR &&
      donor.hlaTypingDR &&
      recipientData.hlaTypingDR !== donor.hlaTypingDR
    ) {
      console.log(`${donor.donorId} failed: HLA-DR mismatch (Donor: ${donor.hlaTypingDR}, Recipient: ${recipientData.hlaTypingDR})`);
      return false;
    }

    // PRA/Crossmatch
    const pra = parseFloat(recipientData.praPercentage) || 0;
    if (pra > 50 && donor.crossmatchResult === "Positive" && !recipientData.desensitizationAvailable) {
      console.log(`${donor.donorId} failed: PRA/Crossmatch issue (PRA: ${pra}, Crossmatch: ${donor.crossmatchResult})`);
      return false;
    }

    // Cold Ischemia Time
    const maxColdTime = parseFloat(recipientData.maxColdIschemiaTime) || defaultColdIschemiaLimits[recipientData.organNeeded] || Infinity;
    if (donor.coldIschemiaTime > maxColdTime) {
      console.log(`${donor.donorId} failed: Cold ischemia time exceeded (Donor: ${donor.coldIschemiaTime}, Max: ${maxColdTime})`);
      return false;
    }

    // Extended Criteria and Conditions
    if (!recipientData.acceptExtendedCriteriaDonors && donor.isExtendedCriteria) {
      console.log(`${donor.donorId} failed: Extended criteria not accepted`);
      return false;
    }
    if (
      donor.conditions.some(
        (condition) => !recipientData.acceptConditionalOrgans.includes(condition)
      )
    ) {
      console.log(`${donor.donorId} failed: Unaccepted conditions (${donor.conditions})`);
      return false;
    }

    // Distance
    const maxDistance = parseInt(recipientData.maxTravelDistance) || Infinity;
    const distance = calculateDistance(recipientData.currentLocation, donor.location);
    if (distance > maxDistance) {
      console.log(`${donor.donorId} failed: Distance exceeded (Distance: ${distance}, Max: ${maxDistance})`);
      return false;
    }

    console.log(`${donor.donorId} passed all checks`);
    return true;
  });

  console.log("Compatible Donors:", compatibleDonors);
  return compatibleDonors; // Skip sorting for now
};

const calculateDistance = (loc1, loc2) => {
  const locationMap = { "New York": 0, "Boston": 300, "Chicago": 1200 };
  const dist1 = locationMap[loc1];
  const dist2 = locationMap[loc2];
  if (dist1 === undefined) console.log(`Location not found in map: ${loc1}`);
  if (dist2 === undefined) console.log(`Location not found in map: ${loc2}`);
  const distance = Math.abs((dist1 ?? 0) - (dist2 ?? 0));
  console.log(`Distance between ${loc1} and ${loc2}: ${distance}km`);
  return distance;
};