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
import path from "path";
import { fileURLToPath } from "url";

// App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();
connectRedis();

const __filename = fileURLToPath(import.meta.url);  
// Get the directory of this file
const __dirname = path.dirname(__filename);

// Print them
console.log("__filename:", __filename);
console.log("__dirname :", __dirname);

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Session
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
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "https://elysianjewels.ca",
  "https://admin.elysianjewels.ca",
  "https://everglowb2b.onrender.com", // backend URL if frontend is hosted somewhere else
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman, mobile apps, curl
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.warn("Blocked by CORS:", origin);
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

const frontendPath = path.join(__dirname, "../Frontend/dist");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


// Test route
app.get("/", (req, res) => {
  res.send("API Working");
});



// Start server
app.listen(port, () => console.log("Server started on PORT: " + port));
