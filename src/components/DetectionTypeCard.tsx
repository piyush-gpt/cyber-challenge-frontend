import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DetectionTypeProps } from '../services/types';

export const DetectionTypeCard: React.FC<DetectionTypeProps> = ({ 
  icon, 
  title, 
  description, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-left"
  >
    <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center text-blue-600 font-semibold">
      Get Started <ArrowRight className="ml-2 h-5 w-5" />
    </div>
  </button>
);