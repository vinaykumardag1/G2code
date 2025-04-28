"use client";  // Ensures this component runs as a Client Component

import React from "react";
import FancyButton from '@/components/Button/FancyButton';

const Whitepapers = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="px-4">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-Green dark:text-white sm:text-4xl sm:leading-tight">
              WHITEPAPERS
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Whitepaper Card 1 */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                {/* <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Whitepaper Title 1
                </h4> */}
                <div className="mb-10">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    An Integrated Approach: Advanced Seismic Modelling Study for Storage Tanks
                  </p>
                </div>
                <FancyButton text="View PDF" path="/pdfs/whitepaper1.pdf" newTab />
              </div>

              {/* Whitepaper Card 2 */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                {/* <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Whitepaper Title 2
                </h4> */}
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-2">
                  GR2 Engineering Modular Solutions for Xenergi LTD, Enabling Sustainable Energy Generation from Flare Gas in Nigeria
                </p>
                <FancyButton text="View PDF" path="/pdfs/whitepaper2.pdf" newTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepapers;
