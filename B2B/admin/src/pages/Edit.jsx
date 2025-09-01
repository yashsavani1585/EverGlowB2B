// import React, { useState, useEffect } from 'react'
// import { assets } from '../assets/assets'
// import axios from "axios"
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'
// import { useSearchParams } from 'react-router-dom'

// const Edit = ({token}) => {
//     const [searchParams] = useSearchParams()
//     const productId = searchParams.get('id')
    
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
//     const [loading, setLoading] = useState(false);

//     // Fetch product data when component mounts
//     useEffect(() => {
//         if (productId) {
//             fetchProductData();
//         }
//     }, [productId]);

//     const fetchProductData = async () => {
//         try {
//             const response = await axios.post(backendUrl + '/api/product/single', {productId});
//             if (response.data.success) {
//                 const product = response.data.product;
//                 setName(product.name);
//                 setDescription(product.description);
//                 setPrice(product.price);
//                 setDiscountPrice(product.discountPrice || '');
//                 setCategory(product.category);
//                 setBestseller(product.bestseller || false);
//             } else {
//                 toast.error('Failed to fetch product data');
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error('Error fetching product data');
//         }
//     };

//     const onsubmitHandler = async(e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             // Use FormData for image uploads
//             const formData = new FormData();

//             formData.append("productId", productId);
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

//             console.log("Sending update data with images");

//             const response = await axios.post(backendUrl + "/api/product/update", formData, {
//                 headers: {
//                     token: token,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
            
//             if (response.data.success) {
//                 toast.success(response.data.message)
//                 // Don't reset form, keep the updated values
//             }
//             else{
//                 toast.error(response.data.message)
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message)
//         } finally {
//             setLoading(false);
//         }
//     }

//     if (!productId) {
//         return <div className="text-center py-8">No product selected for editing</div>;
//     }

//   return (
//     <div className='w-full'>
//         <h2 className='text-2xl font-semibold mb-6'>Edit Jewellery Product</h2>
//         <form onSubmit={onsubmitHandler} className='flex flex-col w-full items-start gap-3'>
//             <div>
//                 <p className='mb-2'>Update Product Images</p>
//                 <div className='flex gap-2'>
//                 <label htmlFor="image1">
//                         <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//                         <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden accept="image/*"/>
//                     </label>
//                     <label htmlFor="image2">
//                         <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//                         <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden accept="image/*"/>
//                     </label>
//                     <label htmlFor="image3">
//                         <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//                         <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden accept="image/*"/>
//                     </label>
//                     <label htmlFor="image4">
//                         <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//                         <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden accept="image/*"/>
//                     </label>
//                 </div>
//                 <p className='text-xs text-gray-500 mt-1'>Upload new images to replace existing ones. Leave empty to keep current images.</p>
//                 </div>
//                 <div className='w-full'>
//                     <p className='mb-2'>Product name</p>
//                     <input onChange={(e)=>setName(e.currentTarget.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
//                 </div>
//                 <div className='w-full'>
//                     <p className='mb-2'>Product description</p>
//                     <textarea onChange={(e)=>setDescription(e.currentTarget.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
//                 </div>
                
//                 <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

//                 <div>
//                     <p className='mb-2'>Product category</p>
//                     <select onChange={(e) =>setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
//                         <option value="rings">Rings</option>
//                         <option value="earrings">Earrings</option>
//                         <option value="bracelet">Bracelet</option>
//                         <option value="necklace">Necklace</option>
//                         <option value="pendant-set">Pendant Set</option>
//                     </select>
//                 </div>
//                 <div>
//                     <p className='mb-2'>Product Price (₹)</p>
//                     <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25000' required />
//                 </div>
//                 <div>
//                     <p className='mb-2'>Discount Price (₹)</p>
//                     <input onChange={(e)=>setDiscountPrice(e.target.value)} value={discountPrice} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='20000' />
//                 </div>
//                 </div>

//                     <div className='flex gap-2 mt-2'> 
//                         <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
//                         <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//                     </div>
//                     <button type='submit' disabled={loading} className='w-28 py-3 mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded'>
//                         {loading ? 'Updating...' : 'UPDATE'}
//                     </button>

//         </form>
//     </div>
//   )
// }

// export default Edit








import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const MAX_IMAGES = 10;

const COLORS = [
  { id: 'gold', label: 'Gold', dot: '#d4af37' },
  { id: 'rose-gold', label: 'Rose Gold', dot: '#e6b2a6' },
  { id: 'white-gold', label: 'White Gold', dot: '#d9d9d9' },
];

const SHAPES = [
  'round','princess','oval','emerald','pear','marquise',
  'heart','baguette','cushion','radiant','asscher','other'
];

