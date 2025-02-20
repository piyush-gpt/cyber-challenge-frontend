import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { PageProps } from '../services/types';
import { ResultDisplay } from '../components/ResultDisplay';
import { checkVideoFraud } from '../services/operations/CommonScamDetection';

export const DocumentPage: React.FC<PageProps> = ({ 
  onBack, 
  setFraudResult, 
  setIsAnalyzing, 
  isAnalyzing, 
  fraudResult 
}) => {
  const handleDocumentCheck = async (file: File) => {
    try {
      setIsAnalyzing(true);
      const result = await checkVideoFraud(file); // Replace with document-specific API
      setFraudResult(result.isFraud);
    } catch (error) {
      console.error('Error checking document for fraud:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.size > 5000000) {
        alert('File size exceeds the 5MB limit.');
        return;
      }
      handleDocumentCheck(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf'],
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={onBack} className="mb-8 text-blue-600 hover:text-blue-700 flex items-center">
        ← Back to detection types
      </button>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Forged Document Detection</h2>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition duration-300 ${
            isDragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-600'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600 mb-2">
            {isDragActive ? 'Drop the document here...' : 'Drag and drop document here, or click to select'}
          </p>
          <p className="text-sm text-gray-500">Supported formats: JPG, PNG, PDF</p>
        </div>
        <ResultDisplay fraudResult={fraudResult} isAnalyzing={isAnalyzing} />
      </div>
    </div>
  );
};