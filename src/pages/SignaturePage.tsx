import React, { useState } from "react";

interface SignatureAnalyzerProps {}

const SignaturePage: React.FC<SignatureAnalyzerProps> = () => {
  const [file, setFile] = useState<File | null>(null); // State to store the uploaded file
  const [prediction, setPrediction] = useState<string>(""); // State to store the prediction result
  const [loading, setLoading] = useState<boolean>(false); // State to track loading status
  const [error, setError] = useState<string>(""); // State to handle errors

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(""); // Clear any previous errors
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload an image file.");
      return;
    }

    setLoading(true); // Start loading
    setError(""); // Clear any previous errors
    setPrediction(""); // Clear any previous predictions

    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("sign", file);

      // Send the file to the backend API
      const response = await fetch("http://localhost:5000/api/signature/analyze-signature", {
        method: "POST",
        body: formData,
      });

      // Parse the response
      const data = await response.json();
      console.log("data", data)
      if (response.ok) {
        setPrediction(data.prediction[0]); // Set the prediction result
      } else {
        setError(data.error || "Failed to analyze the signature.");
      }
    } catch (err) {
      setError("An error occurred while analyzing the signature.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Signature Analyzer</h2>
      <p>Upload an image of a signature to check if it's genuine or forged.</p>

      {/* File Input */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ padding: "10px", width: "100%" }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Signature"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Prediction Result */}
      {prediction && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: prediction.includes("Genuine")
              ? "#d4edda"
              : "#f8d7da",
            color: prediction.includes("Genuine") ? "#155724" : "#721c24",
            borderRadius: "5px",
          }}
        >
          <strong>Prediction:</strong> {prediction}
        </div>
      )}
    </div>
  );
};

export default SignaturePage;