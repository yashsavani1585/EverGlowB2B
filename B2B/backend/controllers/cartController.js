// import userModel from "../models/userModel.js"

// // add products to user cart
// const addToCart = async (req,res) => {

//     try {
//         const {userId, itemId, quantity = 1} = req.body

//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         if(cartData[itemId]){
//             cartData[itemId] += quantity
//         } else{
//             cartData[itemId] = quantity
//         }

//         await userModel.findByIdAndUpdate(userId, {cartData})
//         res.json({success:true , message:"Added To Cart"})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false, message:error.message})
        
//     }
// }
// // update user cart
// const updateCart = async (req,res) => {

//     try {
//     const {userId, itemId, quantity} = req.body

//     const userData = await userModel.findById(userId)
//     let cartData = await userData.cartData;

//     cartData[itemId] = quantity

//     await userModel.findByIdAndUpdate(userId, {cartData})
//     res.json({success:true , message:"Cart Updated"})

//     } catch (error) {
//         console.log(error)
//         res.json({success:false, message:error.message}) 
//     }
// }
// // get user cart data
// const getUserCart = async (req,res) => {

//     try {
//         const {userId} = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;
//         res.json({success:true,cartData})

//     } catch (error) {
//          console.log(error)
//         res.json({success:false, message:error.message}) 
//     }
// }

// export {addToCart,updateCart,getUserCart}



// controllers/cartController.js
// import userModel from "../models/userModel.js";

// const normColorKey = (c) => {
//   const k = String(c || "").trim().toLowerCase();
//   if (!k || k === "-" || k === "null" || k === "undefined") return "-";
//   // normalize your canonical color tags used in FE:
//   if (k === "rosegold" || k === "rose-gold" || k === "rose") return "rose-gold";
//   if (k === "whitegold" || k === "white-gold" || k === "white") return "white-gold";
//   if (k === "yellow" || k === "gold") return "gold";
//   return k; // fallback (if you add other variants later)
// };

// const getUID = (req) => req.user?.id || req.body.userId;

// const addToCart = async (req, res) => {
//   try {
//     const userId = getUID(req);
//     const { itemId, color = null, quantity = 1 } = req.body;
//     if (!userId || !itemId) return res.json({ success: false, message: "Missing userId or itemId" });

//     const user = await userModel.findById(userId);
//     if (!user) return res.json({ success: false, message: "User not found" });

//     const ckey = normColorKey(color);
//     const cart = user.cartData || {};

//     cart[itemId] = cart[itemId] || {};
//     cart[itemId][ckey] = Number(cart[itemId][ckey] || 0) + Number(quantity || 1);

//     user.cartData = cart;
//     await user.save();

//     res.json({ success: true, message: "Added to cart" });
//   } catch (err) {
//     console.error(err);
//     res.json({ success: false, message: err.message });
//   }
// };

// const updateCart = async (req, res) => {
//   try {
//     const userId = getUID(req);
//     const { itemId, color = null, quantity } = req.body;
//     if (!userId || !itemId || typeof quantity !== "number")
//       return res.json({ success: false, message: "Missing fields" });

//     const user = await userModel.findById(userId);
//     if (!user) return res.json({ success: false, message: "User not found" });

//     const ckey = normColorKey(color);
//     const cart = user.cartData || {};
//     cart[itemId] = cart[itemId] || {};

//     if (quantity <= 0) {
//       // remove that variant
//       delete cart[itemId][ckey];
//       if (Object.keys(cart[itemId]).length === 0) delete cart[itemId];
//     } else {
//       cart[itemId][ckey] = quantity;
//     }

//     user.cartData = cart;
//     await user.save();

//     res.json({ success: true, message: "Cart updated" });
//   } catch (err) {
//     console.error(err);
//     res.json({ success: false, message: err.message });
//   }
// };

// const getUserCart = async (req, res) => {
//   try {
//     const userId = getUID(req);
//     if (!userId) return res.json({ success: false, message: "Missing userId" });

//     const user = await userModel.findById(userId);
//     if (!user) return res.json({ success: false, message: "User not found" });

//     res.json({ success: true, cartData: user.cartData || {} });
//   } catch (err) {
//     console.error(err);
//     res.json({ success: false, message: err.message });
//   }
// };


