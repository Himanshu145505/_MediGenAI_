  import React, { useEffect, useState } from "react";
  import { useLocation } from "react-router-dom";
  import axios from "axios";
  import { Cuboid as Cube, Loader2, AlertCircle, Download } from "lucide-react";
  
  const ThreeDSimulation = () => {
    const location = useLocation();
    const [transplantPrompt, setTransplantPrompt] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modelLink, setModelLink] = useState("");
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      if (location.state?.transplantPrompt) {
        setTransplantPrompt(location.state.transplantPrompt);
      }
    }, [location.state]);
  
    useEffect(() => {
      const fetch3DModel = async () => {
        if (!transplantPrompt) return;
  
        setLoading(true);
        setError(null);
        setProgress(0);
  
        const YOUR_API = "msy_KZKdFhJUifc1g7d4Dt2xfSJqIYjldBzpn2Ui";
        const headers = { Authorization: `Bearer ${YOUR_API}` };
  
        const payload = {
          mode: "preview",
          prompt: transplantPrompt,
          negative_prompt: "low quality, low resolution, low poly, ugly",
          art_style: "sculpture",
          should_remesh: true,
        };
  
        try {
          // Step 1: Generate preview
          setProgress(10);
          const response_preview = await axios.post(
            "https://api.meshy.ai/openapi/v2/text-to-3d",
            payload,
            { headers }
          );
          const prevResult = response_preview.data.result;
          if (!prevResult) {
            throw new Error("Failed to generate preview model");
          }
          setProgress(30);
  
          // Wait for preview generation
          await new Promise((resolve) => setTimeout(resolve, 3 * 60 * 1000));
          setProgress(50);
  
          try {
            // Step 2: Refine the model
            const new_payload = {
              mode: "refine",
              enable_pbr: true,
              preview_task_id: prevResult,
              texture_richness: "medium",
            };
  
            const response_refine = await axios.post(
              "https://api.meshy.ai/openapi/v2/text-to-3d",
              new_payload,
              { headers }
            );
            const result = response_refine.data.result;
            if (!result) {
              throw new Error("Failed to refine the model");
            }
            setProgress(70);
  
            // Wait for model refinement
            await new Promise((resolve) => setTimeout(resolve, 4 * 60 * 1000));
            setProgress(90);
  
            // Step 3: Get the final 3D model link
            const taskId = result;
            const get_response = await axios.get(
              `https://api.meshy.ai/openapi/v2/text-to-3d/${taskId}`,
              { headers }
            );
  
            const modelUrl = get_response.data.model_urls.obj;
            setModelLink(modelUrl);
            setProgress(100);
          } catch (error) {
            console.error("Error refining the model:", error.response?.data || error.message);
            throw new Error("Error refining the model");
          }
        } catch (error) {
          setError(error.message || "Error fetching 3D model. Please try again later.");
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetch3DModel();
    }, [transplantPrompt]);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="medical-card">
            <div className="text-center mb-8">
              <div className="depth-effect inline-block bg-blue-50 p-4 rounded-full shadow-lg mb-4">
                <Cube className="w-12 h-12 text-blue-600 floating-element" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">3D Organ Simulation</h1>
              <p className="text-gray-600">Advanced medical visualization technology</p>
            </div>
  
            {loading && (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {progress < 30 && "Generating preview..."}
                    {progress >= 30 && progress < 70 && "Refining model..."}
                    {progress >= 70 && progress < 100 && "Finalizing..."}
                    {progress === 100 && "Complete!"}
                  </p>
                </div>
              </div>
            )}
  
            {error && (
              <div className="bg-red-50 text-red-600 p-6 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}
  
            {!loading && !error && modelLink && (
              <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                  <h2 className="font-semibold mb-1">3D Model Generated Successfully</h2>
                  <p className="text-sm">Your model is ready for viewing and download</p>
                </div>
  
                <a
                  href={modelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="medical-button-primary gentle-pulse-effect flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  View 3D Model
                </a>
  
                <div className="text-sm text-gray-500 text-center">
                  <p>The model will open in a new tab. You may need a compatible 3D viewer to view it.</p>
                </div>
              </div>
            )}
  
            {!loading && !error && !modelLink && (
              <div className="text-center text-gray-600">
                <p>No transplant simulation is currently required.</p>
                <p className="text-sm mt-2">Please initiate a new simulation request.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ThreeDSimulation;