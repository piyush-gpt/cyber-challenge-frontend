import React, { useState } from "react";
import axios from "axios";

const IdentityPage: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [result, setResult] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !image) return alert("Please provide both name and image.");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", image);

        try {
            const response = await axios.post("http://localhost:5000/api/identity/verify", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response);
            setResult(response.data.message);
        } catch (error) {
            setResult("Verification failed.");
        }
    };

    return (
        // <div className="container">
        //     <h2>Police Officer Verification</h2>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             placeholder="Officer Name"
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //             required
        //         />
        //         <input
        //             type="file"
        //             accept="image/*"
        //             onChange={(e) => {
        //                 if (e.target.files && e.target.files.length > 0) {
        //                     setImage(e.target.files[0]);  // Only set if a file is selected
        //                 } else {
        //                     setImage(null);  // Reset state if no file selected
        //                 }
        //             }}
        //             required
        //         />

        //         <button type="submit">Verify</button>
        //     </form>
        //     {result && <p>{result}</p>}
        // </div>

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Police Officer Verification</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Officer Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        required
                        className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Verify
                    </button>
                </form>
                {/* {result && <p className="text-center mt-4 text-gray-600">{result}</p>} */}
                {result && (
                    <p 
                        className={`text-center mt-4 font-semibold ${result.toLowerCase().includes('scam') ? 'text-red-600' : 'text-green-600'}`}
                    >
                        {result}
                    </p>
                )}
            </div>
        </div>
    );
};

export default IdentityPage;
