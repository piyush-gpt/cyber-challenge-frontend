import React, { useState } from 'react';
import { PageProps } from '../services/types';
import { ResultDisplay } from '../components/ResultDisplay';
import { checkAudioFraud } from '../services/operations/CommonScamDetection';

export const CallPage: React.FC<PageProps> = ({ 
  onBack, 
  setFraudResult, 
  setIsAnalyzing, 
  isAnalyzing, 
  fraudResult,
}) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [trans, setTrans] = useState<string | null>(null);
  const [protTips, setProtTips] = useState<string | null>(null);
  const [scamProb, setScamProb] = useState<number | null>(null);

  const handleAudioCheck = async () => {
    if (audioFile) {
      try {
        setIsAnalyzing(true);
        const result = await checkAudioFraud(audioFile);
        setTrans(result.transcript.toString());
        setFraudResult(result.isFraud);
        setProtTips(result.protectionTips.toString());
        setScamProb(result.scamProbability.valueOf())
      } catch (error) {
        console.error('Error checking audio for fraud:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={onBack} className="mb-8 text-blue-600 hover:text-blue-700 flex items-center">
        ← Back to detection types
      </button>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fraud Call Detection</h2>
        <div className="mt-8">
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => e.target.files && setAudioFile(e.target.files[0])}
            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg shadow-sm p-2"
          />
          <p className="text-sm text-gray-500 mt-2">Upload an audio file for analysis</p>
          <button
            onClick={handleAudioCheck}
            disabled={!audioFile}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg disabled:bg-gray-300"
          >
            Check Audio
          </button>
        </div>
        <ResultDisplay fraudResult={fraudResult} scamProb={scamProb} protectionTip={protTips} transcript={trans} isAnalyzing={isAnalyzing} />
      </div>
    </div>
  );
};