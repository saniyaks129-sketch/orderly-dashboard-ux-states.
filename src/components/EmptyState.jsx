import React from 'react';

export default function EmptyState({ hasActiveFilters, onClearFilters }) {
  return (
    <div className="p-12 text-center border-2 border-dashed rounded-xl m-6">
      <h3 className="text-lg font-semibold text-gray-700">No orders found</h3>
      {hasActiveFilters ? (
        <div className="mt-2">
          <p className="text-sm text-gray-500">No orders match your current active filter.</p>
          <button 
            onClick={onClearFilters}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-1">You're all caught up! No orders are currently in the queue.</p>
      )}
    </div>
  );
}