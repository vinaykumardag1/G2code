"use client";
import React, { useState, useEffect } from "react";
import TableThree from "@/components/Tables/TableThree"; // Adjust the import path if needed
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const NewsPage: React.FC = () => {
  const [eventList, setEventList] = useState<any[]>([]);
  const [title, setTitle] = useState<any>("");
  const [text, setText] = useState<any>("");
  const [image, setImage] = useState<File | null>(null);
  const [apiLoading, setApiLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}news/allnews`,
        );
        const result = await response.json();
        setEventList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiLoading]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    if (image) {
      formData.append("img", image);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}news/create`,
        {
          method: "POST",
          body: formData,
        },
      );
      const result = await response.json();
      if (response.ok) {
        setEventList([...eventList, result]); // Ensure response contains the created news item
        setTitle("");
        setText("");
        setImage(null);
        router.push("/");
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Error submitting news:", error);
    }
  };

  const deleteHandler = async (dataId: any) => {
    setApiLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}news/delete/${dataId}`,
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
      <h2 className="mb-4 text-2xl font-bold">Submit News</h2>
      <div className="flex flex-col gap-9">
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              Submit News
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 w-full">
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the title"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Text
                  </label>
                  <textarea
                    rows={6}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter the text content"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-[7px] bg-primary p-[10px] font-medium text-white hover:bg-opacity-90"
              >
                Submit News
              </button>
            </div>
          </form>
        </div>
      </div>

      <h3 className="mb-4 mt-8 text-xl font-bold">Existing News</h3>
      <div>
        {eventList.length > 0 ? (
          <ul
            className="space-y-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {eventList.map((event, index) => (
              <li
                key={index}
                style={{ position: "relative" }}
                className="rounded-lg border border-gray-300 p-4 shadow"
              >
                <h4 className="text-lg font-bold">{event.title}</h4>
                <p>{event.text}</p>
                {event.img && (
                  <div className="mt-2">
                    <img
                      src={event.img}
                      alt={`Image for ${event.title}`}
                      className="h-24 w-24 rounded-lg object-cover shadow"
                    />
                  </div>
                )}
                <span
                  onClick={() => deleteHandler(event?._id)}
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
          <p>No news available.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default NewsPage;
