import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image"; // Import Image from next/image

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History Page - GR2 Engineering",
  description: "This is the History Page for Startup Next.js Template",
  // other metadata
};

const HistoryPage = () => {
  return (
    <>
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        {/* Background Banner */}
        <Image
          src="/images/banner/History.jpg"
          alt="Contact Us Banner"
          layout="fill" // Ensures the image covers the container completely
          objectFit="cover" // Ensures the image fits the container without distortion
          priority // Preloads the image for better performance
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Breadcrumb Section */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="container mx-auto pt-10 px-10">
            <Breadcrumb subpageName="About Us" pageName="History" description="" />
          </div>
        </div>
      </div>


      {/* Content Section */}
      <section className="pb-[50px] mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Since our inception, GR2 Engineering has been driven by a relentless commitment to excellence, innovation, and client satisfaction. Our journey began with a vision to revolutionize the energy and infrastructure sectors, and over the years, we have evolved into a trusted partner and industry leader.
                </p>

                <h2 className="mb-8 text-xl text-SkyBlue font-bold leading-tight dark:text-white sm:text-3xl sm:leading-tight">
                  HOW GR2 ENGINEERING STARTED
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As the industry evolves and projects become more complex in scope and technical features, we saw an opportunity to bring together a team of experts — each with unique experience — and develop a firm that is able to provide agile, effective and customer-focused project services from project development to construction management by utilizing unique but proven, technologically robust but practical solutions and techniques for successful project outcome.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We bring together the 30+ years of global experience of each team member and deliver customized solutions for our clients worldwide. Our innovative digital execution platform seamlessly connects clients with thousands of highly qualified, experienced resources all around the world for engineering, procurement, construction management, and project management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
