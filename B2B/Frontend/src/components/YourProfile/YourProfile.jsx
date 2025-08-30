import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/jawellarycontactPage.png";

const USER_BASE = "http://localhost:4000/api/user";

const splitName = (user) => {
  // Prefer explicit first/last if present (Google users)
  if (user?.firstName || user?.lastName) {
    return {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    };
  }
  // Else split "name"
  const parts = (user?.name || "").trim().split(/\s+/);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" ") || "",
  };
};

const YourProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    gender: "",
  });
  const [loading, setLoading] = useState(true);

  // Prefill on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
      return;
    }

    // Try local cache first (if you saved user at login)
    const cached = localStorage.getItem("user");
    if (cached) {
      const u = JSON.parse(cached);
      const { firstName, lastName } = splitName(u);
      setForm((f) => ({
        ...f,
        firstName,
        lastName,
        email: u.email || "",
        phone: u.phone || "",
        address: u.address || "",
        apartment: u.apartment || "",
        city: u.city || "",
        state: u.state || "",
        zip: u.zip || "",
        dob: u.dob || "",
        gender: u.gender || "",
      }));
      setLoading(false);
    }

    // Always refresh from backend (authoritative)
    fetch(`${USER_BASE}/me`, { headers: { token } })
      .then((r) => r.json())
      .then((json) => {
        if (!json.success) return;
        const u = json.user;
        const { firstName, lastName } = splitName(u);
        setForm({
          firstName,
          lastName,
          email: u.email || "",
          phone: u.phone || "",
          address: u.address || "",
          apartment: u.apartment || "",
          city: u.city || "",
          state: u.state || "",
          zip: u.zip || "",
          dob: u.dob || "",
          gender: u.gender || "",
        });
        // keep cache in sync (optional)
        localStorage.setItem("user", JSON.stringify(u));
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return navigate("/auth");

    // Combine names back into a single "name" field for your backend
    const name = `${form.firstName || ""} ${form.lastName || ""}`.trim();

    const payload = {
      name,
      phone: form.phone,
      address: form.address,
      apartment: form.apartment,
      city: form.city,
      state: form.state,
      zip: form.zip,
      dob: form.dob,
      gender: form.gender,
    };

    const res = await fetch(`${USER_BASE}/updateProfile`, {
      method: "POST", // use the method your route expects
      headers: { "Content-Type": "application/json", token },
      body: JSON.stringify(payload),
    }).then((r) => r.json());

    if (res.success) {
      alert("Profile updated");
      // If your backend returns the updated user, refresh cache
      if (res.user) localStorage.setItem("user", JSON.stringify(res.user));
    } else {
      alert(res.message || "Failed to update profile");
    }
  };

  if (loading) return <div className="p-6">Loading profile…</div>;

  return (
    <div className="max-w-6xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Image */}
        <div className="relative h-64 md:h-auto">
          <img
            src={profileImage}
            alt="Profile Banner"
            className="absolute inset-0 w-full h-full object-cover md:object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-10 md:p-12 flex items-center">
          <form className="w-full space-y-5" onSubmit={onSubmit}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Your Profile
            </h2>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder="First Name"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder="Last Name"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
            </div>

            {/* Email (read-only) */}
            <input
              type="email"
              name="email"
              value={form.email}
              readOnly
              placeholder="E-mail"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Phone Number */}
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Address"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Apartment */}
            <input
              type="text"
              name="apartment"
              value={form.apartment}
              onChange={onChange}
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* City, State, Zip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={onChange}
                placeholder="City"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={onChange}
                placeholder="State"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={onChange}
                placeholder="ZIP Code"
                className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
              />
            </div>

            {/* DOB */}
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={onChange}
              className="w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-teal-600 outline-none"
            />

            {/* Gender */}
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={onChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={onChange}
                />
                <span>Female</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#CEBB98] text-white py-3 rounded-md hover:bg-black transition"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
