"use client";

import React from "react";
import { useRouter } from "next/navigation";

const JobDetails = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 p-6">
      <div className="max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        {/* Job Title */}
        <h1 className="text-2xl font-bold text-blue-700">
          Electrical &amp; Instrumentation Engineer - Job Description
        </h1>
        <p className="mt-2 text-gray-600">
          GR2 Engineering is an engineering consulting firm with global offices.
          We are committed to delivering innovative solutions across various
          industries. As an Electrical &amp; Instrumentation Engineer,
          you&apos;ll play a crucial role in shaping our projects and ensuring
          excellence in process design and implementation.
        </p>

        {/* Responsibilities */}
        <h2 className="mt-6 text-xl font-semibold">RESPONSIBILITIES</h2>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>
            <strong>Electrical and Instrumentation Design:</strong> Develop
            detailed electrical and instrumentation designs, including wiring
            diagrams, control systems, and layouts.
          </li>
          <li>
            <strong>Prepare Technical Documents:</strong> Create specifications,
            drawings, and calculations for electrical and instrumentation
            systems.
          </li>
          <li>
            <strong>Technical Expertise and Support:</strong> Provide technical
            guidance during procurement, construction, and commissioning.
          </li>
          <li>
            <strong>Safety and Compliance:</strong> Participate in safety
            reviews, risk assessments, and compliance checks.
          </li>
          <li>
            <strong>Project Coordination:</strong> Collaborate with
            multidisciplinary teams to integrate electrical and instrumentation
            systems.
          </li>
          <li>
            <strong>Stakeholder Engagement:</strong> Work closely with clients,
            vendors, and regulatory authorities.
          </li>
          <li>
            <strong>Mentorship:</strong> Guide junior engineers and ensure best
            practices.
          </li>
        </ul>

        {/* Qualifications */}
        <h2 className="mt-6 text-xl font-semibold">QUALIFICATIONS</h2>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>
            <strong>Education:</strong> Bachelor&apos;s degree in Electrical
            Engineering or related field.
          </li>
          <li>
            <strong>Experience:</strong> Minimum of 5 years in electrical and
            instrumentation engineering.
          </li>
          <li>
            <strong>Skills:</strong> AutoCAD Electrical, ETAP, and SPI
            experience preferred.
          </li>
          <li>
            <strong>Certifications:</strong> ISA Certified Control Systems
            Technician is a plus.
          </li>
          <li>
            <strong>Industry Focus:</strong> LNG, gas processing, petrochemical,
            oil &amp; gas production.
          </li>
        </ul>

        {/* Apply Button */}
        <div className="mt-6">
          <p className="text-gray-600">
            If you are interested in applying for this position, please click
            the button below.
          </p>
          <button
            className="mt-3 rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            onClick={() => router.push("/apply-page")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
