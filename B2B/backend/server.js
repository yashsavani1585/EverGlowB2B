import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import wishlistRouter from "./routes/wishlistRoute.js";
import orderRouter from "./routes/orderRoute.js";
import session from "express-session";
import authRoutes from "./routes/auth.routes.js";
import formsRouter from "./routes/forms.routes.js";
import pricingRouter from "./routes/pricingRoutes.js";
import connectRedis from "./config/redis.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
connectRedis();

// ✅ Body parsers (missing pehle)
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: true })); // parse form-urlencoded body

app.use(
  session({
    secret: process.env.SESSION_SECRET || "devsecret",
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: "lax" },
  })
);

// ✅ CORS setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://elysianjewels.ca",
  "https://admin.elysianjewels.ca",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman/mobile apps allow
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// API Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/auth", authRoutes);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/forms", formsRouter);
app.use("/api/pricing", pricingRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});



app.listen(port, () => console.log("Server started on PORT: " + port));
