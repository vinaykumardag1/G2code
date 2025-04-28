import AboutSectionOne from "@/components/AboutCopy/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeaturesCopy from "@/components/FeaturesCopy";
import { Metadata } from "next";
import Image from "next/image";
import CsrEvents from "@/components/AboutOurExperience/CsrEvents";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility - GR2 Engineering",
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
          src="/images/banner/CSR.jpg" // Path to your banner image
          alt="CSR Banner"
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
            <Breadcrumb subpageName="About Us" pageName="Corporate Social Responsibility" description="" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <AboutSectionOne />
      {/* Optionally include other sections like AboutSectionTwo if needed */}
      <FeaturesCopy />
      <CsrEvents/>
    </>
  );  
};

export default AboutPage;
