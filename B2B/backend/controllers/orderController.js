// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from 'stripe'
//global variables
// const currency = 'inr'
// const deliveryCharge = 10
//gateway initialized
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing orders using COD method
// const placeOrder = async (req,res) => {
//     try {
//         const {userId, items, amount, address} = req.body;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"COD",
//             payment:false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData)
//         await newOrder.save()

//         await userModel.findByIdAndUpdate(userId, {cartData:{}})

//         res.json({success:true, message:"Order Placed"})

//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
        
//     }
// }

// Placing orders using Stripe method
// const placeOrderStripe = async (req,res) => {
//     try {

//         const {userId, items, amount, address} = req.body;
//         const {origin} = req.headers;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"Stripe",
//             payment:false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData)
//         await newOrder.save()

//         const line_items = items.map((item)=>({
//             price_data:{
//                 currency:currency,
//                 product_data:{
//                     name:item.name
//                 },
//                 unit_amount: item.price * 100
//             },
//             quantity: item.quantity
//         }))

//         line_items.push({
//             price_data:{
//                 currency:currency,
//                 product_data:{
//                     name:'Delivery Charges'
//                 },
//                 unit_amount: deliveryCharge * 100
//             },
//             quantity: 1
//         })

//         const session = await stripe.checkout.sessions.create({
//             success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
//             line_items,
//             mode:'payment',
//         })

//         res.json({success:true, session_url:session.url})

//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
//     }
// }

// Verify Stripe
// const verifyStripe = async(req,res) => {

//     const {orderId, success, userId} = req.body

//     try {
//         if (success === "true") {
//             await orderModel.findById(orderId, {payment:true});
//             await userModel.findByIdAndUpdate(userId, {cartData:{}})
//             res.json({success:true});

//         }
//         else{
//             await orderModel.findOneAndDelete(orderId)
//             res.json({success:false})
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
//     }
// }

// Placing orders using Razorpay method
// const placeOrderRazorpay = async (req,res) => {
    
// }

// // All Orders data for admin panel
// const allOrders = async (req,res) => {
//     try {
//         const orders = await orderModel.find({})
//         res.json({success:true, orders})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
//     }
// }

// // User Orders data for Frontend
// const userOrders = async (req,res) => {
//     try {
        
//         const {userId} = req.body
//         const orders = await orderModel.find({userId})
//         res.json({success:true, orders})

//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
//     }
// }

// // update order status from AdminPanel
// const updateStatus = async (req,res) => {
//     try {
//         const {orderId, status} = req.body
//         await orderModel.findByIdAndUpdate(orderId, {status})
//         res.json({success:true, message:'Status Updated'})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
//     }
// }

// export {placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus}

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import connectRedis from "../config/redis.js";

// TTL for cached orders in seconds
const ORDER_CACHE_TTL = Number(process.env.ORDER_CACHE_TTL || 60);

// -------------------- Helpers --------------------
async function cacheOrders(key, data) {
  try {
    const redisClient = await connectRedis();
    await redisClient.setEx(key, ORDER_CACHE_TTL, JSON.stringify(data));
  } catch (err) {
    console.error("Redis setEx error:", err);
  }
}

async function getCachedOrders(key) {
  try {
    const redisClient = await connectRedis();
    const cached = await redisClient.get(key);
    if (cached) return JSON.parse(cached);
  } catch (err) {
    console.error("Redis get error:", err);
  }
  return null;
}

// -------------------- Controllers --------------------

// Place COD order
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      status: "Pending",
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // Clear cached user orders
    const userOrdersCacheKey = `user_orders_${userId}`;
    const redisClient = await connectRedis();
    await redisClient.del(userOrdersCacheKey);

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placeholder for Razorpay integration
const placeOrderRazorpay = async (req, res) => {
  res.status(501).json({ success: false, message: "Razorpay not implemented yet" });
};

// Admin: Get all orders
const allOrders = async (req, res) => {
  try {
    const cacheKey = "all_orders";
    let orders = await getCachedOrders(cacheKey);

    if (!orders) {
      orders = await orderModel.find({});
      await cacheOrders(cacheKey, orders);
    }

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User: Get orders
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const cacheKey = `user_orders_${userId}`;
    let orders = await getCachedOrders(cacheKey);

    if (!orders) {
      orders = await orderModel.find({ userId });
      await cacheOrders(cacheKey, orders);
    }

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Admin: Update order status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });

    // Clear caches after update
    const redisClient = await connectRedis();
    await redisClient.del("all_orders");

    const order = await orderModel.findById(orderId);
    if (order?.userId) await redisClient.del(`user_orders_${order.userId}`);

    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus };
