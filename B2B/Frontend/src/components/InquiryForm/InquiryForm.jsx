import React, { useState } from "react";
import { TextField } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        mobile: "",
        itemDetails: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobile: value ? String(value) : "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email || !formData.mobile || !formData.itemDetails) {
            toast.error("All fields are required!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email!");
            return;
        }

        if (formData.mobile.replace(/\D/g, "").length < 6) {
            toast.error("Enter a valid mobile number!");
            return;
        }

        toast.success("Inquiry submitted successfully ✅");
        console.log("Submitted Data:", formData);

        setFormData({
            firstName: "",
            email: "",
            mobile: "",
            itemDetails: "",
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen  p-4">
            <Toaster position="top-right" reverseOrder={false} />
            <form
                onSubmit={handleSubmit}
                className="bg-white  rounded-2xl p-2 w-full min-w-[80vw] space-y-4 mb-30 md:min-w-[50vw] lg:min-w-[40vw]"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800 ">
                    Inquiry Form
                </h2>

                {/* First Name */}
                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                    className="mb-4 mt-4"  // <-- Tailwind margin bottom
                />


                {/* Email */}
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    className="mb-4 mt-4"         // Tailwind margin
                    sx={{ mt: 2 }}                // Optional: MUI spacing (mt: 2 => 16px)
                />


                {/* Mobile */}
                <div className="mb-4">
                    <PhoneInput
                        country={"in"}
                        value={formData.mobile}
                        onChange={handlePhoneChange}
                        inputStyle={{
                            width: "100%",
                            height: "40px",
                            fontSize: "14px",
                        }}
                        inputClass="rounded"
                        placeholder="+91 99999 99999"
                        countryCodeEditable={false}
                        disableDropdown={false}
                        className="mb-4 mt-4"         // Tailwind margin

                    />
                </div>

                {/* Item Details */}
                <TextField
                    label="Item Details Inquiry"
                    name="itemDetails"
                    value={formData.itemDetails}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    fullWidth
                    required
                        className="mb-4 mt-4"         // Tailwind margin
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 rounded-lg font-medium text-white transition duration-300 hover:opacity-90 h-[50px] mb-4 mt-4"
                    style={{ backgroundColor: "#CEBB98" }}
                >
                    Submit Inquiry
                </button>
            </form>
        </div>
    );
};

export default InquiryForm;
