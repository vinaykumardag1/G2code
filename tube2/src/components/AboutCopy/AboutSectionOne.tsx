import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* You can update or remove the check icon here if needed */}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="mt-10">
      <div className="container">
        <div className="w-12/12 mx-auto border-body-color/[.15] dark:border-white/[.15]">
          <div className="flex flex-wrap items-center justify-center">
            {/* Use w-10/12 for the text width */}
            <div className="w-10/12 px-4">
              <p className="mb-7 text-base !leading-relaxed text-body-color md:text-lg">
                At GR2 Engineering, we believe that true success is measured not only by financial performance but also by our commitment to social and environmental responsibility. Guided by our core values of integrity, sustainability, and community, we are dedicated to making a positive impact on the world around us.
              </p>
              <h2 className="uppercase mb-5 text-3xl text-SkyBlue font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight">
                OUR COMMITMENT
              </h2>
              <p className="mb-5 text-base !leading-relaxed text-body-color md:text-lg">
                GR2 Engineering is committed to ensuring that our projects and clients are guided by the most recent environmental, social, and governance standards so that we all play a role in ensuring a safe and sustainable future for all.
              </p>
              <p className="mb-5 text-base !leading-relaxed text-body-color md:text-lg">
                We strive to improve energy management and environmental sustainability through a holistic approach utilizing our collective wisdom and painstakingly developed technology in order to contribute to the sustainable development of a society as an integrated engineering company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
