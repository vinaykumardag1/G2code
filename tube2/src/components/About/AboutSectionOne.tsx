import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
// import HomePageCard from "@/components/About/HomePageCard";
import HomePageCard, { HomePageCardData } from '@/components/About/HomePageCard';


const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <div className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md text-SkyBlue shrink-0">
        {/* Dot icon */}
        <span className="h-[8px] w-[8px] rounded-full bg-SkyBlue inline-block" />
      </span>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
  


  // const points = ["Advisory solutions in industry 4.0 digital innovation and transformation", "Strong global construction, fabrication and Professional Engineer network", "Expertise in local, state and federal standards and regulations", "Proven project capability from conceptual stage to completed project delivery", "Multiple well-established client relationships in oil and gas", "Process technology expertise in midstream gas processing"]

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container px-4 lg:px-6">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] pb-10 dark:border-white/[.15] md:pb-10 lg:pb-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-3/4">
              <SectionTitle
                title="Project and technology services"
                paragraph="GR2 Engineering provides smart, expedited solutions tailored around a wide variety of technical, geographic, legislative, and environmental challenges. We are a team of experts with global reach, wide experience and technical excellence to plan and execute complete life cycle projects irrespective of location, scale and complexity."
                mb="44px"
              />
              <div>
                <List text="Advisory solutions in industry 4.0 digital innovation and transformation" />
                <List text="Strong global construction, fabrication and Professional Engineer network" />
                <List text="Expertise in local, state and federal standards and regulations" />
                <List text="Proven project capability from conceptual stage to completed project delivery" />
                <List text="Multiple well-established client relationships in oil and gas" />
                <List text="Process technology expertise in midstream gas processing" />
              </div>

              {/* <div className="max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-2/4 lg:w-full xl:w-2/4">
                    <List text="Operations support" />
                    <List text="Engineering" />
                    <List text="Project consulting" />
                  </div>

                  <div className="w-full px-3 sm:w-2/4 lg:w-full xl:w-2/4">
                    <List text="Construction management" />
                    <List text="Project Management Consulting" />
                    <List text="Advanced Digital Technology" />
                  </div>
                </div>
              </div> */}

              <div className="flex flex-wrap gap-6">
                {HomePageCardData.map((data, index) => (
                  <HomePageCard key={index} points={data.points} />
                ))}
              </div>

            </div>

            <div className="w-full px-4 lg:w-1/4">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/Group-333.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
