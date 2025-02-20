import React from 'react';
import { FileCheck, AlertTriangle } from 'lucide-react';
import { ResultDisplayProps } from '../services/types';

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ 
  fraudResult, 
  isAnalyzing,
  transcript,
  protectionTip,
  scamProb
}) => (
  <>

    {!!transcript && (
      <div className={`mt-6 ${!!transcript ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} border p-4 rounded-lg`}>
        <div className="flex items-start">
          {!!transcript? (
            <FileCheck className="h-6 w-6 text-green-600 mr-3" />
          ) : (
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
          )}
          <div>
            <h3 className="font-semibold">{!!transcript ? 'Transcript' : 'Audio to transcript conversion'}</h3>
            <p>{!!transcript ? transcript : 'Transcript Conversion Problem'}</p>
          </div>
        </div>
      </div>
    )}

    {fraudResult !== null && (
      <div className={`mt-6 ${!fraudResult ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} border p-4 rounded-lg`}>
        <div className="flex items-start">
          {!fraudResult ? (
            <FileCheck className="h-6 w-6 text-green-600 mr-3" />
          ) : (
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
          )}
          <div>
            <h3 className="font-semibold">{!fraudResult ? 'No Scam detected' : 'Scam detected'}</h3>
            <span><p>{!fraudResult ? 'The uploaded content is clean.' : 'Suspicious activity/scam identified in the content.'}</p></span>
            <span>
              <p>
                {scamProb != null 
                  ? <span style={{ color: 'red' }}> Probability: {scamProb}</span> 
                  : ''}
              </p>
            </span>

          </div>
        </div>
      </div>
    )}

    {!!protectionTip && (
      <div className={`mt-6 ${!!protectionTip ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} border p-4 rounded-lg`}>
        <div className="flex items-start">
          {!!protectionTip? (
            <FileCheck className="h-6 w-6 text-green-600 mr-3" />
          ) : (
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
          )}
          <div>
            <h3 className="font-semibold">{!!protectionTip ? 'Protection Tip' : ''}</h3>
            <p>{!!protectionTip ? protectionTip : 'No Tips'}</p>
          </div>
        </div>
      </div>
    )}

    {isAnalyzing && (
      <div className="mt-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
        <p className="mt-2 text-gray-600">Analyzing content...</p>
      </div>
    )}
  </>
);