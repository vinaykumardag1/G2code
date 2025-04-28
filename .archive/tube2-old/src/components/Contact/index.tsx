"use client";
import { useState } from "react";
import CardComponent from "../AddressCard/intex";
import Image from "next/image";

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To display success or error messages

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Create the contact object
    const contactData = {
      name,
      email,
      message,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}contacts/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        },
      );

      // Handle response
      const result = await response.json();
      if (response.ok) {
        setStatus("Contact submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(`Error: ${result.error || "Something went wrong!"}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16">
      <div className="relative flex h-[400px] w-full items-center justify-start bg-gray-200 pl-10">
        <Image
          src="/images/addedImg/contact-us-banner.jpg"
          alt="Contact Us Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            CONTACT US
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container">
        <div className="mx-auto w-10/12">
          <div className="-mx-4 flex flex-wrap pt-10">
            <div className="w-full px-4">
              <div
                className="mb-12 rounded-lg bg-blue-50 px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  You can easily reach us by filling out this form — we will get
                  in touch with you shortly.
                </p>

                {/* Form */}
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
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="border-stroke w-full resize-none rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-SkyBlue dark:shadow-submit-dark"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                {/* Display status message */}
                {status && (
                  <div className="mt-4 text-center">
                    <p className="text-xl font-medium text-blue-900">
                      {status}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
