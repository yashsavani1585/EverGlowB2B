import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import wishlistRouter from './routes/wishlistRoute.js'
import orderRouter from './routes/orderRoute.js'
import session from "express-session";
import authRoutes from "./routes/auth.routes.js";
import formsRouter from "./routes/forms.routes.js";

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(
  session({
    secret: process.env.SESSION_SECRET || "devsecret",
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: "lax" },
  })
);

//middlewares
app.use(express.json())
app.use(cors());


//api end points

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.use("/api/auth", authRoutes);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/forms", formsRouter);


app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>console.log('Server started on PORT:' + port));