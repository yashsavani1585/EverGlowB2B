import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // Existing fields
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: function() { return this.authProvider === 'jwt'; } },

    phone: { type: String },
    address: { type: String },
    apartment: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    dob: { type: String },
    gender: { type: String },
    cartData: { type: Object, default: {} },
    wishlist: { type: [String], default: [] },


    // Google OAuth integration fields
    googleId: {              // New field for Google user ID
        type: String,
        unique: true,
        sparse: true,
        index: true
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    photo: { type: String, default: null },

    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date, default: Date.now },
    authProvider: {
        type: String,
        enum: ['jwt', 'google'],
        default: 'jwt'
    }
}, { minimize: false, timestamps: true });

// Index for better performance
userSchema.index({ googleId: 1, email: 1 });

// Virtual for full name
userSchema.virtual('fullName').get(function() {
    if (this.firstName && this.lastName) {
        return `${this.firstName} ${this.lastName}`.trim();
    }
    return this.name || '';
});

// Ensure virtual fields are serialized
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;











// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     // Existing fields - preserved for backward compatibility
//     name: {type: String , required:true},
//     email: {type: String , required:true, unique:true},
//     password: { type: String, required: function() { return this.authProvider === 'jwt'; } },

//     phone: {type: String},
//     address: {type: String},
//     apartment: {type: String},
//     city: {type: String},
//     state: {type: String},
//     zip: {type: String},
//     dob: {type: String},
//     gender: {type: String},
//     cartData: {type: Object, default: {}}, // { productId: quantity }
    
//     // Clerk integration fields - optional for backward compatibility
//     clerkId: {
//         type: String,
//         unique: true,
//         sparse: true, // Allows null values while maintaining uniqueness
//         index: true, // Add index for better query performance
//     },
//     firstName: {
//         type: String,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         trim: true,
//     },
//     photo: {
//         type: String,
//         default: null,
//     },
//     isActive: {
//         type: Boolean,
//         default: true,
//     },
//     lastLogin: {
//         type: Date,
//         default: Date.now,
//     },
//     authProvider: {
//         type: String,
//         enum: ['jwt', 'clerk'],
//         default: 'jwt' // Default to JWT for existing users
//     }
// },{minimize:false, timestamps: true}) // Add timestamps for createdAt and updatedAt

// // Create compound index for better query performance
// userSchema.index({ clerkId: 1, email: 1 });

// // Virtual for full name (works with both existing 'name' field and new firstName/lastName)
// userSchema.virtual('fullName').get(function() {
//     if (this.firstName && this.lastName) {
//         return `${this.firstName} ${this.lastName}`.trim();
//     }
//     return this.name || '';
// });

// // Ensure virtual fields are serialized
// userSchema.set('toJSON', { virtuals: true });
// userSchema.set('toObject', { virtuals: true });

// const userModel = mongoose.models.user || mongoose.model('user', userSchema);

// export default userModel