const Edit = ({ token }) => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');

  // images
  const [currentImages, setCurrentImages] = useState([]);
  const [bulkFiles, setBulkFiles] = useState([]);

  // basics
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [category, setCategory] = useState('rings');
  const [bestseller, setBestseller] = useState(false);
  const [loading, setLoading] = useState(false);

  // NEW: colors
  const [availableColors, setAvailableColors] = useState(['gold']);
  const [defaultColor, setDefaultColor] = useState('gold');

  // NEW: specs
  const [productWeight, setProductWeight] = useState('');
  const [goldWeight, setGoldWeight] = useState('');
  const [diamondCarat, setDiamondCarat] = useState('');
  const [diamondShape, setDiamondShape] = useState('round');
  const [numberOfDiamonds, setNumberOfDiamonds] = useState('');
  const [makingCharge, setMakingCharge] = useState('');

  useEffect(() => { if (productId) fetchProduct(); }, [productId]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/product/single`, { productId });
      if (!data.success) return toast.error('Failed to fetch product');
      const p = data.product;
      setName(p.name || '');
      setDescription(p.description || '');
      setPrice(p.price ?? '');
      setDiscountPrice(p.discountPrice ?? '');
      setCategory(p.category || 'rings');
      setBestseller(!!p.bestseller);
      setCurrentImages(Array.isArray(p.image) ? p.image : []);

      // colors
      const colors = Array.isArray(p.availableColors) ? p.availableColors : ['gold'];
      setAvailableColors(colors.length ? colors : ['gold']);
      setDefaultColor(p.defaultColor && colors.includes(p.defaultColor) ? p.defaultColor : colors[0]);

      // specs
      const s = p.specs || {};
      setProductWeight(s.productWeight ?? '');
      setGoldWeight(s.goldWeight ?? '');
      setDiamondCarat(s.diamondCarat ?? '');
      setDiamondShape(s.diamondShape || 'round');
      setNumberOfDiamonds(s.numberOfDiamonds ?? '');
      setMakingCharge(s.makingCharge ?? '');
    } catch (err) {
      console.error(err);
      toast.error('Error fetching product');
    }
  };

  const toggleColor = (id) => {
    setAvailableColors(prev => {
      let next = prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id];
      if (!next.length) { toast.warn('Select at least one color'); return prev; }
      if (!next.includes(defaultColor)) setDefaultColor(next[0]);
      return next;
    });
  };

  const handleBulkChange = (e) => {
    const incoming = Array.from(e.target.files || []);
    const remaining = MAX_IMAGES - bulkFiles.length;
    if (remaining <= 0) { toast.error(`You already selected ${MAX_IMAGES} images`); return; }
    const toAdd = incoming.slice(0, remaining);
    if (toAdd.length < incoming.length) toast.warn(`Only ${remaining} more image(s) allowed`);
    setBulkFiles(prev => [...prev, ...toAdd]);
    e.target.value = '';
  };
  const removeBulkFile = (i) => setBulkFiles(prev => prev.filter((_, idx) => idx !== i));

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    if (!productId) return;
    try {
      if (!availableColors.length) return toast.error('Choose at least one color');
      if (bulkFiles.length > MAX_IMAGES) return toast.error(`Max ${MAX_IMAGES} images per update`);

      setLoading(true);
      const fd = new FormData();
      fd.append('productId', productId);
      fd.append('name', name);
      fd.append('description', description);
      fd.append('price', price);
      fd.append('discountPrice', discountPrice || 0);
      fd.append('category', category);
      fd.append('bestseller', bestseller);

      // images (optional – if provided, backend replaces)
      bulkFiles.forEach(f => fd.append('images', f));

      // colors
      fd.append('availableColors', JSON.stringify(availableColors));
      fd.append('defaultColor', defaultColor);

      // specs
      fd.append('productWeight', productWeight || 0);
      fd.append('goldWeight', goldWeight || 0);
      fd.append('diamondCarat', diamondCarat || 0);
      fd.append('diamondShape', diamondShape);
      fd.append('numberOfDiamonds', numberOfDiamonds || 0);
      fd.append('makingCharge', makingCharge || 0);

      const { data } = await axios.post(`${backendUrl}/product/update`, fd, {
        headers: { token, 'Content-Type': 'multipart/form-data' }
      });

      if (data.success) {
        toast.success(data.message || 'Product Updated');
        setBulkFiles([]);
        await fetchProduct();
      } else {
        toast.error(data.message || 'Update failed');
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!productId) return <div className="text-center py-8">No product selected for editing</div>;

  return (
    <div className="w-full" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      <div className="bg-white rounded-2xl shadow ring-1 ring-purple-100 p-5">
        <h2 className="text-2xl font-bold text-[#4f1c51] mb-1">Edit Jewellery Product</h2>
        <p className="text-sm text-gray-600 mb-5">Uploading new images will replace the existing set.</p>

        <form onSubmit={onsubmitHandler} className="flex flex-col gap-5">
          {/* CURRENT IMAGES */}
          <section>
            <label className="block text-sm text-gray-700 mb-2">Current images</label>
            {currentImages?.length ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {currentImages.map((u, i) => (
                  <img key={i} src={u} alt="" className="w-24 h-24 object-cover rounded-xl border" />
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500">No images saved.</p>
            )}
          </section>

          {/* NEW IMAGES */}
          <section>
            <label className="block text-sm text-gray-700 mb-2">Upload new images (optional)</label>
            <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50/40 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-gray-600">Max {MAX_IMAGES} per update.</span>
                <label className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm shadow cursor-pointer ring-1 ring-purple-100">
                  <input type="file" accept="image/*" multiple className="hidden" onChange={handleBulkChange}/>
                  <span className="text-[#4f1c51]">Choose Files</span>
                </label>
              </div>
              {bulkFiles.length > 0 && (
                <>
                  <p className="text-xs text-gray-500 mt-3">Selected {bulkFiles.length} file(s)</p>
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {bulkFiles.map((f, i) => (
                      <div key={i} className="relative border rounded-xl overflow-hidden bg-white">
                        <img src={URL.createObjectURL(f)} alt="" className="w-24 h-24 object-cover"/>
                        <button type="button" onClick={() => removeBulkFile(i)} className="absolute top-1 right-1 bg-white/90 text-xs px-1 rounded shadow">✕</button>
                        <div className="text-[10px] px-1 py-0.5 w-24 truncate">{f.name}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* BASICS */}
          <section className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Product name</label>
              <input className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                     value={name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Category</label>
              <select className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                      value={category} onChange={e => setCategory(e.target.value)}>
                <option value="rings">Rings</option><option value="earrings">Earrings</option>
                <option value="bracelet">Bracelet</option><option value="necklace">Necklace</option>
                <option value="pendant-set">Pendant Set</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Price (₹)</label>
              <input type="number" min="0" className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                     value={price} onChange={e => setPrice(e.target.value)} required/>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1.5">Discount Price (₹)</label>
              <input type="number" min="0" className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                     value={discountPrice} onChange={e => setDiscountPrice(e.target.value)}/>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <label className="block text-sm text-gray-700 mb-1.5">Product description</label>
            <textarea rows={4} className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"
                      value={description} onChange={e => setDescription(e.target.value)} required/>
          </section>

          {/* COLORS */}
          <section>
            <label className="block text-sm text-gray-700 mb-2">Available colors & default</label>
            <div className="grid sm:grid-cols-3 gap-3">
              {COLORS.map(c => {
                const checked = availableColors.includes(c.id);
                return (
                  <div key={c.id} className={`flex items-center justify-between rounded-xl border px-3 py-2 ${checked ? 'ring-2 ring-[#4f1c51] bg-purple-50/40' : ''}`}>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={checked} onChange={() => toggleColor(c.id)} />
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-3.5 h-3.5 rounded-full" style={{ background: c.dot }} />
                        {c.label}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 text-xs">
                      <input type="radio" name="defaultColor" disabled={!checked}
                             checked={defaultColor === c.id} onChange={() => setDefaultColor(c.id)}/>
                      <span>Default</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SPECS */}
          <section>
            <label className="block text-sm text-gray-700 mb-2">Product specs</label>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Product weight (g)</p>
                <input type="number" min="0" step="0.01" value={productWeight} onChange={e => setProductWeight(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"/>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Gold weight (g)</p>
                <input type="number" min="0" step="0.01" value={goldWeight} onChange={e => setGoldWeight(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"/>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Diamond carat (ct)</p>
                <input type="number" min="0" step="0.01" value={diamondCarat} onChange={e => setDiamondCarat(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"/>
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
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"/>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Making charge (₹)</p>
                <input type="number" min="0" value={makingCharge} onChange={e => setMakingCharge(e.target.value)}
                       className="w-full rounded-xl border px-3 py-2.5 focus:ring-4 focus:ring-pink-200 focus:border-[#4f1c51]"/>
              </div>
            </div>
          </section>

          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={bestseller} onChange={() => setBestseller(p => !p)} />
            <span className="text-gray-700">Add to bestseller</span>
          </label>

          <button type="submit" disabled={loading}
                  className="self-start rounded-xl bg-[#4f1c51] text-white px-6 py-2.5 shadow hover:shadow-md disabled:opacity-60">
            {loading ? 'Updating…' : 'Update Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
