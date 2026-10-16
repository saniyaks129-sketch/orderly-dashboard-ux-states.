import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      {/* Metric Cards Skeletons */}
      <div className="grid grid-cols-3 gap-4">
        <div className="h-20 bg-gray-200 rounded-lg"></div>
        <div className="h-20 bg-gray-200 rounded-lg"></div>
        <div className="h-20 bg-gray-200 rounded-lg"></div>
      </div>
      {/* Table Skeletons */}
      <div className="space-y-3 mt-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    </div>
  );
}