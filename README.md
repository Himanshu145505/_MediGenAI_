# MediGen: AI-Driven Regenerative Healthcare 🫀


MediGen is an AI-powered platform revolutionizing the healthcare landscape through cutting-edge technologies, including AI, 3D bioprinting, and regenerative therapies.


### Key Features:
- 🧬 **Personalized Health Recommendations**: Tailored treatment plans based on patient data analysis.
- 🖨️ **3D Bioprinting Simulations**: Visualizing tissue and organ regeneration in real time.
- 💡 **Innovative Insights**: Addressing organ shortages while advancing precision medicine.


---


## 🚀 What We Offer:


- 📊 **Actionable Health Insights**: AI-powered analyses for better decision-making in medical care.
- 🧠 **AI-Driven Regenerative Therapies**: Pioneering solutions for organ regeneration.
- 🔗 **Seamless Integration of AI and Bioprinting**: Revolutionizing healthcare accessibility and innovation.


---


## 🌟 Features Overview:
1. **AI-Powered Medical Reports**:
   - Fast and accurate generation of detailed medical reports.
   - Evaluation of transplant needs with severity analysis.
   - Transplant-related 3D model suggestions for organ regeneration.


2. **User-Friendly Interface**:
   - Interactive React-based frontend for seamless user experience.
   - File upload support for medical imaging analysis.


3. **Integration with Google Gemini API**:
   - Harnessing advanced AI capabilities to process patient data and generate actionable insights.


---


## 🛠️ Getting Started:


### Prerequisites:
Ensure the following tools and libraries are installed on your system:
- **Node.js**: To run the React app.
- **Python 3.9+**: For the FastAPI backend.
- **Ngrok**: For public URL exposure.
- **Packages**:
  ```bash
  pip install fastapi uvicorn pydantic google-generativeai pyngrok nest-asyncio
  npm install
  ```


---


## ⚙️ Setup and Usage:


### Clone the Repository:
```bash
git clone https://github.com/AnushkaJainFirst/MediGenAI.git
cd MediGenAI
```


### Backend Setup:


1. Start the FastAPI backend:
   ```bash
   uvicorn main:app --reload
   ```
2. Note the **ngrok public URL** displayed in the terminal. Use this in the frontend API requests.


### Frontend Setup:


2. Install dependencies and start the React app:
   ```bash
   npm install
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to access the frontend.


---


## 🧪 Example Input for Testing:
```json
{
  "Name": "John Doe",
  "Age": 45,
  "Height": 175.5,
  "Weight": 80.2,
  "Gender": "Male",
  "SystolicBP": 140,
  "DiastolicBP": 90,
  "Cholesterol": 220,
  "Glucose": 110,
  "Smoking": "No",
  "AlcoholIntake": "Yes",
  "PhysicalActivity": "Moderate",
  "CardiovascularDisease": "No",
  "Medical_Imaging_Files": "CT_Scan_Abdomen_2023.jpg",
  "Consent": "Yes"
}
```


---


| Feature | Description |
|---------|-------------|
| **Medical Report Generation** | Users can input patient data and receive actionable medical insights. |
| **3D Simulation Integration** | Offers a button for 3D transplant simulations based on AI recommendations. |


---


## 📚 Documentation:
- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://reactjs.org/)
- [Google Gemini API](https://developers.google.com/)


---


## 🏗️ Future Enhancements:
- Add advanced visualization features for 3D bioprinting.
- Incorporate multi-language support for accessibility.
- Enhance AI capabilities with real-time medical imaging analysis.


---


Working Project Video Link : https://www.youtube.com/watch?v=1crMMqDI1Ck


---


Note : More Advancements to be done in the realistic 3D Model Generation.


Contributors 🤝 are welcome! Please open an issue or submit a pull request.





