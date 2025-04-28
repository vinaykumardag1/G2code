import React from "react";
import Image from "next/image"; // Import Next.js Image component
import addressData from "./addressData";
import { Filler } from "chart.js";

const CardComponent = ({ id }) => {
  const addressInfo = addressData.find((data) => data.id === id);

  if (!addressInfo) return null;

  return (
    <div className="card w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48"> {/* Ensure this div has fixed width and height */}
        <Image
          src={addressInfo.image} // Ensure this is a valid path
          alt={addressInfo.city}
          layout="fill" // Use fill to make the image fill the parent container
          objectFit="cover" // Ensures the image covers the container area
          className="rounded-t-lg" // Optional styling
          priority={id === 1} // Load the first image with higher priority if needed
        />
      </div>

      {/* Content Section */}
      <div className="w-full h-60 p-6">
        {/* Location Details */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-SkyBlue hover:text-blue-800 transition-colors cursor-pointer">
            {addressInfo.city}, {addressInfo.country}
          </h3>
          <p className=" text-gray-600 hover:text-SkyBlue transition-colors cursor-pointer">
            {addressInfo.address}
          </p>
        </div>

        {/* Email and Phone Number */}
        <div className="mb-4">
          {/* Email with mailto */}
          <p className="text-gray-600 mb-2 hover:text-SkyBlue transition-colors cursor-pointer">
            <a href={`mailto:${addressInfo.email}`} className="hover:underline">
              {addressInfo.email}
            </a>
          </p>

          {/* Phone Number */}
          <p className=" text-gray-600 hover:text-SkyBlue transition-colors cursor-pointer">
            {addressInfo.phoneNo}
          </p>
        </div>

        {/* See on maps link */}
        <div className="mb-4">
          <a
            href={addressInfo.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-Green hover:text-blue-800 flex items-center"
          >
            See on maps →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
