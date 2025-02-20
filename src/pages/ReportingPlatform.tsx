import React, { useState } from 'react';
import { AlertTriangle, FileText, Send, Upload } from 'lucide-react';
import { ReportScam } from '../services/operations/ReportScam';

export default function ReportingPlatform() {
  const [formData, setFormData] = useState({
    incidentType: '',
    date: '',
    description: '',
    amount: '',
    contactMethod: '',
    // evidenceDescription: '',
    scamMessage: '',
    audioEvidence: null,
    videoEvidence: null,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.scamMessage && !formData.audioEvidence && !formData.videoEvidence) {
      alert('Please provide at least one type of evidence.');
      return;
    }
    // alert('Report submitted successfully!');
    ReportScam(formData)
  };

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {  // ✅ Correct condition
        const file = e.target.files[0]; // Get the first file
        console.log('File selected:', file);

        setFormData((prevData: any) => ({
            ...prevData,
            [e.target.name]: file, // ✅ Store the file correctly
        }));
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report a Scam</h1>
          <p className="text-xl text-gray-600">Help us fight digital fraud by reporting suspicious activities</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                If you're currently being targeted by scammers or in immediate danger, please contact law enforcement immediately at 100.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type of Incident</label>
              <select name="incidentType" value={formData.incidentType} onChange={handleChange} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                <option value="">Select incident type</option>
                <option value="fake_arrest">Fake Arrest Threat</option>
                <option value="document_forgery">Forged Documents</option>
                <option value="impersonation">Law Enforcement Impersonation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Incident</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount Involved (if any)</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="₹" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How were you contacted?</label>
              <input type="text" name="contactMethod" value={formData.contactMethod} onChange={handleChange} placeholder="Phone call, WhatsApp, etc." className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Incident Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Please provide as much detail as possible about the incident..." ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Provide Evidence</label>
              {/* <textarea name="evidenceDescription" value={formData.evidenceDescription} onChange={handleChange} rows={3} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe any evidence you have (screenshots, recordings, etc.)..."></textarea> */}
              
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700">Provide Scam message (if any)</label>
                <input type="text" name="scamMessage" onChange={handleChange} className="w-full border-gray-300 shadow-sm" />
              </div>
              
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700">Upload Audio Evidence (if any)</label>
                <input type="file" name="audioEvidence" onChange={handleFileChange} accept="audio/*" className="w-full border-gray-300 shadow-sm" />
              </div>
              
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700">Upload Video Evidence (if any)</label>
                <input type="file" name="videoEvidence" onChange={handleFileChange} accept="video/*" className="w-full border-gray-300 shadow-sm" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center text-gray-600">
                <FileText className="h-5 w-5 mr-2" />
                <span className="text-sm">All information is kept confidential</span>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                Submit Report
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
