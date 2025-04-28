// components/engineeringcards/ProcessCards.tsx
import React from 'react';

// Reusable component for each card
type ProcessCardProps = {
  columnName: string;
  points: string[];
};

const ProcessCard: React.FC<ProcessCardProps> = ({ columnName, points }) => {
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

const ProcessCards = () => {
  // Table data for first set (already included)
  const tableData3 = {
    columnName: ["PROCESS", "PIPING", "MECHANICAL"],
    tableDataCol1: [
      "Process Design Memorandum", "Process Simulations", "Line Hydraulics & Sizing",
      "Hydraulic Calculation", "PSV Calculation", "Heat & Mass Balance",
      "Process & Instrumentation Diagrams", "Process Flow Diagrams", "Utility Flow Diagrams",
      "Process Description", "System Hydraulic Analysis & Report", "Change Over Procedure",
      "Data Sheets - Equipment", "Equipment List", "HAZID / HAZOP Report",
      "Line List", "Material Selection Diagram", "Materials Requisitions & Subcontracts",
      "Operating Control & Philosophy"
    ],
    tableDataCol2: [
      "Piping Design Memorandum", "Plot Plan", "3D Modeling", "General Arrangement Drawing",
      "Tie-in Schematics", "Valve Lists", "Pipe Supports & Subcontracts",
      "Materials/Fills/Bill Of Quantities", "Pipe Details", "Piping Calculations",
      "Piping Arrangement Drawings", "Piping Specifications", "Piping Stress Analysis",
      "Piping Bids Evaluation"
    ],
    tableDataCol3: [
      "Mechanical Design Basis Memorandum", "Equipment Sizing Calculation",
      "Equipment Data Sheets", "Piping Specialty List", "Heating Ventilation Air Conditioning (HVAC)",
      "Materials Requisitions & Subcontracts", "Mechanical Equipment Specifications",
      "Technical Bids Evaluation"
    ],
  };

  // Table data for tableData4
  const tableData4 = {
    columnName: ["ELECTRICAL", "INSTRUMENTATION", "CIVIL / STRUCTURAL / ARCHITECTURAL"],
    tableDataCol1: ["Electrical Design Basis Memorandum", "Single Line Diagram", "Cable Schedule",
      "Electrical Equipment, Cables Sizing Calculations", "Change Over Procedure",
      "Data Sheets", "Demolition Drawings", "Earthing & Cable Routing Layouts",
      "Electrical Design Philosophy", "Lighting Layout", "Load Schedule",
      "Electrical Equipment Layout", "Electrical Equipment Schedule", "Electrical Tie-In Schedule",
      "Installation Drawings", "Materials Requisitions & Subcontracts",
      "Materials Take Offs / Bill Of Quantities", "Electrical Specifications",
      "Technical Bids Evaluation"],
    tableDataCol2: ["Instrumentation Design Basis Memorandum", "Alarm & Trip Index",
      "Cable Routing Location Drawings", "Control System Block Diagram",
      "Data Sheets", "I/O List", "Instrument Index", "Junction Box Schedule",
      "Materials Requisitions & Subcontracts", "Materials Take Offs / Bill Of Quantities",
      "RTU/SCADA/IPS", "Technical Specification", "Wiring Interconnection Diagrams"],
    tableDataCol3: ["CSA Design Basis Memorandum", "Building GA and Details", "Civil Layout Plan",
      "Design Calculations", "Equipment Foundation Layout and Details",
      "Pipe racks structural and foundations drawings", "Materials Requisitions & Subcontracts",
      "Materials Take Offs / Bill Of Quantities", "Site Grading Plan",
      "Drainage and Sewerage Design", "Civil, Structural and Architectural Specifications",
      "Specifications for Topographic Survey", "Specifications for Geotechnical Investigation",
      "Technical Bids Evaluation", "Civil, Structural, Steel and Rebar Detailing"],
  };

  // Table data for tableData5
  const tableData5 = {
    columnName: ["PIPELINE", "PROCESS SAFETY", "ENGINEERING SPECIALTIES"],
    tableDataCol1: ["Pipeline Design Basis Memorandum", "Alignment Sheets", "Bill of Material",
      "Calculations", "Crossing Drawings", "Crossing Schedule", "Data Sheets",
      "Field Area Layout", "General Arrangement Drawing", "Line Routing Plan",
      "Materials Requisitions & Subcontracts", "Plot Plan", "Reports",
      "Route Maps & Town Planning Drawings", "Specifications", "Station Approach Drawings",
      "Technical Bids Evaluation", "Topographic Scope of Work", "Typical Drawings"],
    tableDataCol2: ["Process Safety Management Plan (PSM)", "Risk Management Plan (RMP)",
      "IEC 61511 Assessment", "Independent Protection Layer (IPL)",
      "Safety Integrity Layer (SIL)", "Process Hazard Analysis (PHA)",
      "Layer of Protection Analysis (LOPA)", "Facility Siting Analysis"],
    tableDataCol3: ["Corrosion Study", "Finite Element Analysis", "Computerized Fluid Dynamics",
      "Industry 4.0 Implementation", "Asset Integrity - Digital Twins",
      "OT Cyber Security IEC 62443"],
  };

  return (
    <section className="mt-10">
      <div className="container">
        {/* Render the first set of process cards (tableData3) */}
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-6">
          <ProcessCard
            columnName={tableData3.columnName[0]}
            points={tableData3.tableDataCol1}
          />
          <ProcessCard
            columnName={tableData3.columnName[1]}
            points={tableData3.tableDataCol2}
          />
          <ProcessCard
            columnName={tableData3.columnName[2]}
            points={tableData3.tableDataCol3}
          />
        </div>

        {/* Render the second set of process cards (tableData4) */}
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-6 mt-10">
          <ProcessCard
            columnName={tableData4.columnName[0]}
            points={tableData4.tableDataCol1}
          />
          <ProcessCard
            columnName={tableData4.columnName[1]}
            points={tableData4.tableDataCol2}
          />
          <ProcessCard
            columnName={tableData4.columnName[2]}
            points={tableData4.tableDataCol3}
          />
        </div>

        {/* Render the third set of process cards (tableData5) */}
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-6 mt-10">
          <ProcessCard
            columnName={tableData5.columnName[0]}
            points={tableData5.tableDataCol1}
          />
          <ProcessCard
            columnName={tableData5.columnName[1]}
            points={tableData5.tableDataCol2}
          />
          <ProcessCard
            columnName={tableData5.columnName[2]}
            points={tableData5.tableDataCol3}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;
