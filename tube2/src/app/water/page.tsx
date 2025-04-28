import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WaterCard from "@/components/WhatWeDo/WaterCard"; // Adjust path if needed

// Metadata
export const metadata: Metadata = {
  title: "Water - GR2 Engineering",
};

// Define Card Data
const waterPageCardData = [
  {
    id: 1,
    title: "Industry & Applications",
    items: [
      "Social Programs",
      "Oil and Gas",
      "Power",
      "Residential Projects",
      "Food & Beverage",
      "Municipalities",
      "Heavy Industries",
      "Textile",
    ],
  },
  {
    id: 2,
    title: "Onshore and Offshore Solutions",
    items: [
      "Filtration/Softening Systems",
      "Ultrafiltration System",
      "Reverse Osmosis",
      "Nanofiltration Systems",
      "Membrane Bio-Reactor Systems",
      "Electro-deionization Systems",
      "Ozonization Systems",
      "Mineral Dosing Systems",
      "Wastewater Treatment and Recycling Systems",
      "Desalination",
    ],
  },
];

// WaterPage Component
const WaterPage = () => {
  return (
    <>
      {/* Background Banner Section */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start">
        <Image
          src="/images/banner/water.jpg"
          alt="Water Background"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="container mx-auto pt-10 px-10">
            <Breadcrumb
              subpageName="What We Do"
              pageName="Water"
              description=""
            />
          </div>

        </div>
      </div>

      {/* Content Section */}
      <section className="pb-10 mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  As global concerns over water scarcity and quality continue to rise, our team is dedicated to providing comprehensive solutions to address these challenges head-on. With expertise in water treatment, distribution, and management, we offer a full spectrum of services tailored to meet the diverse needs of our clients. From designing state-of-the-art treatment facilities to implementing smart water management systems, GR2 Engineering is committed to engineering solutions that ensure access to clean, safe water for generations to come.
                </p>

                {/* Title and Subtitle */}
                <h2 className="uppercase mb-8 text-3xl text-SkyBlue font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight">
                  Water Treatment Solutions
                </h2>

                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Aquamatch’s global experience in water desalination and treatment systems with GR2’s broad EPC experience enables GR2-Aquamatch to offer on-schedule and in-budget water treatment at industry standards, with world-class solutions for onshore and offshore facilities.
                </p>

                {/* Display Card Components and Images */}
                <div className="flex flex-col lg:flex-row gap-6">
                  {waterPageCardData.map((data, index) => (
                    <div key={data.id} className="w-full lg:w-1/2 px-4">
                      <WaterCard
                        title={data.title}
                        items={data.items}
                        style={index === 0 ? { height: '335px' } : {}}
                      />
                      <img
                        src={data.id === 1 ? "/images/addedImg/water1.png" : "/images/addedImg/water2.png"}
                        alt={data.title}
                        className="mt-6 h-[300px] w-full rounded-lg shadow-lg object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* <div className="w-full flex justify-center mt-10">
                  <Link href="#" className="inline-block shadow-btn hover:shadow-btn-hover rounded-sm bg-SkyBlue px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90">
                    Download the PDF
                  </Link>
                </div> */}

                <p className="mb-10 mt-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  GR2-Aquamatch is a global <b className="text-SkyBlue">industrial and residential water solution company</b> established in 1989.
                </p>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  The company opened its Houston office with GR2 Engineering in 2019 as a leading provider of water treatment, desalination, produced water, and wastewater reuse systems.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  GR2-Aquamatch is active in 34 countries and four continents with 18 offices in Europe, Asia, and the USA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterPage;
