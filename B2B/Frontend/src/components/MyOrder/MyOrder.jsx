import React from "react";

const MyOrder = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg ">
      
      {/* Price Summary */}
      <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
      <div className="border rounded-md overflow-hidden">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-medium">Item Total</td>
              <td className="p-3 text-right">₹0.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Delivery Charge</td>
              <td className="p-3 text-right">Free</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">GST & Other Taxes</td>
              <td className="p-3 text-right">0.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-medium">Payment Method</td>
              <td className="p-3 text-right">Cash on Delivery</td>
            </tr>
            <tr className="bg-gray-100 font-semibold">
              <td className="p-3">Total Payable</td>
              <td className="p-3 text-right">₹0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Delivery Details */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Delivery to:</h2>
        <p className="mt-2 font-bold text-gray-800">Jackie Walter</p>
        <p className="text-gray-600">
          B-613 IT Park, Mota Varaccha, Surat
        </p>
        <p className="mt-1 text-gray-700">
          <span className="font-medium">Mobile No:</span> 9745678987
        </p>
      </div>

      {/* Previous Orders */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Your Previous Orders</h2>
        <p className="mt-2 text-gray-600">No previous orders found.</p>
      </div>
    </div>
  );
};

export default MyOrder;
