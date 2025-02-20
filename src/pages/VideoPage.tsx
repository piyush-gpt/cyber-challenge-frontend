import React, { useState } from 'react';
import { PageProps } from '../services/types';
import { AlertTriangle, Shield, Info, CheckCircle, FileText, MessageSquare } from 'lucide-react';
import { checkVideoFraud } from '../services/operations/CommonScamDetection';

interface VideoAnalysisResult {
  transcript: string;
  scamResult: {
    scamProbability: number;
    warning: string;
    protectionTips: string;
    ans: 'LABEL_0' | 'LABEL_1';
  };
  deepfakeResult: {
    prediction: string;
    confidence: number;
  };
}

export const VideoPage: React.FC<PageProps> = ({
  onBack,
  setFraudResult,
  setIsAnalyzing,
  isAnalyzing,
  fraudResult
}) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<VideoAnalysisResult | null>(null);

  const handleVideoCheck = async () => {
    if (videoFile) {
      try {
        setIsAnalyzing(true);
        const result = await checkVideoFraud(videoFile);
        setAnalysisResult(result);
        // Consider both deepfake and transcript scam analysis
        setFraudResult(result.scamResult.ans === 'LABEL_1' || result.deepfakeResult.prediction === 'FAKE');
      } catch (error) {
        console.error('Error checking video for fraud:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const getDeepfakeStatus = () => {
    if (!analysisResult?.deepfakeResult) return null;

    const isFake = analysisResult.deepfakeResult.prediction === 'FAKE';
    const confidencePercentage = (analysisResult.deepfakeResult.confidence );
    
    return {
      icon: isFake ? 
        <AlertTriangle className="h-6 w-6 text-red-600" /> : 
        <CheckCircle className="h-6 w-6 text-green-600" />,
      title: isFake ? 'Deepfake Video Detected' : 'Authentic Video',
      color: isFake ? 'text-red-600' : 'text-green-600',
      bg: isFake ? 'bg-red-50' : 'bg-green-50',
      border: isFake ? 'border-red-200' : 'border-green-200',
      confidence: confidencePercentage
    };
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={onBack} className="mb-8 text-blue-600 hover:text-blue-700 flex items-center">
        ← Back to detection types
      </button>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Video Analysis</h2>
        <div className="mt-8">
          <input
            type="file"
            accept="video/*"
            onChange={(e) => e.target.files && setVideoFile(e.target.files[0])}
            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg shadow-sm p-2"
          />
          <p className="text-sm text-gray-500 mt-2">Upload a video for deepfake and content analysis</p>
          <button
            onClick={handleVideoCheck}
            disabled={!videoFile || isAnalyzing}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg disabled:bg-gray-300 hover:bg-blue-700 transition-colors"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Video'}
          </button>
        </div>

        {isAnalyzing && (
          <div className="mt-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
            <p className="mt-2 text-gray-600">Analyzing video content...</p>
          </div>
        )}

        {analysisResult && !isAnalyzing && (
          <div className="mt-8 space-y-6">
            {/* Deepfake Analysis Section */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Authenticity Check</h3>
              {(() => {
                const status = getDeepfakeStatus();
                if (!status) return null;
                return (
                  <div className={`p-4 rounded-lg ${status.bg} border ${status.border}`}>
                    <div className="flex items-center space-x-3">
                      {status.icon}
                      <div>
                        <h3 className={`font-semibold ${status.color}`}>
                          {status.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Confidence: {status.confidence}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Content Analysis Section */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Analysis</h3>
              
              {/* Transcript Display */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-gray-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Transcript</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{analysisResult.transcript}</p>
                  </div>
                </div>
              </div>

              {/* Transcript Analysis Results */}
              <div className="mt-4">
                <div className="flex items-start space-x-3 mb-2">
                  <MessageSquare className="h-6 w-6 text-gray-600" />
                  <h4 className="font-semibold text-gray-800">Transcript Analysis</h4>
                </div>

                {analysisResult.scamResult.ans === 'LABEL_1' ? (
                  <>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-4">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-yellow-800 mb-1">Warning</h3>
                          <p className="text-yellow-700">{analysisResult.scamResult.warning}</p>
                          <p className="text-yellow-600 text-sm mt-2">
                            Scam Probability: {(analysisResult.scamResult.scamProbability * 100).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-6 w-6 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-blue-800 mb-2">Protection Tips</h3>
                          <p className="text-blue-700">{analysisResult.scamResult.protectionTips}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-green-800">Safe Content</h3>
                        <p className="text-green-700">No suspicious content detected in the transcript.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};