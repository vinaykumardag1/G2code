'use client';

import React from 'react';
import Link from 'next/link';
import FancyButton from '@/components/Button/FancyButton';

const JobDescriptionPage = () => {
  const List = ({ text }: { text: string }) => {
    // Check if there's a colon in the text
    if (text.includes(":")) {
      // Split the text into bold and regular parts
      const [boldText, ...rest] = text.split(":");
  
      return (
        <div className="mb-2 flex items-start text-lg font-medium text-body-color">
          <span
            className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md text-SkyBlue shrink-0"
            style={{ transform: "translateY(-2px)" }} // Slight upward adjustment
          >
            {/* Dot icon */}
            <span className="h-[8px] w-[8px] rounded-full bg-SkyBlue inline-block" />
          </span>
          <p className="leading-tight">
            <span className="font-bold">{boldText}:</span> {/* Bold section */}
            {rest.join(":")} {/* Remaining text */}
          </p>
        </div>
      );
    } else {
      // If no colon is present, render the text without bold
      return (
        <div className="mb-2 flex items-start text-lg font-medium text-body-color">
          <span
            className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md text-SkyBlue shrink-0"
            style={{ transform: "translateY(-2px)" }} // Slight upward adjustment
          >
            {/* Dot icon */}
            <span className="h-[8px] w-[8px] rounded-full bg-SkyBlue inline-block" />
          </span>
          <p className="leading-tight">{text}</p>
        </div>
      );
    }
  };
  


  return (
    <section className="container p-8 w-10/12">
      {/* Job Title Section */}
      <h1 className="text-3xl font-bold mb-6 text-LightBlue dark:text-white">Electrical & Instrumentation Engineer - Job Description</h1>

      {/* Job Description Section */}
      <p className="text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        GR2 Engineering is an engineering consulting firm with global offices. We are committed to delivering innovative solutions across various industries. As an Electrical & Instrumentation Engineer, you’ll play a crucial role in shaping our projects and ensuring excellence in process design and implementation.
      </p>

      {/* Responsibilities Section */}
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-SkyBlue dark:text-white">RESPONSIBILITIES</h2>
      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        <List text="Electrical and Instrumentation Design: Develop detailed electrical and instrumentation designs, including wiring diagrams, control systems, and instrumentation layouts, to meet project requirements." />
        <List text="Prepare technical specifications, drawings, and calculations for electrical and instrumentation components and systems." />
        <List text="Ensure that automation and instrumentation system design, process control, control networks, safety instrumented systems, and security systems are as applicable." />
        <List text="Undertake planned and unplanned E&I work scopes on ESD and F&G systems, hazardous area equipment, power generation, telecommunications, navigation, and electrical equipment." />
        <List text="Technical Expertise and Support: Provide technical guidance during the procurement, construction, and commissioning phases, ensuring adherence to project specifications and standards." />
        <List text="Assist in vendor selection, equipment inspection, and quality assurance related to electrical and instrumentation systems." />
        <List text="Generate Bill of Materials (BOMs) for Printed Board Assemblies (PBAs)." />
        <List text="Safety and Compliance: Participate in safety reviews, risk assessments, and compliance checks to ensure adherence to industry standards, codes, and regulatory requirements for electrical and instrumentation systems." />
        <List text="Actively participate in HSE activities, e.g., toolbox talks, risk assessments, safety meetings, etc." />
        <List text="Responsible for the annual testing of the fire and gas system and emergency shut-down system to the satisfaction of the certifying authority." />
        <List text="Ensure associated E&I engineering changes on the ISP are registered, controlled, and carried out in compliance with the appropriate authorities, procedures, and safe working practices." />
        <List text="Instrumentation Calibration and Testing: Oversee instrumentation calibration activities, ensuring the accuracy and reliability of measurement instruments." />
        <List text="Perform testing and troubleshooting of electrical and instrumentation systems to identify and resolve issues." />
        <List text="Project Coordination: Collaborate with multidisciplinary teams to integrate electrical and instrumentation systems into overall project designs and ensure compatibility with other disciplines." />
        <List text="Documentation and Reporting: Prepare technical documentation, reports, and presentations to communicate engineering designs, findings, and recommendations to project stakeholders." />
        <List text="Stakeholder Engagement: Interface and coordinate work with other engineering disciplines to minimize conflicts and errors." />
        <List text="Collaborate with clients, vendors, and regulatory authorities to ensure project deliverables meet industry best practices." />
        <List text="Mentor junior engineers and guide electrical & instrumentation engineering principles, methodologies, and best practices." />
      </ul>

      {/* Qualifications Section */}
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-SkyBlue dark:text-white">QUALIFICATIONS</h2>
      <ul className="list-disc pl-6 space-y-3 text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
        <List text="Education: Bachelor’s degree in Electrical Engineering, Instrumentation Engineering, or related field." />
        <List text="Professional Engineer (PE) license or willingness to obtain certification." />
        <List text="Experience: Minimum of 5 years of experience in electrical and instrumentation engineering within the EPC industry." />
        <List text="Experience with Mentor Graphix Dx Designer or equivalent circuit design tool set." />
        <List text="Knowledge of IEC legislation and BS." />
        <List text="Understanding of safety-related ESD/F&G systems." />
        <List text="Certificates: Certification in Electrical and Instrumentation Engineering (e.g., ISA Certified Control Systems Technician, ISA Certified Automation Professional) preferred." />
        <List text="Skills: Proficiency in electrical design software (e.g., AutoCAD Electrical, ETAP) and instrumentation software (e.g., SPI, Smart Plant Instrumentation)." />
        <List text="Strong knowledge of electrical codes and standards (e.g., NEC, IEC) and instrumentation standards (e.g., ISA, IEEE)." />
        <List text="Excellent analytical and problem-solving skills, with the ability to interpret complex data and make informed decisions." />
        <List text="Effective communication and interpersonal skills, with the ability to collaborate effectively with cross-functional teams and stakeholders." />
        <List text="Focus Areas: LNG (Liquefied Natural Gas) and gas processing and treatment, Petrochemical and refining projects, Oil & gas production and processing facilities design." />
        <List text="Experience in CO2 capture and storage is a plus." />
      </ul>


      {/* Apply Now Button Section */}
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-SkyBlue dark:text-white">APPLY FOR THIS POSITION</h2>
      <p className="text-base leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8 mb-4">
        If you are interested in applying for this position, please click the button below to submit your application.
      </p>
      <FancyButton text="Apply Now" path="/apply-page" />
    </section>
  );
};

export default JobDescriptionPage;
