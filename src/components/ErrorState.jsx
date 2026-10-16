import React from 'react';

export default function ErrorState({ error, onRetry }) {
  return (
    <div className="p-8 text-center bg-red-50 border border-red-200 rounded-xl m-6">
      <h3 className="text-lg font-bold text-red-700">Failed to load orders</h3>
      <p className="text-sm text-red-600 mt-1">
        {error?.message || "Orders service is temporarily unavailable. Check your connection."}
      </p>
      <button 
        onClick={onRetry}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium"
      >
        Retry Request
      </button>
    </div>
  );
}