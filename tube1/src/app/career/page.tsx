// pages/DataTablePage.tsx
"use client";
import React from "react";
import { useState, useEffect } from "react";
import CareerTable from "@/components/Tables/CareerTable";
import Header from "@/components/Header";

const CareerPage: React.FC = () => {
  const [careerList, setCareerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_LIVE_BASE_URL}jobs/alljobs`,
        ); // Replace with your API URL
        const result = await response.json();
        setCareerList(result); // Store the data in state
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchData();
  }, []);

  return (
    <> 

    <div className="p-6">
     
      <h2 className="mb-4 text-2xl font-bold">Career Table</h2>
      <CareerTable careerList={careerList} />
    </div>
    </>
  );
};

export default CareerPage;
