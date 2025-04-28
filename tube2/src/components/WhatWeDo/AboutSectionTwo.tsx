import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  // Define your capabilities array
  const capabilities = [
    "Intelligent intuitive project management software platform",
    "Project Integration among client, PMC, contractors, subcontractors, and vendors",
    "No changes required to contractor and vendor systems, tools, and procedures",
    "AWP based",
    "Cloud based",
    "Scalable",
    "Mobile App",
    "Cost effective",
  ];

  return (
          <section className="pb-10">
            <div className="container">
              <div className="w-10/12 mx-auto">
                
                {/* Titles Outside the Image Container */}
                <div className="w-full px-4 mb-6">
                  <h2 className="mb-4 text-xl text-SkyBlue font-bold !leading-tight dark:text-white sm:text-2xl md:text-[23px]">
                    OUR TOOLS
                  </h2>
                  <h2 className="mb-4 text-xl text-Green font-bold !leading-tight dark:text-white sm:text-2xl md:text-[30px]">
                    INTEGRATED PROJECT MANAGEMENT SYSTEM
                  </h2>
                </div>
                
                <div className="flex flex-wrap items-center">
                  
                  {/* Left Side: Image */}
                  <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                    <div className="relative mx-auto aspect-[25/24] max-w-[500px] text-center lg:text-left">
                      <Image
                        src="/images/addedImg/integrated-project-management.png"
                        alt="about image"
                        fill
                        className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Side: Single Capability Card with Second Line Indentation */}
                  <div className="w-full lg:w-1/2 px-4 lg:pl-12">
                    <div className="max-w-[470px]">
                      {/* Single Card for all capabilities */}
                      <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-5">
                          {/* Mapping the capabilities */}
                          {capabilities.map((capability, index) => (
                            <li
                              key={index}
                              className="mb-2 ml-0" // Keep this to ensure the bullet alignment
                              style={{ textIndent: '-1.2em', paddingLeft: '1.2em' }} // Indent only the second line
                            >
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
};

export default AboutSectionTwo;
