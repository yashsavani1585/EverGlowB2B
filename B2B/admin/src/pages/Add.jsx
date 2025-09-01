// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from "axios"
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {
//     const[image1, setImage1] = useState(false)
//     const[image2, setImage2] = useState(false)
//     const[image3, setImage3] = useState(false)
//     const[image4, setImage4] = useState(false)

//     const [name,setName] = useState("");
//     const[description,setDescription]= useState("");
//     const[price,setPrice]= useState("");
//     const[discountPrice,setDiscountPrice]= useState("");
//     const[category,setCategory] = useState("rings");
//     const[bestseller,setBestseller] = useState(false);

//     const onsubmitHandler = async(e) => {
//         e.preventDefault();
//         try {
//             // Use FormData for image uploads
//             const formData = new FormData();

//             formData.append("name", name);
//             formData.append("description", description);
//             formData.append("price", price);
//             formData.append("discountPrice", discountPrice || 0);
//             formData.append("category", category);
//             formData.append("bestseller", bestseller);

//             // Append images if selected
//             if (image1) formData.append("image1", image1);
//             if (image2) formData.append("image2", image2);
//             if (image3) formData.append("image3", image3);
//             if (image4) formData.append("image4", image4);

//             console.log("Sending product data with images");

//             const response = await axios.post(backendUrl + "/api/product/add", formData, {
//                 headers: {
//                     token: token,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
            
//             if (response.data.success) {
//                 toast.success(response.data.message)
//                 setName('')
//                 setDescription('')
//                 setImage1(false)
//                 setImage2(false)
//                 setImage3(false)
//                 setImage4(false)
//                 setPrice('')
//                 setDiscountPrice('')
//                 setCategory('rings')
//                 setBestseller(false)
//             }
//             else{
//                 toast.error(response.data.message)
//             }
//             // console.log(response.data);
            

//         } catch (error) {
//             console.log(error);
//             toast.error(error.message)
//         }
//     }

//   return (
//     <form onSubmit={onsubmitHandler} className='flex flex-col w-full items-start gap-3'>
//         <div>
//             <p className='mb-2'>Upload Product Images</p>
//             <div className='flex gap-2'>
//             <label htmlFor="image1">
//                     <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//                     <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden accept="image/*"/>
//                 </label>
//                 <label htmlFor="image2">
//                     <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//                     <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden accept="image/*"/>
//                 </label>
//                 <label htmlFor="image3">
//                     <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//                     <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden accept="image/*"/>
//                 </label>
//                 <label htmlFor="image4">
//                     <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//                     <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden accept="image/*"/>
//                 </label>
//             </div>
//             <p className='text-xs text-gray-500 mt-1'>Upload up to 4 images (JPG, PNG, GIF). Max size: 5MB each.</p>
//             </div>
//             <div className='w-full'>
//                 <p className='mb-2'>Product name</p>
//                 <input onChange={(e)=>setName(e.currentTarget.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
//             </div>
//             <div className='w-full'>
//                 <p className='mb-2'>Product description</p>
//                 <textarea onChange={(e)=>setDescription(e.currentTarget.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
//             </div>
            
//             <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

//             <div>
//                 <p className='mb-2'>Product category</p>
//                 <select onChange={(e) =>setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
//                     <option value="rings">Rings</option>
//                     <option value="earrings">Earrings</option>
//                     <option value="bracelet">Bracelet</option>
//                     <option value="necklace">Necklace</option>
//                     <option value="pendant-set">Pendant Set</option>
//                 </select>
//             </div>
//             <div>
//                 <p className='mb-2'>Product Price (₹)</p>
//                 <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25000' required />
//             </div>
//             <div>
//                 <p className='mb-2'>Discount Price (₹)</p>
//                 <input onChange={(e)=>setDiscountPrice(e.target.value)} value={discountPrice} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='20000' />
//             </div>
//             </div>

//                 <div className='flex gap-2 mt-2'> 
//                     <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
//                     <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//                 </div>
//                 <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

//     </form>
//   )
// }

// export default Add


import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const MAX_PER_COLOR = 10;

const COLOR_KEYS = [
  { id: "gold", label: "Gold", dot: "#d4af37" },
  { id: "rose-gold", label: "Rose Gold", dot: "#e6b2a6" },
  { id: "white-gold", label: "White Gold", dot: "#d9d9d9" },
];

const SHAPES = [
  "round","princess","oval","emerald","pear","marquise",
  "heart","baguette","cushion","radiant","asscher","other"
];

const Add = ({ token }) => {
  
  // BASIC FIELDS
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [category, setCategory] = useState("rings");
  const [bestseller, setBestseller] = useState(false);
  const [loading, setLoading] = useState(false);

  // SPECS
  const [productWeight, setProductWeight] = useState("");
  const [goldWeight, setGoldWeight] = useState("");
  const [diamondCarat, setDiamondCarat] = useState("");
  const [diamondShape, setDiamondShape] = useState("round");
  const [numberOfDiamonds, setNumberOfDiamonds] = useState("");
  const [makingCharge, setMakingCharge] = useState("");

  // NEW: color uploads + carat + default
  const [activeColor, setActiveColor] = useState("gold");     // which radio is “armed” to upload
  const [defaultColor, setDefaultColor] = useState("gold");

  const [goldFiles, setGoldFiles] = useState([]);
  const [roseFiles, setRoseFiles] = useState([]);
  const [whiteFiles, setWhiteFiles] = useState([]);

  const [goldCarat, setGoldCarat] = useState("");   // "", "14", "18"
  const [roseCarat, setRoseCarat] = useState("");
  const [whiteCarat, setWhiteCarat] = useState("");

  // helpers
  const getSetters = (color) => {
    if (color === "gold") return { files: goldFiles, set: setGoldFiles, carat: goldCarat, setCarat: setGoldCarat };
    if (color === "rose-gold") return { files: roseFiles, set: setRoseFiles, carat: roseCarat, setCarat: setRoseCarat };
    return { files: whiteFiles, set: setWhiteFiles, carat: whiteCarat, setCarat: setWhiteCarat };
  };

  const handleColorFiles = (color, e) => {
    const { files, set } = getSetters(color);
    const incoming = Array.from(e.target.files || []);
    const remaining = MAX_PER_COLOR - files.length;
    if (remaining <= 0) {
      toast.error(`Max ${MAX_PER_COLOR} images for ${color}`);
      e.target.value = "";
      return;
    }
    const toAdd = incoming.slice(0, remaining);
    if (toAdd.length < incoming.length) {
      toast.warn(`Only ${remaining} more image(s) allowed for ${color}`);
    }
    set((prev) => [...prev, ...toAdd]);
    e.target.value = "";
  };

  const removeFile = (color, idx) => {
    const { set } = getSetters(color);
    set((prev) => prev.filter((_, i) => i !== idx));
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // Need at least one image overall
      const totalCount =
        goldFiles.length + roseFiles.length + whiteFiles.length;
      if (totalCount === 0) {
        toast.error("Upload at least one image (Gold / Rose Gold / White Gold)");
        return;
      }

      // Default color must exist among the uploaded buckets (or we fix it)
      const firstNonEmpty =
        (goldFiles.length ? "gold" :
        (roseFiles.length ? "rose-gold" :
        (whiteFiles.length ? "white-gold" : null)));

      const realDefault =
        (defaultColor === "gold" && goldFiles.length) ||
        (defaultColor === "rose-gold" && roseFiles.length) ||
        (defaultColor === "white-gold" && whiteFiles.length)
          ? defaultColor
          : firstNonEmpty || "gold";

      setLoading(true);
      const fd = new FormData();

      // basics
      fd.append("name", name);
      fd.append("description", description);
      fd.append("price", price);
      fd.append("discountPrice", discountPrice || 0);
      fd.append("category", category);
      fd.append("bestseller", bestseller);

      // NEW: per-color carats
      fd.append("goldCarat", goldCarat);     // "", "14", "18"
      fd.append("roseCarat", roseCarat);
      fd.append("whiteCarat", whiteCarat);

      // NEW: default color
      fd.append("defaultColor", realDefault);

      // NEW: images – use 3 distinct fields
      goldFiles.forEach((f) => fd.append("goldImages", f));
      roseFiles.forEach((f) => fd.append("roseImages", f));
      whiteFiles.forEach((f) => fd.append("whiteImages", f));

      // specs
      fd.append("productWeight", productWeight || 0);
      fd.append("goldWeight", goldWeight || 0);
      fd.append("diamondCarat", diamondCarat || 0);
      fd.append("diamondShape", diamondShape);
      fd.append("numberOfDiamonds", numberOfDiamonds || 0);
      fd.append("makingCharge", makingCharge || 0);

      const { data } = await axios.post(
        `${backendUrl}/product/add`,
        fd,
        { headers: { token, "Content-Type": "multipart/form-data" } }
      );
      

      if (data.success) {
        toast.success(data.message || "Product Added");
        // reset
        setName(""); setDescription(""); setPrice(""); setDiscountPrice("");
        setCategory("rings"); setBestseller(false);

        setGoldFiles([]); setRoseFiles([]); setWhiteFiles([]);
        setGoldCarat(""); setRoseCarat(""); setWhiteCarat("");
        setActiveColor("gold"); setDefaultColor("gold");

        setProductWeight(""); setGoldWeight(""); setDiamondCarat("");
        setDiamondShape("round"); setNumberOfDiamonds(""); setMakingCharge("");
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const ColorUploader = ({ id, label, dot }) => {
    const { files, setCarat } = getSetters(id);
    const caratValue = id === "gold" ? goldCarat : id === "rose-gold" ? roseCarat : whiteCarat;

    return (
      <div className="rounded-2xl border border-purple-200 p-3 bg-purple-50/40">
        {/* Header row: radio (enable), label, carat dropdown + default */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="activeUpload"
              checked={activeColor === id}
              onChange={() => setActiveColor(id)}
            />
            <span className="flex items-center gap-2 font-medium">
              <span className="inline-block w-3.5 h-3.5 rounded-full" style={{ background: dot }} />
              {label}
            </span>
          </label>

          <div className="flex items-center gap-3">
            {/* carat dropdown (blank / 14 / 18) */}
            <select
              className="rounded-lg border px-2 py-1 text-sm"
              value={caratValue}
              onChange={(e) => setCarat(e.target.value)}
            >
              <option value="">Carat (blank)</option>
              <option value="14">14 Carat</option>
              <option value="18">18 Carat</option>
            </select>

            {/* default selector */}
            <label className="flex items-center gap-2 text-xs">
              <input
                type="radio"
                name="defaultColor"
                checked={defaultColor === id}
                onChange={() => setDefaultColor(id)}
                disabled={
                  (id === "gold" && !goldFiles.length) ||
                  (id === "rose-gold" && !roseFiles.length) ||
                  (id === "white-gold" && !whiteFiles.length)
                }
              />
              Default
            </label>

            {/* choose files (enabled only when this color radio is selected) */}
            <label className={`inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-sm shadow cursor-pointer ring-1 ring-purple-100 ${activeColor !== id ? "opacity-50 cursor-not-allowed" : ""}`}>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                disabled={activeColor !== id}
                onChange={(e) => handleColorFiles(id, e)}
              />
              <span className="text-[#4f1c51]">Choose Files</span>
            </label>
          </div>
        </div>

        {/* thumbnails grid for this color */}
        {files.length > 0 && (
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {files.map((f, i) => (
              <div key={i} className="relative border rounded-xl overflow-hidden bg-white">
                <img src={URL.createObjectURL(f)} alt="" className="w-24 h-24 object-cover" />
                {/* ⛔ same remove image UX you already use */}
                <button
                  type="button"
                  onClick={() => removeFile(id, i)}
                  className="absolute top-1 right-1 bg-white/90 text-xs px-1 rounded shadow"
                >
                  ✕
                </button>
                <div className="text-[10px] px-1 py-0.5 w-24 truncate">{f.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      <div className="bg-white rounded-2xl shadow ring-1 ring-purple-100 p-5">
        <h2 className="text-2xl font-bold text-[#4f1c51] mb-1">Add Jewellery Product</h2>
        <p className="text-sm text-gray-600 mb-5">Upload images per color, pick carats, and set a default.</p>

        <form onSubmit={onsubmitHandler} className="flex flex-col gap-5">

          {/* === COLOR UPLOADS (3 buckets) === */}
          <section className="grid gap-3">
            {COLOR_KEYS.map((c) => (
              <ColorUploader key={c.id} id={c.id} label={c.label} dot={c.dot} />
            ))}
          </section>

          {/* === BASICS === */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Product name</label>
              <input className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                     value={name} onChange={e => setName(e.target.value)} placeholder="Diamond Band Ring" required/>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Category</label>
              <select className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                      value={category} onChange={e => setCategory(e.target.value)}>
                <option value="rings">Rings</option>
                <option value="earrings">Earrings</option>
                <option value="bracelet">Bracelet</option>
                <option value="necklace">Necklace</option>
                <option value="pendant-set">Pendant Set</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Price (₹)</label>
              <input type="number" min="0" className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                     value={price} onChange={e => setPrice(e.target.value)} placeholder="28284" required/>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Discount Price (₹)</label>
              <input type="number" min="0" className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                     value={discountPrice} onChange={e => setDiscountPrice(e.target.value)} placeholder="25000"/>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <label className="block text-sm text-gray-700 mb-1.5">Product description</label>
            <textarea rows={4} className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                      value={description} onChange={e => setDescription(e.target.value)} placeholder="Enhance your elegance…" required/>
          </section>

          {/* SPECS */}
          <section>
            <label className="block text-sm text-gray-700 mb-2">Product specs</label>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Product weight (g)</p>
                <input type="number" min="0" step="0.01" value={productWeight} onChange={e => setProductWeight(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Gold weight (g)</p>
                <input type="number" min="0" step="0.01" value={goldWeight} onChange={e => setGoldWeight(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Diamond carat (ct)</p>
                <input type="number" min="0" step="0.01" value={diamondCarat} onChange={e => setDiamondCarat(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Diamond shape</p>
                <select value={diamondShape} onChange={e => setDiamondShape(e.target.value)}
                        className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]">
                  {SHAPES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">No. of diamonds</p>
                <input type="number" min="0" value={numberOfDiamonds} onChange={e => setNumberOfDiamonds(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Making charge (₹)</p>
                <input type="number" min="0" value={makingCharge} onChange={e => setMakingCharge(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]" />
              </div>
            </div>
          </section>

          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={bestseller} onChange={() => setBestseller(p => !p)} />
            <span className="text-gray-700">Add to bestseller</span>
          </label>

          <button type="submit" disabled={loading}
                  className="self-start rounded-xl bg-[#4f1c51] text-white px-6 py-2.5 shadow hover:shadow-md disabled:opacity-60">
            {loading ? "Adding…" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;







// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from "axios"
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const MAX_IMAGES = 10;

// const Add = ({token}) => {
//   const [image1, setImage1] = useState(false)
//   const [image2, setImage2] = useState(false)
//   const [image3, setImage3] = useState(false)
//   const [image4, setImage4] = useState(false)

//   // NEW: multiple local files in one go
//   const [bulkFiles, setBulkFiles] = useState([]) // File[]

//   const [name,setName] = useState("");
//   const [description,setDescription]= useState("");
//   const [price,setPrice]= useState("");
//   const [discountPrice,setDiscountPrice]= useState("");
//   const [category,setCategory] = useState("rings");
//   const [bestseller,setBestseller] = useState(false);

//   const handleBulkChange = (e) => {
//     const incoming = Array.from(e.target.files || []);
//     const singlesCount = [image1, image2, image3, image4].filter(Boolean).length;
//     const remaining = MAX_IMAGES - singlesCount - bulkFiles.length;

//     if (remaining <= 0) {
//       toast.error(`You already selected ${MAX_IMAGES} images`);
//       return;
//     }
//     const toAdd = incoming.slice(0, Math.max(0, remaining));
//     if (toAdd.length < incoming.length) {
//       toast.warn(`Only ${remaining} more file(s) allowed (max ${MAX_IMAGES} total)`);
//     }
//     setBulkFiles(prev => [...prev, ...toAdd]);
//     // clear the input so selecting the same files again will retrigger onChange
//     e.target.value = '';
//   };

//   const removeBulkFile = (idx) => {
//     setBulkFiles(prev => prev.filter((_, i) => i !== idx));
//   };

//   const onsubmitHandler = async(e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("discountPrice", discountPrice || 0);
//       formData.append("category", category);
//       formData.append("bestseller", bestseller);

//       // Append single file pickers if selected
//       if (image1) formData.append("image1", image1);
//       if (image2) formData.append("image2", image2);
//       if (image3) formData.append("image3", image3);
//       if (image4) formData.append("image4", image4);

//       // Append multi files (same field name many times is OK)
//       bulkFiles.forEach(f => formData.append("images", f));

//       // Client-side guard: total ≤ MAX_IMAGES
//       const totalCount = [image1,image2,image3,image4].filter(Boolean).length + bulkFiles.length;
//       if (totalCount === 0) {
//         return toast.error("Please select at least one image");
//       }
//       if (totalCount > MAX_IMAGES) {
//         return toast.error(`Max ${MAX_IMAGES} images per product`);
//       }

//       const response = await axios.post(backendUrl + "/api/product/add", formData, {
//         headers: { token, 'Content-Type': 'multipart/form-data' }
//       });

//       if (response.data.success) {
//         toast.success(response.data.message)
//         // reset form
//         setName(''); setDescription('');
//         setImage1(false); setImage2(false); setImage3(false); setImage4(false);
//         setBulkFiles([]);
//         setPrice(''); setDiscountPrice('');
//         setCategory('rings'); setBestseller(false);
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//   }

//   return (
//     <form onSubmit={onsubmitHandler} className='flex flex-col w-full items-start gap-3'>
//       {/* Multiple files picker */}
//       <div className='w-full'>
//         <p className='mb-2'>Upload multiple images (select many at once)</p>
//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleBulkChange}
//           className="block"
//         />
//         {bulkFiles.length > 0 && (
//           <>
//             <p className='text-xs text-gray-500 mt-2'>Selected {bulkFiles.length} file(s)</p>
//             <div className='mt-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2'>
//               {bulkFiles.map((f, i) => (
//                 <div key={i} className="relative border rounded overflow-hidden">
//                   <img
//                     src={URL.createObjectURL(f)}
//                     alt=""
//                     className="w-24 h-24 object-cover"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeBulkFile(i)}
//                     className="absolute top-1 right-1 bg-white/80 text-xs px-1 rounded"
//                     title="Remove"
//                   >
//                     ✕
//                   </button>
//                   <div className="text-[10px] px-1 py-0.5 w-24 truncate">{f.name}</div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//         <p className='text-xs text-gray-500 mt-1'>
//           You can mix these with the boxes below. Max total {MAX_IMAGES} images, 5MB each.
//         </p>
//       </div>

//       {/* Your existing four boxes (still work) */}
//       <div>
//         <p className='mb-2'>Or use single pickers</p>
//         <div className='flex gap-2'>
//           <label htmlFor="image1">
//             <img className='w-20 h-20 object-cover border rounded'
//               src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//             <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden accept="image/*"/>
//           </label>
//           <label htmlFor="image2">
//             <img className='w-20 h-20 object-cover border rounded'
//               src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//             <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden accept="image/*"/>
//           </label>
//           <label htmlFor="image3">
//             <img className='w-20 h-20 object-cover border rounded'
//               src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//             <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden accept="image/*"/>
//           </label>
//           <label htmlFor="image4">
//             <img className='w-20 h-20 object-cover border rounded'
//               src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//             <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden accept="image/*"/>
//           </label>
//         </div>
//         <p className='text-xs text-gray-500 mt-1'>
//           Upload up to 10 images total (JPG, PNG, GIF). Max size: 5MB each.
//         </p>
//       </div>

//       {/* Product fields */}
//       <div className='w-full'>
//         <p className='mb-2'>Product name</p>
//         <input onChange={(e)=>setName(e.currentTarget.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border rounded' type="text" placeholder='Type here' required/>
//       </div>
//       <div className='w-full'>
//         <p className='mb-2'>Product description</p>
//         <textarea onChange={(e)=>setDescription(e.currentTarget.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border rounded' placeholder='Write content here' required/>
//       </div>

//       <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//         <div>
//           <p className='mb-2'>Product category</p>
//           <select onChange={(e) =>setCategory(e.target.value)} value={category} className='w-full px-3 py-2 border rounded'>
//             <option value="rings">Rings</option>
//             <option value="earrings">Earrings</option>
//             <option value="bracelet">Bracelet</option>
//             <option value="necklace">Necklace</option>
//             <option value="pendant-set">Pendant Set</option>
//           </select>
//         </div>
//         <div>
//           <p className='mb-2'>Product Price (₹)</p>
//           <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] border rounded' type="number" placeholder='25000' required min="0"/>
//         </div>
//         <div>
//           <p className='mb-2'>Discount Price (₹)</p>
//           <input onChange={(e)=>setDiscountPrice(e.target.value)} value={discountPrice} className='w-full px-3 py-2 sm:w-[120px] border rounded' type="number" placeholder='20000' min="0"/>
//         </div>
//       </div>

//       <div className='flex gap-2 mt-2'>
//         <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
//         <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//       </div>
//       <button type='submit' className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
//     </form>
//   )
// }

// export default Add
