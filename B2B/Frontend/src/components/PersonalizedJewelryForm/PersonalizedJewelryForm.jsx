import React, { useState } from "react";
import Select from "react-select";
import divider from "../../assets/Formdesignadd.png";

const typeOptions = [
  { value: "ring", label: "Ring" },
  { value: "necklace", label: "Necklace" },
  { value: "bracelet", label: "Bracelet" },
  { value: "earrings", label: "Earrings" },
];

const metalOptions = [
  {
    label: "Silver",
    options: [
      { value: "silver-925", label: "Silver 925" },
      { value: "silver-yellow-gold-plated", label: "Silver Yellow Gold Plated" },
      { value: "silver-rose-gold-plated", label: "Silver Rose Gold Plated" },
    ],
  },
  {
    label: "Gold - Yellow",
    options: [
      { value: "gold-yellow-18kt", label: "Gold Yellow 18kt" },
      { value: "gold-yellow-14kt", label: "Gold Yellow 14kt" },
      { value: "gold-yellow-10kt", label: "Gold Yellow 10kt" },
      { value: "gold-yellow-9kt", label: "Gold Yellow 9kt" },
    ],
  },
  {
    label: "Gold - Rose",
    options: [
      { value: "gold-rose-18kt", label: "Gold Rose 18kt" },
      { value: "gold-rose-14kt", label: "Gold Rose 14kt" },
      { value: "gold-rose-10kt", label: "Gold Rose 10kt" },
      { value: "gold-rose-9kt", label: "Gold Rose 9kt" },
    ],
  },
  {
    label: "Gold - White",
    options: [
      { value: "gold-white-18kt", label: "Gold White 18kt" },
      { value: "gold-white-14kt", label: "Gold White 14kt" },
      { value: "gold-white-10kt", label: "Gold White 10kt" },
      { value: "gold-white-9kt", label: "Gold White 9kt" },
    ],
  },
  {
    label: "Platinum",
    options: [{ value: "platinum", label: "Platinum" }],
  },
];

const PersonalizedJewelryForm = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMetal, setSelectedMetal] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Divider Image */}
      <div className="flex items-center justify-center mb-8">
        <img src={divider} alt="divider" className="h-8 w-90" />
      </div>

      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name*"
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            required
            className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
          />
        </div>

        {/* Row 2 */}
        <input
          type="email"
          placeholder="Email Address*"
          required
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
        />

        {/* Row 3 - Type */}
        <Select
          options={typeOptions}
          placeholder="Choose Type"
          value={selectedType}
          onChange={setSelectedType}
          menuPlacement="bottom"   // 👈 hamesha niche open hoga
          menuPosition="fixed"     // 👈 scroll hone par bhi niche hi rahega
          className="w-full"
        />

        {/* Row 4 - Metal Type */}
        <Select
          options={metalOptions}
          placeholder="Select Metal Type"
          value={selectedMetal}
          onChange={setSelectedMetal}
          menuPlacement="bottom"
          menuPosition="fixed"
          className="w-full"
        />

        {/* File Upload */}
        <div>
          <label
            htmlFor="fileUpload"
            className="block w-full border rounded-md px-4 py-3 text-gray-500 cursor-pointer hover:bg-purple-50"
          >
            <input
              id="fileUpload"
              type="file"
              accept=".pdf, .jpg, .png, .jpeg, .doc, .docx"
              className="hidden"
            />
            <span className="text-gray-500 font-medium">Choose File</span>
          </label>
          <p className="text-gray-500 text-sm mt-2">
            Allowed types: pdf, jpg, png, jpeg, doc, docx.
          </p>
        </div>

        {/* Textarea */}
        <textarea
          rows="4"
          placeholder="Please describe your idea for this Custom Project..."
          className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-900 outline-none placeholder-gray-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#CEBB98] text-white px-6 py-3 rounded-md shadow hover:bg-black transition w-full md:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalizedJewelryForm;
