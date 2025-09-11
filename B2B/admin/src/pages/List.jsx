import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const navigate = useNavigate()

  const fetchList = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/product/list`)
      if (data.success) setList(data.products)
      else toast.error(data.message || 'Failed to load products')
    } catch (err) {
      console.error(err); toast.error(err.message)
    }
  }

const removeProduct = async (id) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/product/remove`,
      { id },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (data.success) {
      toast.success(data.message || 'Deleted');
      fetchList();
    } else {
      toast.error(data.message || 'Delete failed');
    }
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.message || err.message);
  }
};

// const removeProduct = async (id, token, fetchList, backendUrl) => {
//   try {
//     if (!id) return toast.error("Product ID missing");

//     const { data } = await axios.post(
//       `${backendUrl}/product/remove`,
//       { id },
//       {
//         headers: token
//           ? { Authorization: `Bearer ${token}` }
//           : {}, // token optional
//       }
//     );

//     if (data.success) {
//       toast.success(data.message || "Product deleted successfully");
//       if (typeof fetchList === "function") fetchList(); // refresh list
//     } else {
//       toast.error(data.message || "Delete failed");
//     }
//   } catch (err) {
//     console.error("removeProduct error:", err);
//     toast.error(err.response?.data?.message || err.message || "Something went wrong");
//   }
// };

  const editProduct = (id) => navigate(`/edit?id=${id}`)

  useEffect(() => { fetchList() }, [])

  return (
    <div
      className="w-full"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="bg-white rounded-2xl shadow ring-1 ring-purple-100 p-5">
        <h2 className="text-2xl font-bold text-[#4f1c51] mb-1">All Jewellery Products</h2>
        <p className="text-sm text-gray-600 mb-4">Manage inventory, pricing, and visibility.</p>

        <div className="hidden md:grid grid-cols-[1.2fr_2fr_1fr_1fr_1fr_1fr] gap-2 items-center px-3 py-2 bg-purple-50/50 rounded-xl text-[#4f1c51] text-sm font-semibold">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Discount</span>
          <span>Actions</span>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          {list.map((item, idx) => (
            <div key={idx}
              className="grid grid-cols-[1fr_2fr] md:grid-cols-[1.2fr_2fr_1fr_1fr_1fr_1fr] gap-2 items-center px-3 py-2 border rounded-xl bg-white hover:shadow-sm transition">
              <img className="w-14 h-14 object-cover rounded-lg border" src={item.image?.[0]} alt="" />
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-gray-500 truncate">{item.description}</p>
              </div>
              <p className="capitalize text-gray-700">{item.category}</p>
              <div>
                <p className="font-semibold">{currency}{item.price}</p>
                {item.discountPrice > 0 && (
                  <p className="text-xs text-green-600">-{item.discountPercentage}%</p>
                )}
              </div>
              <div>
                {item.discountPrice > 0 ? (
                  <p className="text-green-700 font-medium">{currency}{item.discountPrice}</p>
                ) : (
                  <p className="text-gray-400">No discount</p>
                )}
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => editProduct(item._id)}
                  className="px-3 py-1.5 rounded-lg bg-[#CEBB98] text-white text-xs shadow hover:shadow-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeProduct(item._id)}
                  className="px-3 py-1.5 rounded-lg bg-pink-600 text-white text-xs shadow hover:shadow-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {list.length === 0 && (
            <div className="text-sm text-gray-500 p-6 text-center">No products found.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default List
