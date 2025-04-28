"use client";

import axios from "axios";
import React, { useState } from "react";

const ApplyForJobPage = () => {
  const [formData, setFormData] = useState<any>({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    coverLetter: "",
    resume: null,
    roleAppliedFor: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataAppend = new FormData();

    formDataAppend.append("fullName", formData.fullName);
    formDataAppend.append("phone", formData.phone);
    formDataAppend.append("phone", formData.phone);
    formDataAppend.append("linkedIn", formData.linkedIn);
    formDataAppend.append("coverLetter", formData.coverLetter);
    formDataAppend.append("resume", formData.resume);
    formDataAppend.append("roleAppliedFor", formData.roleAppliedFor);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/apply/67b4c6308c1782c35c44a6ac`,
        formDataAppend,
      );

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      {/* Form Container */}
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-blue-700">
          APPLY FOR A JOB
        </h2>
        <p className="mt-2 text-center text-gray-600">
          GR2 Engineering is an engineering consulting firm with global offices.
          We are committed to delivering innovative solutions across various
          industries.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold">LinkedIn Profile</label>
            <input
              type="text"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              placeholder="Enter your LinkedIn profile URL"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={4}
              placeholder="Enter your cover letter"
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold">Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              className="w-full rounded-md border p-2"
            />
            <p className="text-sm text-gray-500">
              Accepted file types: PDF, DOC, DOCX. Max size: 10MB.
            </p>
          </div>
          <div>
            <label className="block font-semibold">Job Title</label>
            <select
              name="roleAppliedFor"
              value={formData.roleAppliedFor}
              onChange={handleChange}
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Job Title</option>
              <option value="Electrical Engineer">Electrical Engineer</option>
              <option value="Instrumentation Engineer">
                Instrumentation Engineer
              </option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-700 p-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Send Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForJobPage;
