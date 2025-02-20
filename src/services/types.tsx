import { ReactNode } from 'react';

export type DetectionType ='video' |  'identity' | 'document' | 'call' | 'text' | null;

export interface DetectionTypeProps {
  type: string;
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export interface PageProps {
  onBack: () => void;
  setFraudResult: (result: boolean | null) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  isAnalyzing: boolean;
  fraudResult: boolean | null;
}

export interface ResultDisplayProps {
  fraudResult: boolean | null;
  isAnalyzing: boolean;
  transcript: string | null;
  protectionTip: string | null;
  scamProb: number | null;
}