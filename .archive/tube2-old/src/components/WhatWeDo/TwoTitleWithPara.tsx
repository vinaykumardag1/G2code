// "use client";

// import React, { useEffect, useReducer, useState } from "react";
// import Image from "next/image"; // Import Image from Next.js
// import SectionTitle from "../Common/SectionTitle";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const FullWidthSection = () => {
//   // Bullet point list component
//   const List = ({ text }) => (
//     <p className="mb-5 flex items-center text-lg font-medium text-body-color">
//       <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//         <svg
//           width="16"
//           height="13"
//           viewBox="0 0 16 13"
//           className="fill-current"
//         >
//           <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//         </svg>
//       </span>
//       {text}
//     </p>
//   );
//   const [filters, setFilters] = useState<any>({
//     freelance: true,
//     fullTime: true,
//     internship: true,
//     partTime: true,
//     temporary: true,
//   });
//   const [jobsList, setJobsList] = useState<any>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/alljobs`,
//         );
//         const result = await response.json();
//         setJobsList(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleFilter = (filter: string) => {
//     setFilters((prev: any) => ({ ...prev, [filter]: !prev[filter] }));
//   };

//   return (
//     <section className="overflow-hidden py-16">
//       {/* Full-width Banner */}
//       <div className="relative flex h-[400px] w-full items-center justify-start bg-gray-200">
//         <Image
//           src="/images/addedImg/Career-page-banner.jpg" // Your banner image
//           alt="Join Us Banner"
//           layout="fill" // This ensures the image covers the container completely
//           objectFit="cover" // This makes sure the image covers the entire area without distortion
//           priority // This helps in preloading the image
//           className="absolute inset-0 h-full w-full"
//         />
//         <div className="relative z-10 px-10 text-left">
//           <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
//             JOIN US
//           </h1>
//         </div>
//         {/* Optional Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//       </div>

//       <div className="container">
//         <div className="mx-auto w-10/12 border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
//           <div className="flex flex-col items-start pt-9">
//             <h2
//               className={`text-xl font-bold !leading-tight text-Green  dark:text-white sm:text-2xl md:text-[30px]`}
//             >
//               OPEN ROLES
//             </h2>

//             <p className="mt-8 max-w-full text-left text-base font-medium leading-relaxed text-body-color md:text-lg">
//               Join our global network of project experts across key sectors: oil
//               and gas, energy, chemicals, water, renewables, and infrastructure.
//               With offices in Abu Dhabi, Bogota, Calgary, Houston, Istanbul,
//               Mumbai, and Rome, we bring localized expertise to projects on a
//               global scale.
//             </p>

//             <p className="mb-8 mt-8 max-w-full text-left text-base font-medium leading-relaxed text-body-color md:text-lg">
//               If you’re a project professional who thrives on solving
//               challenging engineering problems, embraces complexity, and is
//               passionate about delivering excellence, we invite you to:
//             </p>

//             {/* Bullet Points */}
//             <div className="mt-4">
//               <List
//                 text={
//                   <>
//                     Connect with us on&nbsp;
//                     <a
//                       href="https://www.linkedin.com/company/gr2-engineering"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-primary hover:underline"
//                     >
//                       LinkedIn
//                     </a>
//                   </>
//                 }
//               />
//               <List text="Browse job opportunities below and apply" />
//               <List
//                 text={
//                   <>
//                     Share your ideas or contact us with any questions at&nbsp;
//                     <a
//                       href="mailto:info@gr2engineering.com"
//                       className="text-primary hover:underline"
//                     >
//                       info@gr2engineering.com
//                     </a>
//                   </>
//                 }
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="bg-gray-100 p-6">
//           {/* Search Section */}
//           <div className="rounded-lg bg-white p-6 shadow-md">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 placeholder="Keywords"
//                 className="w-1/2 rounded-md border border-gray-300 p-3"
//               />
//               <input
//                 type="text"
//                 placeholder="Location"
//                 className="w-1/2 rounded-md border border-gray-300 p-3"
//               />
//             </div>
//             <div className="mt-4 flex items-center gap-2">
//               <input type="checkbox" id="remote" className="h-4 w-4" />
//               <label htmlFor="remote" className="text-gray-600">
//                 Remote positions only
//               </label>
//             </div>
//             <button className="mt-4 w-full rounded-md bg-blue-800 py-3 text-lg font-semibold text-white">
//               SEARCH JOBS
//             </button>
//           </div>

