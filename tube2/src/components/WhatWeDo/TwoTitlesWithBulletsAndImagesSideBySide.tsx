"use client";

import React, { useState } from "react";
import Image from "next/image";

const TwoTitlesWithBulletsAndImagesSideBySide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const lngOlefinsPoints = [
    "Open Art SMR",
    "Truck-able, skid built, modular design",
    "400KTA Ethylene and 120,000 gpd LNG capacity",
    "70% capacity turndown and lower 30% with VFD",
    "18 months delivery",
    "BAHE Cold-box 24 – 32 weeks",
    "6500hp Compressor 54 – 60 weeks",
  ];

  const applicationsPoints = [
    "Multi-commodity liquefaction",
    "Olefins Export",
    "CO2 Liquefaction",
    "Flared Gas Recovery",
    "Stranded Gas",
    "LNG for Bunker Fuel",
  ];

  return (
    <section className="py-10">
      <div className="container">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] dark:border-white/[.15]">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Left column */}
            <div className="flex-1 flex flex-col">
              <h2 className={`mb-4 text-xl text-Green font-bold !leading-tight dark:text-white sm:text-2xl md:text-[30px]`}>
                LNG, OLEFINS, LIGHT NGL AND CO2
              </h2>

              {/* Single Card for LNG, OLEFINS, LIGHT NGL AND CO2 */}
              <div className="flex-grow mb-6">
                <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 h-full">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {lngOlefinsPoints.map((point, index) => (
                      <li key={index} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Single Image */}
              <div className="flex justify-center">
                <div
                  className="relative h-80 w-full cursor-pointer transition-shadow duration-300" // Set height to h-80 for taller images
                  onClick={() => openModal("/images/addedImg/Modular-5.png")}
                >
                  <Image
                    src="/images/addedImg/Modular-5.png"
                    alt="Modular Plant 1"
                    layout="fill" // Use fill to cover the entire container
                    objectFit="cover" // Cover ensures it fills the space
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col">
              <h2 className={`mb-4 text-xl text-Green font-bold !leading-tight dark:text-white sm:text-2xl md:text-[30px]`}>
                APPLICATIONS
              </h2>

              {/* Single Card for Applications */}
              <div className="flex-grow mb-6">
                <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 h-full">
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {applicationsPoints.map((point, index) => (
                      <li key={index} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Single Image */}
              <div className="flex justify-center">
                <div
                  className="relative h-80 w-full cursor-pointer transition-shadow duration-300" // Set height to h-80 for taller images
                  onClick={() => openModal("/images/addedImg/Modular-6.png")}
                >
                  <Image
                    src="/images/addedImg/Modular-6.png"
                    alt="Modular Plant 2"
                    layout="fill" // Use fill to cover the entire container
                    objectFit="cover" // Cover ensures it fills the space
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Modal Image"
              layout="intrinsic"
              width={800}
              height={600}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TwoTitlesWithBulletsAndImagesSideBySide;
