// UploadCenter.tsx
import React, { useState } from 'react';
import { UserX, FileCheck, Phone, Upload } from 'lucide-react';
import { DetectionType } from '../services/types';
import { DetectionTypeCard } from '../components/DetectionTypeCard';
import { VideoPage} from './VideoPage';
import { DocumentPage } from './DocumentPage';
import { CallPage } from './CallPage';
import { TextPage } from './TextPage';
import IdentityPage from './IdentityPage';
import SignaturePage from './signaturePage';

export const UploadCenter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<DetectionType>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fraudResult, setFraudResult] = useState<boolean | null>(null);

  const detectionTypes = [
    {
      type: 'video',
      icon: <UserX className="h-8 w-8" />,
      title: 'Fraud Video Detection',
      description: 'Analyze videos for signs of manipulation, fraud and deepfake'
    },
    {
      type: 'document',
      icon: <FileCheck className="h-8 w-8" />,
      title: 'Forged Document Detection',
      description: 'Analyze documents for signs of forgery or manipulation'
    },
    {
      type: 'call',
      icon: <Phone className="h-8 w-8" />,
      title: 'Fraud Call Detection',
      description: 'Analyze call recordings for scam patterns'
    },
    {
      type: 'text',
      icon: <Upload className="h-8 w-8" />,
      title: 'Text Fraud Detection',
      description: 'Analyze text input for potential fraud or manipulation'
    },
    {
      type: 'identity',
      icon: <UserX className="h-8 w-8" />,
      title: 'Fake Identity Detection',
      description: 'Verify identities and detect impersonation attempts'
    },
  ];

  const renderPage = () => {
    const props = {
      onBack: () => {
        setSelectedType(null);
        setFraudResult(null);
      },
      setFraudResult,
      setIsAnalyzing,
      isAnalyzing,
      fraudResult
    };

    switch (selectedType) {
      case 'video':
        return <VideoPage {...props} />;
      case 'document':
        return <SignaturePage/>;
      case 'call':
        return <CallPage {...props} />;
      case 'text':
        return <TextPage {...props} />;
        case 'identity':
          return <IdentityPage />;
      default:
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionTypes.map((type) => (
              <DetectionTypeCard
                key={type.type}
                {...type}
                onClick={() => setSelectedType(type.type as DetectionType)}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Fraud Detection</h1>
        <p className="text-xl text-gray-600">Upload suspicious content for instant AI analysis</p>
      </div>
      {renderPage()}
    </div>
  );
};

export default UploadCenter;