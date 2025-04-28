import AboutSectionOne from "@/components/AboutOurExperience/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image"; // Import Image for optimized rendering

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Experience - GR2 Engineering",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* Background Banner Section */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        {/* Use Next.js Image component for better performance */}
        <Image
          src="/images/banner/our-experience.jpg" // Replace with the actual image path
          alt="About Our Experience Banner"
          layout="fill" // Ensures the image covers the container completely
          objectFit="cover" // Ensures the image covers the entire area without distortion
          priority // Helps in preloading the image
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Breadcrumb Section */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="container mx-auto pt-10 px-10">
            <Breadcrumb
              subpageName="About Us"
              pageName="OUR EXPERIENCE"
              description=""
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="pb-[20px] mt-10">
        <div className="container">
          <AboutSectionOne />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