// // remove a single cart line (by key)
// // remove a single line by productId + color
// const removeFromCart = async (req, res) => {
//   try {
//     const userId = getUID(req);
//     const { itemId, color = null } = req.body; // itemId = productId
//     const user = await userModel.findById(userId);
//     if (!user) return res.json({ success: false, message: "User not found" });

//     const ckey = normColorKey(color);
//     const cart = user.cartData || {};
//     if (cart[itemId]) {
//       delete cart[itemId][ckey];
//       if (!Object.keys(cart[itemId]).length) delete cart[itemId];
//       user.cartData = cart;
//       user.markModified('cartData');
//       await user.save();
//     }
//     res.json({ success: true, message: "Removed from Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };


// export { addToCart, updateCart, getUserCart, removeFromCart };

// controllers/cartController.js
import userModel from "../models/userModel.js";
import connectRedis from "../config/redis.js"; // ✅ Reusable Redis connection

// 🔹 Initialize Redis client once
const redisClient = await connectRedis();

// Normalize color key
const normColorKey = (c) => {
  const k = String(c || "").trim().toLowerCase();
  if (!k || k === "-" || k === "null" || k === "undefined") return "-";
  if (k === "rosegold" || k === "rose-gold" || k === "rose") return "rose-gold";
  if (k === "whitegold" || k === "white-gold" || k === "white") return "white-gold";
  if (k === "yellow" || k === "gold") return "gold";
  return k;
};

const getUID = (req) => req.user?.id || req.body.userId;

// 🔹 Helper: sync Redis + MongoDB
const saveCart = async (userId, cart) => {
  await redisClient.setEx(`cart:${userId}`, 60 * 60, JSON.stringify(cart)); // cache 1 hour
  await userModel.findByIdAndUpdate(userId, { cartData: cart }, { new: true });
};

// 🔹 Add item to cart
const addToCart = async (req, res) => {
  try {
    const userId = getUID(req);
    const { itemId, color = null, quantity = 1 } = req.body;

    if (!userId || !itemId)
      return res.json({ success: false, message: "Missing userId or itemId" });

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    // Redis get
    let cart = {};
    const cached = await redisClient.get(`cart:${userId}`);
    cart = cached ? JSON.parse(cached) : user.cartData || {};

    const ckey = normColorKey(color);
    cart[itemId] = cart[itemId] || {};
    cart[itemId][ckey] = (Number(cart[itemId][ckey] || 0) + Number(quantity));

    await saveCart(userId, cart);

    res.json({ success: true, message: "Added to cart", cartData: cart });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

// 🔹 Update cart
const updateCart = async (req, res) => {
  try {
    const userId = getUID(req);
    const { itemId, color = null, quantity } = req.body;

    if (!userId || !itemId || typeof quantity !== "number")
      return res.json({ success: false, message: "Missing or invalid fields" });

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    let cart = {};
    const cached = await redisClient.get(`cart:${userId}`);
    cart = cached ? JSON.parse(cached) : user.cartData || {};

    const ckey = normColorKey(color);
    cart[itemId] = cart[itemId] || {};

    if (quantity <= 0) {
      delete cart[itemId][ckey];
      if (Object.keys(cart[itemId]).length === 0) delete cart[itemId];
    } else {
      cart[itemId][ckey] = quantity;
    }

    await saveCart(userId, cart);

    res.json({ success: true, message: "Cart updated", cartData: cart });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

// 🔹 Get user cart
const getUserCart = async (req, res) => {
  try {
    const userId = getUID(req);
    if (!userId) return res.json({ success: false, message: "Missing userId" });

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    let cart = {};
    const cached = await redisClient.get(`cart:${userId}`);
    if (cached) {
      cart = JSON.parse(cached);
    } else {
      cart = user.cartData || {};
      await redisClient.setEx(`cart:${userId}`, 60 * 60, JSON.stringify(cart)); // cache 1 hour
    }

    res.json({ success: true, cartData: cart });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

// 🔹 Remove from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = getUID(req);
    const { itemId, color = null } = req.body;

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    let cart = {};
    const cached = await redisClient.get(`cart:${userId}`);
    cart = cached ? JSON.parse(cached) : user.cartData || {};

    const ckey = normColorKey(color);
    if (cart[itemId]) {
      delete cart[itemId][ckey];
      if (!Object.keys(cart[itemId]).length) delete cart[itemId];
    }

    await saveCart(userId, cart);

    res.json({ success: true, message: "Removed from cart", cartData: cart });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

export { addToCart, updateCart, getUserCart, removeFromCart };
