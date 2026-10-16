import React from 'react';

export default function OrdersTable({ orders }) {
  const totalOrders = orders.length;
  const totalValue = orders.reduce((sum, o) => sum + (o.amount || 0), 0);

  return (
    <div className="p-6 space-y-6">
      {/* Summary Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 border rounded-lg">
          <p className="text-sm text-gray-600">Total Orders</p>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
        <div className="p-4 bg-green-50 border rounded-lg">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-2xl font-bold">${totalValue.toFixed(2)}</p>
        </div>
      </div>

      {/* Orders Table */}
      <table className="w-full text-left border-collapse border">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Priority</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">{order.id}</td>
              <td className="p-3">{order.customerName}</td>
              <td className="p-3">{order.date}</td>
              <td className="p-3">${order.amount}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">{order.priority ? '🔥 High' : 'Normal'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}