//           {/* Filter Options */}
//           <div className="mt-4 flex flex-wrap gap-3">
//             {Object.keys(filters).map((filter) => (
//               <label key={filter} className="flex items-center gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   checked={filters[filter as keyof typeof filters]}
//                   onChange={() => toggleFilter(filter)}
//                   className="h-4 w-4 accent-blue-600"
//                 />
//                 {filter.charAt(0).toUpperCase() + filter.slice(1)}
//               </label>
//             ))}
//           </div>

//           {/* Job Listings */}
//           <div className="mt-6 rounded-lg bg-white p-4 shadow">
//             {jobsList?.map((job: any, index: any) => (
//               <div key={index} className="cur flex border-b py-4 last:border-0">
//                 <div className="flex w-[90%] items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">
//                     🌀
//                   </div>
//                   <div>
//                     <Link href={`/job-details`}>
//                       <h3 className="font-semibold text-blue-900">
//                         {job.title}
//                       </h3>
//                     </Link>
//                     <p className="text-gray-500">{job.description}</p>
//                   </div>
//                 </div>
//                 <button>Apply</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullWidthSection;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Modal } from "react-responsive-modal"; // Import Modal
import "react-responsive-modal/styles.css"; // Import styles
import { toast } from "react-toastify";

const FullWidthSection = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          className="fill-current"
        >
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </span>
      {text}
    </p>
  );

  const [filters, setFilters] = useState<any>({
    freelance: true,
    fullTime: true,
    internship: true,
    partTime: true,
    temporary: true,
  });
  const [jobsList, setJobsList] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/alljobs`,
        );
        const result = await response.json();
        setJobsList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = (filter: string) => {
    setFilters((prev: any) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const openModal = (job: any) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedJob(null);
    setFormData({ name: "", email: "", linkedin: "", resume: null });
    setMessage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, resume: files?.[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("linkedInProfile", formData.linkedin);
    form.append("jobId", selectedJob?._id || "");
    if (formData.resume) {
      form.append("resume", formData.resume);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/apply`,
        {
          method: "POST",
          body: form, // Send as FormData
        },
      );

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setOpen(false);
        setMessage("Application submitted successfully!");
      } else {
        setOpen(false);

        setMessage("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="overflow-hidden py-16">
      {/* Full-width Banner */}
      <div className="relative flex h-[400px] w-full items-center justify-start bg-gray-200">
        <Image
          src="/images/addedImg/Career-page-banner.jpg"
          alt="Join Us Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 h-full w-full"
        />
        <div className="relative z-10 px-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            JOIN US
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container">
        <div className="mx-auto w-10/12 border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
          <div className="flex flex-col items-start pt-9">
            <h2 className="text-xl font-bold text-Green sm:text-2xl md:text-[30px]">
              OPEN ROLES
            </h2>

            <p className="mt-8 max-w-full text-left text-base font-medium leading-relaxed text-body-color md:text-lg">
              Join our global network of project experts across key sectors...
            </p>

            {/* Bullet Points */}
            <div className="mt-4">
              <List
                text={
                  <>
                    Connect with us on&nbsp;
                    <a
                      href="https://www.linkedin.com/company/gr2-engineering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  </>
                }
              />
              <List text="Browse job opportunities below and apply" />
              <List
                text={
                  <>
                    Contact us at&nbsp;
                    <a
                      href="mailto:info@gr2engineering.com"
                      className="text-primary hover:underline"
                    >
                      info@gr2engineering.com
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bg-gray-100 p-6">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Keywords"
                className="w-1/2 rounded-md border border-gray-300 p-3"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-1/2 rounded-md border border-gray-300 p-3"
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="remote" className="h-4 w-4" />
              <label htmlFor="remote" className="text-gray-600">
                Remote positions only
              </label>
            </div>
            <button className="mt-4 w-full rounded-md bg-blue-800 py-3 text-lg font-semibold text-white">
              SEARCH JOBS
            </button>
          </div>
          {/* Job Listings */}
          <div className="mt-6 rounded-lg bg-white p-4 shadow">
            {jobsList?.map((job: any, index: any) => (
              <div key={index} className="cur flex border-b py-4 last:border-0">
                <div className="flex w-[90%] items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">
                    🌀
                  </div>
                  <div>
                    <Link href={`/job-details`}>
                      <h3 className="font-semibold text-blue-900">
                        {job.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500">{job.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(job)}
                  className="ml-auto rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Job Application */}
      <Modal open={open} onClose={closeModal} center>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">
            Apply for {selectedJob?.title}
          </h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn Profile
              </label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                placeholder="LinkedIn URL"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="mt-1 w-full rounded border border-gray-300 p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
          {message && (
            <p className="mt-2 text-center text-gray-700">{message}</p>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default FullWidthSection;
