import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Whitepapers from "@/components/AboutOurExperience/Whitepapers";
import Image from "next/image";
import FancyButton from '@/components/Button/FancyButton';

export const metadata: Metadata = {
  title: "What We Do - GR2 Engineering",
};

const AboutPage = () => {
  return (
    <>
      {/* Background Banner Section */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        {/* Use Next.js Image component for better performance */}
        <Image
          src="/images/banner/what-we-do.jpg"
          alt="Contact Us Banner"
          layout="fill" // This ensures the image covers the container completely
          objectFit="cover" // This makes sure the image covers the entire area without distortion
          priority // This helps in preloading the image, avoiding flicker
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            WHAT WE DO
          </h1>
        </div>
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <section>
        <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    ENGINEERING
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Customers-focused engineering, design and consultancy services throughout the entire lifecycle 
                    </p>
                </div>
                <div>
                    {/* <Link href="/engineering">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link> */}
                    <FancyButton text="Learn More" path="/engineering" />
                </div>
              </div>
            </div>
          </div>  
        <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    MODULAR
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    With a focus on quality, scalability, and cost-effectiveness, our modular solutions are designed to meet the unique needs of your project while delivering superior performance and value. 
                    </p>
                </div>
                <div>
                    {/* <Link href="/modular">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link> */}
                    <FancyButton text="Learn More" path="/modular" />
                </div>
              </div>
            </div>
          </div>  
          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    CAPITAL PROJECT SERVICES
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From initial concept development to final commissioning and beyond, we offer a wide range of services tailored to meet your specific needs and objectives. 
                    </p>
                </div>
                <div>
                    {/* <Link href="/capital-project-services">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link> */}
                    <FancyButton text="Learn More" path="/capital-project-services" />
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    WATER
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From designing state-of-the-art treatment facilities to implementing smart water management systems, GR2 Engineering is committed to engineering solutions that ensure access to clean, safe water for generations to come.
                    </p>
                </div>
                <div>
                    {/* <Link href="/water">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2 rounded-lg">
                        Learn More
                        </button>
                    </Link> */}
                    <FancyButton text="Learn More" path="/water" />
                </div>
              </div>
            </div>
          </div>
        <Whitepapers/>
        </div>
      </section>
     
    </>
  );
};

export default AboutPage;
