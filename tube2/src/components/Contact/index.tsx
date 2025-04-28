"use client"; // Ensure this file is treated as a client component

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import CardComponent from "../AddressCard/intex";
import FancyButton from "@/components/Button/FancyButton";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [isCaptchaLoaded, setIsCaptchaLoaded] = useState(false);

  useEffect(() => {
    // Check if reCAPTCHA is loaded
    setIsCaptchaLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: (e.target as any).name.value,
      email: (e.target as any).email.value,
      message: (e.target as any).message.value,
    };

    // Validate reCAPTCHA
    // const recaptchaResponse = grecaptcha.getResponse();
    // if (!recaptchaResponse) {
    //   setSubmissionStatus("Please complete the reCAPTCHA verification.");
    //   setStatusType("error");
    //   return;
    // }

    try {
      // Send form data to Express.js backend
      const response = await fetch("https://backend.gr2engineering.com/contacts/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaResponse }),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setStatusType("success");
        (e.target as any).reset();
        grecaptcha.reset(); // Reset the reCAPTCHA widget
      } else {
        setSubmissionStatus("Failed to send your message. Please try again.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("An error occurred. Please try again later.");
      setStatusType("error");
    }
  };

  return (
    <section id="contact" className="overflow-hidden">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      {/* Banner */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        <Image
          src="/images/banner/contact-us-banner.jpg"
          alt="Contact Us Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            CONTACT US
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contact Form */}
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="-mx-4 flex flex-wrap pt-10">
            <div className="w-full px-4">
              <div className="mb-12 rounded-lg bg-blue-50 px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2 className="mb-3 text-2xl font-bold text-SkyBlue dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  You can easily reach us by filling out this form — we will get in touch with you shortly.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          required
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          required
                          className="border-stroke w-full resize-none rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* reCAPTCHA Widget */}
{/*                     {isCaptchaLoaded && (
                      <div className="w-full px-4 mb-6">
                        <div
                          className="g-recaptcha mx-auto"
                          data-sitekey="6Lf1QIYqAAAAAGcnflhQvf7kZKeCppU2ONsqZsUc"
                          style={{ transformOrigin: "center" }}
                        ></div>
                      </div>
                    )} */}

                    <div className="flex justify-between items-center">
                      <div className="flex justify-center">
                        <FancyButton text="Submit" path="#" type="submit" />
                      </div>
                      {submissionStatus && (
                        <div
                          className={`ml-4 px-4 py-2 text-sm font-medium rounded-lg text-white ${
                            statusType === "success" ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {submissionStatus}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Address Cards */}
            <div className="w-full p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardComponent id={1} />
                <CardComponent id={2} />
                <CardComponent id={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
