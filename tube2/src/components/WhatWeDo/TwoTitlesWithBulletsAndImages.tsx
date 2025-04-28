"use client";

import React, { useState } from "react";
import Image from "next/image";

const TwoTitlesWithBulletsAndImages = () => {
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

  const capabilities = [
    "Proven, pre-engineered modular process plants",
    "Designed in the U.S.A.",
    "High availability, off-the-shelf equipment, and components",
    "Fully compliant with industry and U.S. engineering standards",
    "Flexible power utility options with gas and electric",
    "Low-cost operations and maintenance",
    "Quick capacity expansion capability",
  ];

  return (
    <section className="pb-10">
      <div className="container">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
          <div className="flex flex-col items-start">
            <h2 className={`mb-4 text-xl font-bold !leading-tight text-SkyBlue dark:text-white sm:text-2xl md:text-[23px]`}>
              GR2 MODULAR PLANTS
            </h2>
            <h2 className={`mb-4 text-xl font-bold !leading-tight text-Green dark:text-white sm:text-2xl md:text-[30px]`}>
              FASTER DELIVERY - BETTER RETURN
            </h2>

            {/* Single Card for All Capabilities */}
            <div className="max-w-[570px] mb-12">
              <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
                  {capabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="mb-2"
                      style={{ textIndent: '-1.2em', paddingLeft: '1.2em' }}
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Images - 2 in one row */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-2 gap-10 mx-auto">
                {["/images/addedImg/Modular-1.png", "/images/addedImg/Modular-2.png", "/images/addedImg/Modular-3.png", "/images/addedImg/Modular-4.png"].map((src, index) => (
                  <div
                    key={index}
                    className="relative w-full cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => openModal(src)}
                  >
                    <Image
                      src={src}
                      alt={`Sample Image ${index + 1}`}
                      layout="intrinsic"
                      width={500}
                      height={300}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                ))}
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

export default TwoTitlesWithBulletsAndImages;
