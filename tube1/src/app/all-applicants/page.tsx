"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "@/components/Header";

const NewsPage: React.FC = () => {
  const [applicantsList, setApplicantsList] = useState<any>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/allApplicants`,
        );
        const result = await response.json();
        setApplicantsList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiLoading]);

  const deleteHandler = async (dataId: any) => {
    setApiLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/deleteApplicant/${dataId}`,
        {
          method: "POST",
        },
      );

      if (response.ok) {
        const result = await response.json();
        setApiLoading(false);
        // window.location.reload();
      } else {
        const error = await response.json();
        console.error("Error deleting news:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
 
    <div className="p-6">
      <h3 className="mb-4 mt-8 text-xl font-bold">Applicants List</h3>
      <div>
        {applicantsList.length > 0 ? (
          <ul
            className="space-y-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {applicantsList.map((applicant: any, index: any) => (
              <li
                key={index}
                style={{ position: "relative" }}
                className="rounded-lg border border-gray-300 p-4 shadow"
              >
                <h4 className="text-lg font-bold">{applicant.name}</h4>
                <p>Email : {applicant.email}</p>
                <p>Applied For : {applicant.roleAppliedFor}</p>
                <a
                  href={applicant.resume ? applicant.resume : "#"}
                  target={applicant.resume ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{
                    pointerEvents: applicant.resume ? "auto" : "none",
                    opacity: applicant.resume ? 1 : 0.5,
                  }}
                >
                  <button
                    disabled={!applicant.resume}
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                  >
                    Open PDF
                  </button>
                </a>

                <p>Applied At : {applicant.appliedAt}</p>
                {applicant.img && (
                  <div className="mt-2">
                    <img
                      src={applicant?.img}
                      alt={`Image for ${applicant?.name}`}
                      className="h-24 w-24 rounded-lg object-cover shadow"
                    />
                  </div>
                )}
                <span
                  onClick={() => deleteHandler(applicant?._id)}
                  style={{ position: "absolute", right: "60px", top: "20px" }}
                >
                  <svg
                    fill="#000000"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve"
                  >
                    <g id="XMLID_6_">
                      <g id="XMLID_11_">
                        <path
                          d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105
			C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75
			S266.355,300,225,300z"
                        />
                      </g>
                      <g id="XMLID_18_">
                        <path
                          d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45
			H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z"
                        />
                      </g>
                      <g id="XMLID_23_">
                        <path
                          d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0
                          c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213
                          c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606
                          c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225
                          l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Applicants available.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default NewsPage;
