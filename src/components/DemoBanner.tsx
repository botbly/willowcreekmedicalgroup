import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DemoBanner: React.FC = () => {
  return (
    <div className="bg-amber-100 border-b border-amber-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-amber-800">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm font-medium">
          This is a demonstration website. Willow Creek Medical Group is a fictional business and does not exist.
        </span>
      </div>
    </div>
  );
};

export default DemoBanner;