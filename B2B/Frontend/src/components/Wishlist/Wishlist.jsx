import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { isAuthenticated } from "../../utils/auth";
import emptyImg from "../../assets/Empty.png";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

// Small helpers (do NOT affect UI)
const formatIN = (n) => Number(n || 0).toLocaleString("en-IN");
const parseKey = (k) => {
  const [id, c] = String(k).split(":");
  return { id, color: c && c !== "-" ? c : null };
};

const Wishlist = () => {
  // ✅ from CartContext (you already added wishlist helpers earlier)
  const { wishlist, wishRemove, add } = useCart();

  // Local state for detailed products to render in your existing UI
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load products for each wishlist key
  useEffect(() => {
    let alive = true;
    const load = async () => {
      setLoading(true);
      try {
        const detailed = await Promise.all(
          wishlist.map(async (key) => {
            const { id, color } = parseKey(key);
            try {
              const { data } = await axios.post(`${API}/product/single`, { productId: id });
              const p = data?.product || { _id: id, name: "Product" };
              return { key, product: p, color };
            } catch {
              return { key, product: { _id: id, name: "Product" }, color };
            }
          })
        );
        if (alive) setRows(detailed);
      } finally {
        if (alive) setLoading(false);
      }
    };
    load();
    return () => { alive = false; };
  }, [wishlist]);

  // ——— handlers (plug into your existing buttons, no UI change) ———
  // const handleAddToCart = async (row) => {
  //   if (!isAuthenticated()) return navigate("/auth");
  //   await add(row.product._id, 1, row.color);  // your CartContext add()
  //   await wishRemove(row.product._id, row.color); // remove from wishlist
  // };

  const handleRemove = async (row) => {
    if (!isAuthenticated()) return navigate("/auth");
    await wishRemove(row.product._id, row.color);
  };

  // Prices/labels you can drop into your existing markup
  const viewRows = useMemo(() => {
    return rows.map((r) => {
      const p = r.product || {};
      const price = Number(p.discountPrice || p.price || 0);
      const mrp = p.discountPrice ? Number(p.price || 0) : null;
      const pct = p.discountPrice
        ? (p.discountPercentage ?? Math.round(((p.price - p.discountPrice) / (p.price || 1)) * 100))
        : 0;

      // What your UI will use (names unchanged)
      return {
        ...r,
        name: p.name || "—",
        desc: p.description || "",
        priceFormatted: `₹${formatIN(price)}`,
        mrpFormatted: mrp ? `₹${formatIN(mrp)}` : "",
        pct,
        image:
          Array.isArray(p.image) && p.image.length
            ? p.image[0]
            : "https://placehold.co/600x600?text=Product",
      };
    });
  }, [rows]);

  // ——— Keep your existing UI ———
  // Replace your old array `.map(...)` with `viewRows.map(...)`
  // and wire the two handlers where your buttons are.
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-[#4F1c51] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!viewRows.length) {
    // Keep your empty-state UI as-is, or use this minimal one:
    return (
      <div className="max-w-7xl mx-auto py-14 px-4 text-center">
        <img 
        src={emptyImg}
        alt="Empty Wishlist"
        className="mx-auto mb-6 w-[724px] h-[524px] opacity-50"
        />
        <p className="text-gray-500 mt-2">`"Your wishlist is waiting! Browse our collections and add the pieces you love."`</p>
        <Link to="/" className="inline-block mt-6 px-6 py-3 bg-[#CEBB98] text-white rounded-lg">view collection</Link>
      </div>
    );
  }

  // ▼▼ Render with YOUR existing markup. Example below shows how to reference the dynamic fields.
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* EXAMPLE GRID — replace inner card markup with your current UI (classes can stay exactly as you have) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {viewRows.map((row) => (
          <div key={row.key} className="border rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="relative">
              <img src={row.image} alt={row.name} className="w-full h-48 object-cover" />
              {/* if you show a badge/discount in your UI */}
              {row.pct > 0 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                  {row.pct}% OFF
                </span>
              )}
            </div>

            <div className="p-3">
              <div className="text-sm font-semibold text-gray-800">
                {row.name}
                {row.color && <span className="ml-2 text-xs text-gray-500">({row.color})</span>}
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-base font-bold">{row.priceFormatted}</span>
                {row.mrpFormatted && (
                  <span className="text-xs text-gray-400 line-through">{row.mrpFormatted}</span>
                )}
              </div>

              {/* Buttons — wire them to handlers; keep your existing styling */}
              <div className="mt-3 flex gap-2">
                <button
                    onClick={() => navigate('/inquiry')}
                  className="w-full  border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition"
                >
                   Inquiry Form
                </button>
                <button
                  onClick={() => handleRemove(row)}
                  className="w-full  border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
