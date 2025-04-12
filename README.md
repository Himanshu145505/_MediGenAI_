# MediGen AI: Doctor-Centric Organ Transplant Intelligence 🧠🫀

**MediGen AI** is a cutting-edge, doctor-first platform revolutionizing organ transplantation using advanced AI, 3D simulations, and real-time alerts. From intelligent organ matching to transplant analysis and educational tools, MediGen empowers medical professionals to make faster, smarter, and safer decisions.

---

## 🔍 Core Purpose

> Transform the way doctors handle organ transplants — by providing **AI-powered precision**, **reliable simulations**, and **real-time donor alerts** — all in one seamless platform.

---

## 💡 Key Features

### 🧬 Organ Match Engine (RAG-Based)
- Finds **ideal donor-recipient matches** using advanced Retrieval-Augmented Generation (RAG) algorithms.
- Reduces dependency on basic `if-else` logic, ensuring **data-backed medical recommendations**.
- Updates recipient status when a match is found and instantly **notifies the doctor**.

### 🧾 Transplant Analysis & Pre-Op Report
- Generates a **comprehensive pre-transplant report**, visualizing compatibility, potential risks, and predicted outcomes.
- Helps doctors simulate how the transplant might integrate with the recipient’s body.

### 🧠 3D Simulation Models
- Interactive, educational 3D visuals of organs, designed for **junior doctors** and specialists alike.
- Enhance surgical prep and patient understanding using **immersive anatomical analysis**.

### ⚠️ Real-Time Match Alerts
- Doctors are instantly notified when a **previously unmatched recipient** finds a compatible donor.
- Ensures **zero-delay intervention** and life-saving decisions.

### 📁 Doctor-Centric Design
- Built specifically for medical professionals — streamlined, responsive, and secure.
- Upload and view medical imaging data alongside generated reports and insights.

---

## ⚙️ Tech Stack

- **Frontend**: React.js
- **Backend**: FastAPI
- **Database**: MongoDB, Firebase
- **AI/ML**: Gemini API, AutoML, Vertex AI
- **3D Visualization**: Custom Simulation Renderer
- **Matching Logic**: RAG Pipelines, Custom Embedding Matching

---

## 🚀 Setup Guide

### Prerequisites

Install the following:
- **Node.js**
- **Python 3.9+**
- **Ngrok**
- Python dependencies:
  ```bash
  pip install fastapi uvicorn pydantic google-generativeai pyngrok nest-asyncio
  ```
- Node dependencies:
  ```bash
  npm install
  ```

---

### 🔧 Local Deployment

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/Himanshu145505/_MediGenAI_
   cd MediGenAI
   ```

2. **Start Backend (FastAPI)**:
   ```bash
   uvicorn main:app --reload
   ```

3. **Expose Public URL (Ngrok)**:
   ```bash
   ngrok http 8000
   ```
   > Replace API endpoints in frontend with the Ngrok URL.

4. **Start Frontend (React)**:
   ```bash
   npm start
   ```

---

## 🧪 Sample Input (for testing)
```json
{
  Patient Information:

Patient ID/Hospital Reg. No.: "P12555" (unique ID)

Age: "35" (matches D001)

Gender: "Male" (matches D001)

Height (cm): "170" (matches D001)

Weight (kg): "70" (matches D001)

Blood Type: "O+" (matches D001)

Organ-Specific Requirements:

Organ Needed: "Kidney" (matches D001)

Kidney Preference: "Left" (matches D001)

Minimum Acceptable Organ Size (cm): "11" (D001’s 11.5 is ≥ 11)

Maximum Acceptable Organ Size (cm): "12" (D001’s 11.5 is ≤ 12)
Medical Criteria:

HLA-A Typing: "A2" (matches D001)
HLA-B Typing: "B7" (matches D001)
HLA-DR Typing: "DR4" (matches D001)
PRA Percentage: "0" (low, matches D001’s Negative crossmatch)
Previous Transplants: "No" (no conflict)
Previous Transplant Details: "" (blank)
CMV Status: "Negative" (matches D001)
Hepatitis B Status: "Negative" (matches D001)
Hepatitis C Status: "Negative" (matches D001)
HIV Status: "Negative" (matches D001)
Other Viral Status: "EBV-" (matches D001)
Urgency Factors:
MELD/PELD Score: "" (blank, not applicable for kidney)
Urgency Level: "Standard" (no urgency conflict)
Dialysis Status: "Not Required" (no conflict)
Dialysis Duration (months): "" (blank)
Current Hospitalization Status: "Outpatient" (no conflict)
Expected Survival Without Transplant: "" (blank, optional)
Logistical Parameters:
Current Location/Hospital: "Delhi" (matches D001, distance = 0 km)
Maximum Cold Ischemia Time (hours): "24" (D001’s 12 is ≤ 24)
Maximum Travel Distance (km): "500" (Delhi to Delhi = 0 km, well within)
Accept Extended Criteria Donors: Unchecked (false, D001 isn’t ECD)
Transportation Arranged: Unchecked (false, no conflict)
Special Considerations:
Pediatric Status: Unchecked (false, adult patient)
Accept ABO-Incompatible: Unchecked (false, not needed)
Desensitization Available: Unchecked (false, not needed)
Accept Organs with Conditions: All unchecked (D001 has none)
Legal/Administrative:
Transplant Committee Approval: Unchecked (false, optional)
Insurance/Funding Approval: Unchecked (false, optional)
NOTTO Registration Details: "" (blank, optional)
Living Donor Search Simultaneously Active: Unchecked (false, optional)
Search Priorities:
Check: "HLA Matching" (ensures D001’s HLA match is prioritized)
Others: Unchecked
Save Search:
Save this search for future reference: Unchecked (false)
Search Name: "" (blank)
}
```

---

## 📦 Feature Overview

| Feature                         | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| **AI-Powered Organ Matching**    | Matches donors and recipients using advanced AI, not simple rules.         |
| **Transplant Analysis**          | Generates a risk report with compatibility score and 3D insights.          |
| **Real-Time Match Alert**        | Notifies doctor when a match is found for an unmatched recipient.          |
| **3D Simulations**               | Visual aid for educational and clinical evaluation of transplant process.  |
| **Medical Report Generation**    | Upload patient data and imaging to receive detailed AI-generated reports. |

---

## 📽️ Demo Video

Watch how MediGen AI works in real-time:
**[👉 Project Walkthrough]()**

---

## 📚 Documentation Links

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [React.js](https://reactjs.org/)
- [Google Gemini API](https://developers.google.com/)
- [Ngrok](https://ngrok.com/)

---

## 🔮 Roadmap

- [ ] **Federated Learning Integration** for more secure health data processing.
- [ ] **Voice Interface** for hands-free interaction by surgeons.
- [ ] **Advanced 3D Organ Builder** with real-world transplant models.
- [ ] **Hospital Integration API** for live registry access.

---

## 🤝 Contributions

We welcome contributions from developers, designers, and healthcare professionals.  
Feel free to open an issue, fork the repo, or raise a PR to improve MediGen AI.

---

> *Empowering doctors with AI — because every second counts in saving a life.* ❤️‍🔥
```
