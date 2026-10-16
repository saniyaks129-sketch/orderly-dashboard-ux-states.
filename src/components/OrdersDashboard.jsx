import React, { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import OrdersTable from './OrdersTable';
import EmptyState from './EmptyState';
import ErrorState from './ErrorState';
import { fetchOrders } from '../mockApi';

export default function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const loadOrders = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch (err) {
      setError(err || { message: "Failed to connect to Orderly servers." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleClearFilters = () => {
    setFilter('ALL');
  };

  // Filter orders based on status filter
  const filteredOrders = orders.filter((order) => {
    if (filter === 'ALL') return true;
    return order.status?.toUpperCase() === filter.toUpperCase();
  });

  // 1. Loading State
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // 2. Error State
  if (error) {
    return <ErrorState error={error} onRetry={loadOrders} />;
  }

  // 3. Empty State
  if (!filteredOrders || filteredOrders.length === 0) {
    return (
      <EmptyState
        hasActiveFilters={filter !== 'ALL'}
        onClearFilters={handleClearFilters}
      />
    );
  }

  // 4. Success State
  return (
    <div>
      {/* Filter Bar */}
      <div className="p-6 pb-0 flex items-center gap-4">
        <label className="text-sm font-semibold text-gray-600">Filter by Status:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md px-3 py-1.5 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ALL">All Statuses</option>
          <option value="PENDING">Pending</option>
          <option value="PROCESSING">Processing</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
        </select>
      </div>

      <OrdersTable orders={filteredOrders} />
    </div>
  );
}