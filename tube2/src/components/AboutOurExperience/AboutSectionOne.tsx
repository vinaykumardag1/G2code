import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  // Define a List component for bullet points
  const List = ({ text }: { text: string }) => (
    <div className="mb-5 flex items-start text-lg font-medium text-body-color">
      <span className="mr-4 mt-1 flex h-[30px] w-[30px] items-center justify-center rounded-md text-SkyBlue shrink-0">
        {/* Dot icon */}
        <div className="h-[8px] w-[8px] rounded-full bg-SkyBlue" />
      </span>
      <span className="leading-relaxed">{text}</span>
    </div>
  );
  
  
  

  return (
    <section id="about" className="pt-5 mt-10 pb-2">
      <div className="container">
        <div className="w-10/12 mx-auto border-body-color/[.15] dark:border-white/[.15]">
          <div className="flex flex-wrap items-center">
            <p className="text-base !leading-relaxed text-body-color md:text-lg mb-10">At GR2 Engineering, our extensive experience sets us apart as a trusted leader in the energy, infrastructure, and chemicals industries. With decades of collective expertise and a proven track record of success, we have the knowledge, skills, and resources to tackle even the most complex challenges and deliver superior results for our clients.</p>

            <div className="w-full px-4 lg:w-2/3">
              <div>
                <SectionTitle
                  title="GR2 ENGINEERING TEAM FOOTPRINT"
                  paragraph={`The team that makes up our organization has a cumulative 150 years of experience across the world, leading and managing large-scale projects with industry giants. Each team member has a unique set of skills that help us deliver a 360-degree project management service.\n\nOur team has worked across 12 countries, designing more than 50 different projects with large industry leaders. Below is a breakdown of our team’s experience with various types of projects over the years.`}
                  mb="44px"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <Image
                  src="/images/addedImg/word-map.png"  // Update the image path to a relevant CSR image
                  alt="csr-image"
                  layout="intrinsic"  // Ensures the image maintains its aspect ratio
                  width={500}  // Set the image's natural width
                  height={480}  // Set the image's natural height
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>

          {/* New Section Title and Bullet Points Below Image */}
          <div>
            <h2 className={`mb-4 text-xl text-SkyBlue font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
              OUR INDIA OPERATIONS - GR2 ENGINEERING INDIA PVT. LTD.
            </h2>
            <div>
              <List text="GR2 office in India was formally established in the year 2021 under patronage of GR2 Engineering Inc. USA" />
              <List text="GR2 Engineering India operations was pioneered with a vision to have a `high value' Engineering and Design center to provide world class engineering service to our global client base" />
              <List text="Our India office is strategically located to cater to business needs of our clients especially from ME and Asia regions by leveraging and tapping into a vast pool of skilled engineering resources based out of Mumbai" />
              <List text="India operations is headed by a competent team of Oil and Gas industry veterans and over the years have successfully executed Conceptual, FEED and Detailed Design projects across multiple geographies including USA, UAE and Iraq." />
              <List text="India teams comprises of energetic and result oriented professionals including Project Managers, Multi-discipline Engineers, Designers, 3D Modelers and Drafters. Additionally, we have collaboration with reliable and experienced Subject Matter Experts (SME) for critical and specialized engineering services" />
              <List text="GR2 Engineering is ISO 9001:2015 certified company with focus on quality control and on-time delivery to meet and exceed client expectations" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
