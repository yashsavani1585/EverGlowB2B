import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

// Your status options (unchanged)
const STATUSES = [
  'Order Placed',
  'Processing',
  'Quality Check',
  'Packing',
  'Shipped',
  'Out for delivery',
  'Delivered',
];

// Soft badge colors per status
const statusClasses = {
  'Order Placed':     'bg-yellow-100 text-yellow-800 ring-yellow-200',
  'Processing':       'bg-blue-100 text-blue-800 ring-blue-200',
  'Quality Check':    'bg-indigo-100 text-indigo-800 ring-indigo-200',
  'Packing':          'bg-purple-100 text-purple-800 ring-purple-200',
  'Shipped':          'bg-cyan-100 text-cyan-800 ring-cyan-200',
  'Out for delivery': 'bg-orange-100 text-orange-800 ring-orange-200',
  'Delivered':        'bg-green-100 text-green-800 ring-green-200',
};

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState({}); // { [orderId]: true }
  const [query, setQuery] = useState('');

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const response = await axios.post(
        backendUrl + '/order/list',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(Array.isArray(response.data.orders) ? response.data.orders : []);
      } else {
        toast.error(response.data.message || 'Failed to load orders');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || 'Error loading orders');
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    const next = event.target.value;
    try {
      setUpdating((u) => ({ ...u, [orderId]: true }));
      const response = await axios.post(
        backendUrl + '/order/status',
        { orderId, status: next },
        { headers: { token } }
      );
      if (response.data.success) {
        // Optimistically update in place
        setOrders((prev) => prev.map((o) => (o._id === orderId ? { ...o, status: next } : o)));
        toast.success('Order status updated successfully');
      } else {
        toast.error(response.data.message || 'Failed to update order status');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to update order status');
    } finally {
      setUpdating((u) => ({ ...u, [orderId]: false }));
    }
  };

  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Client-side filter (by id suffix, name, phone)
  const filtered = orders.filter((order) => {
    if (!query) return true;
    const q = query.toLowerCase();
    const id = String(order?._id || '').toLowerCase();
    const name = `${order?.address?.firstName || ''} ${order?.address?.lastName || ''}`
      .trim()
      .toLowerCase();
    const phone = String(order?.address?.phone || '').toLowerCase();
    return id.includes(q) || name.includes(q) || phone.includes(q);
  });

  return (
    <div
      className="w-full"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="bg-white rounded-2xl shadow ring-1 ring-purple-100 p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[#4f1c51]">Jewellery Orders Management</h3>
            <p className="text-sm text-gray-600">Track orders and update their status.</p>
          </div>
          <button
            onClick={fetchAllOrders}
            className="rounded-xl bg-[#CEBB98] text-white px-4 py-2 shadow hover:shadow-md active:scale-[0.99] transition"
          >
            Refresh
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Order ID, customer name, or phone…"
            className="w-full sm:max-w-md rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51] outline-none"
          />
        </div>

        {/* Header row (md+) */}
        <div className="hidden md:grid grid-cols-[1.3fr_1.8fr_1.2fr_1.2fr_1.2fr] gap-2 items-center px-3 py-2 bg-purple-50/50 rounded-xl text-[#4f1c51] text-sm font-semibold">
          <span>Order</span>
          <span>Customer / Address</span>
          <span>Items</span>
          <span>Total</span>
          <span>Status</span>
        </div>

        {/* Orders list */}
        <div className="mt-2 flex flex-col gap-2">
          {loading && (
            <div className="text-sm text-gray-500 p-6 text-center">Loading orders…</div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-sm text-gray-500 p-6 text-center">No orders found.</div>
          )}

          {!loading &&
            filtered.map((order) => {
              const id = order?._id || '';
              const placed = order?.date ? new Date(order.date).toLocaleString() : '—';
              const fullName = `${order?.address?.firstName || ''} ${order?.address?.lastName || ''}`.trim() || '—';
              const addr = order?.address;
              const addressLines = [
                addr?.street,
                `${addr?.city || ''}${addr?.state ? ', ' + addr.state : ''}${addr?.country ? ', ' + addr.country : ''}`,
                addr?.zipcode
              ].filter(Boolean);
              const items = Array.isArray(order?.items) ? order.items : [];
              const total = order?.amount ?? 0;
              const status = order?.status || 'Order Placed';
              const pm = order?.paymentMethod || '—';
              const paid = !!order?.payment;

              return (
                <div
                  key={id}
                  className="grid grid-cols-1 md:grid-cols-[1.3fr_1.8fr_1.2fr_1.2fr_1.2fr] gap-3 items-start px-3 py-3 border rounded-xl bg-white hover:shadow-sm transition"
                >
                  {/* Order meta */}
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-800 truncate">#{String(id).slice(-8)}</div>
                    <div className="text-xs text-gray-500">Placed: {placed}</div>
                    <div className="text-xs text-gray-500">Method: {pm}</div>
                    <div className={`text-xs ${paid ? 'text-green-600' : 'text-orange-600'}`}>
                      Payment: {paid ? 'Completed' : 'Pending'}
                    </div>
                  </div>

                  {/* Customer + address */}
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-800">{fullName}</div>
                    <div className="text-xs text-gray-600">
                      {addressLines.map((line, i) => (
                        <div key={i} className="truncate">{line}</div>
                      ))}
                      {addr?.phone && <div className="mt-0.5">{addr.phone}</div>}
                    </div>
                  </div>

                  {/* Items */}
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-800">Items: {items.length}</div>
                    <div className="mt-1 space-y-0.5 text-xs text-gray-600 max-h-20 overflow-auto pr-1">
                      {items.map((it, i) => (
                        <div key={i} className="truncate">
                          {it?.name || 'Item'} × {it?.quantity ?? 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="text-sm font-semibold">
                    {currency}{Number(total).toLocaleString('en-IN')}
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs ring-1 ${statusClasses[status] || 'bg-gray-100 text-gray-700 ring-gray-200'}`}
                      title={`Current: ${status}`}
                    >
                      {status}
                    </span>
                    <select
                      onChange={(e) => statusHandler(e, id)}
                      value={status}
                      disabled={!!updating[id]}
                      className="rounded-lg border px-2 py-1 text-sm focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51] outline-none"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
