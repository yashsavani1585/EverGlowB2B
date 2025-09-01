// // controllers/forms.controller.js
// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import PersonalizedRequest from "../models/PersonalizedRequest.js";

// export const createPersonalized = async (req, res) => {
//   const { name, phone, email, type, metal, notes, userId } = req.body;
//   let fileUrl = null;

//   try {
//     if (req.file) {
//       const up = await cloudinary.uploader.upload(req.file.path, {
//         folder: "everglow/forms",
//         resource_type: "auto", // <-- important for pdf/docx
//       });
//       fileUrl = up.secure_url;
//     }

//     const doc = await PersonalizedRequest.create({
//       userId: userId || null,
//       name, phone, email, type, metal, notes, fileUrl,
//     });

//     res.json({ success: true, data: doc });
//   } catch (e) {
//     res.status(400).json({ success: false, message: e.message });
//   } finally {
//     // clean temp file if present
//     if (req.file?.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
//   }
// };


// controllers/forms.controller.js
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import PersonalizedRequest from "../models/PersonalizedRequest.js";
import Inquiry from "../models/Inquiry.js";

// PUBLIC: submit personalized request (supports image/pdf/doc/docx via uploadFormFile)
export const createPersonalized = async (req, res) => {
  let fileUrl = null;

  try {
    const { name, phone, email, type, metal, notes, userId } = req.body;

    // basic validation (tweak as needed)
    if (!name || !phone || !email || !type || !metal) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // if an attachment is present, push to Cloudinary
    if (req.file) {
      const uploaded = await cloudinary.uploader.upload(req.file.path, {
        folder: "everglow/forms",
        resource_type: "auto", // allows images + pdf/doc/docx
      });
      fileUrl = uploaded.secure_url || null;
    }

    const doc = await PersonalizedRequest.create({
      userId: userId || null,
      name,
      phone,
      email,
      type,   // e.g., "rings"
      metal,  // e.g., "gold-yellow-14kt"
      notes: notes || "",
      fileUrl,
    });

    return res.json({ success: true, data: doc });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  } finally {
    // cleanup local temp file created by multer
    try {
      if (req.file?.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
    } catch {}
  }
};

// PUBLIC: submit inquiry (no file by default; add uploadFormFile in route if needed)
export const createInquiry = async (req, res) => {
  try {
    const { name, phone, email, message, topic, userId } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    const doc = await Inquiry.create({
      userId: userId || null,
      name,
      phone: phone || "",
      email,
      message,
      topic: topic || "general",
    });

    return res.json({ success: true, data: doc });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

// ADMIN: list personalized requests
export const listPersonalized = async (req, res) => {
  try {
    const { status } = req.query;
    const q = status ? { status } : {};
    const data = await PersonalizedRequest.find(q).sort({ createdAt: -1 });
    return res.json({ success: true, data });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

// ADMIN: update personalized status/notes
export const updatePersonalized = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;
    const doc = await PersonalizedRequest.findByIdAndUpdate(
      id,
      { ...(status && { status }), ...(adminNotes !== undefined && { adminNotes }) },
      { new: true }
    );
    return res.json({ success: true, data: doc });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

// ADMIN: list inquiries
export const listInquiries = async (_req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });
    return res.json({ success: true, data });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

// ADMIN: update inquiry status/notes
export const updateInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;
    const doc = await Inquiry.findByIdAndUpdate(
      id,
      { ...(status && { status }), ...(adminNotes !== undefined && { adminNotes }) },
      { new: true }
    );
    return res.json({ success: true, data: doc });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};
