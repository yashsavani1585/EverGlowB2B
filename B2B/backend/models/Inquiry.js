import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", default: null },
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    topic: { type: String, default: "general" },
    status: { type: String, enum: ["new","read","resolved"], default: "new" },
    adminNotes: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.models.inquiry ||
  mongoose.model("inquiry", inquirySchema);
