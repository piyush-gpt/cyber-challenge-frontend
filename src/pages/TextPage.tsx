import React, { useState } from 'react';
import { PageProps } from '../services/types';
import { AlertTriangle, Shield, Info, CheckCircle } from 'lucide-react';
import { checkFraud } from '../services/operations/CommonScamDetection';

interface FraudResult {
  scamProbability: number;
  warning: string;
  protectionTips: string;
  ans: 'LABEL_0' | 'LABEL_1';
}

export const TextPage: React.FC<PageProps> = ({ 
  onBack, 
  setFraudResult, 
  setIsAnalyzing, 
  isAnalyzing, 
  // fraudResult 
}) => {
  const [textInput, setTextInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState<FraudResult | null>(null);

  const handleTextCheck = async () => {
    if (textInput.trim()) {
      try {
        setIsAnalyzing(true);
        const result = await checkFraud(textInput);
        setAnalysisResult(result);
        setFraudResult(result.ans === 'LABEL_1');
      } catch (error) {
        console.error('Error checking text for fraud:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const getResultDetails = (result: FraudResult) => {
    const isScam = result.ans === 'LABEL_1';
    const probability = result.scamProbability;

    if (isScam) {
      return {
        icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
        title: 'Scam Detected',
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        label: 'Scam Probability',
        description: `This message is likely to be a scam (${(probability * 100).toFixed(1)}% confidence)`
      };
    } else {
      return {
        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
        title: 'Legitimate Message',
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        label: 'Legitimacy Probability',
        description: `This message appears to be legitimate (${(probability * 100).toFixed(1)}% confidence)`
      };
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={onBack} className="mb-8 text-blue-600 hover:text-blue-700 flex items-center">
        ← Back to detection types
      </button>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Text Fraud Detection</h2>
        <div className="mt-8">
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter text to analyze for fraud"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm h-40"
          />
          <button
            onClick={handleTextCheck}
            disabled={!textInput.trim() || isAnalyzing}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg disabled:bg-gray-300 hover:bg-blue-700 transition-colors"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
          </button>
        </div>

        {isAnalyzing && (
          <div className="mt-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
            <p className="mt-2 text-gray-600">Analyzing content...</p>
          </div>
        )}

        {analysisResult && !isAnalyzing && (
          <div className="mt-8 space-y-6">
            {/* Result Header */}
            {(() => {
              const details = getResultDetails(analysisResult);
              return (
                <div className={`p-4 rounded-lg ${details.bg} border ${details.border}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {details.icon}
                      <div>
                        <h3 className={`font-semibold ${details.color}`}>
                          {details.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {details.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Warning Message (only show for scams) */}
            {analysisResult.ans === 'LABEL_1' && analysisResult.warning && (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Info className="h-6 w-6 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-1">Warning</h3>
                    <p className="text-yellow-700">{analysisResult.warning}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Protection Tips */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Protection Tips</h3>
                  <p className="text-blue-700">{analysisResult.protectionTips}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};