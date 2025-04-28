// CapabilityCards.tsx
import React from 'react';

// Define the type for the table data columns
type CapabilityCardProps = {
  columnName: string;
  points: string[];
};

const CapabilityCard: React.FC<CapabilityCardProps> = ({ columnName, points }) => {
  return (
    <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full lg:w-1/3 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <h2 className="text-xl font-semibold dark:text-white mb-4">{columnName}</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {points.map((point, index) => (
          <li style={{textIndent:"-1.4em",paddingLeft:"1.2em"}} key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const CapabilityCards = () => {
  const tableData = {
    columnName: ["Process Studies", "Engineering & Procurement", "Project Management"],
    tableDataCol1: [
      "Concept Development",
      "Facilities Design",
      "Process Engineering",
      "Facilities Evaluation",
      "Revamps and Upgrades",
      "Debottlenecking",
      "Optimization",
    ],
    tableDataCol2: [
      "Feasibility studies",
      "Scoping (FEL I)",
      "Pre-FEED (FEL II)",
      "FEED (FEL III)",
      "Detailed engineering",
      "Procurement Services",
      "Fabrication Design and Management",
    ],
    tableDataCol3: [
      "Owner’s Engineering",
      "Project Management Consultant",
      "Project Controls",
      "Construction Management",
      "Quality Assurance and Control",
      "Safety and Reliability",
      "Commissioning and Start-up",
    ],
  };

  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-6">
          {/* Render a CapabilityCard for each column */}
          <CapabilityCard
            columnName={tableData.columnName[0]}
            points={tableData.tableDataCol1}
          />
          <CapabilityCard
            columnName={tableData.columnName[1]}
            points={tableData.tableDataCol2}
          />
          <CapabilityCard
            columnName={tableData.columnName[2]}
            points={tableData.tableDataCol3}
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilityCards;
