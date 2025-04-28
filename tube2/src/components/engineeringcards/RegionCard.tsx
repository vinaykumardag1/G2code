import React from "react";

// Define the type for the card data, with an array of rows
type CapabilityCardProps = {
  rows: { [key: string]: string }[]; // Array of rows where each row is an object with keys matching column titles
  columnNames: string[]; // Array of column titles
};

const CapabilityCard: React.FC<CapabilityCardProps> = ({ rows, columnNames }) => {
  return (
    <div className="bg-white dark:bg-bg-color-dark rounded-lg w-[700px]">
      <div className="grid grid-cols-1 gap-2">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 font-bold text-xl dark:text-white">
          {columnNames.map((name, index) => (
            <div
              key={index}
              className="text-gray-900 dark:text-gray-100 flex items-center justify-center"
            >
              {name}
            </div>
          ))}
        </div>
        {/* Table Rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-3 gap-4 text-black dark:text-gray-300 ${
              rowIndex % 2 === 0 ? "bg-Blue dark:bg-gray-800" : "bg-LightBlue dark:bg-gray-700"
            } transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-2xl`}
          >
            {columnNames.map((col, colIndex) => (
              <div
                key={colIndex}
                className="flex items-center justify-center"
              >
                {row[col]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const RegionCards = () => {
  const tableData6 = {
    columnNames: ["Region", "POC", "Location"],
    tableDataCol1: [
      "Global Projects",
      "North America",
      "Asia and Oceania",
      "Americas",
      "Europe",
      "Middle East",
      "MENA & CIS",
      "US Gov. & Infra.",
    ],
    tableDataCol2: [
      "Romolo Raciti",
      "Pamir Alkus",
      "Kalim Shaikh",
      "Arturo Portilla",
      "Luca Gaetani",
      "Marilena Macrina",
      "Ted Akharman",
      "Charlie Peker",
    ],
    tableDataCol3: [
      "Houston",
      "Houston",
      "Mumbai",
      "Bogota",
      "Rome",
      "Abu Dhabi",
      "Istanbul",
      "Houston",
    ],
  };

  // Transform columns into row-based data
  const rowsData = tableData6.tableDataCol1.map((_, index) => ({
    [tableData6.columnNames[0]]: tableData6.tableDataCol1[index],
    [tableData6.columnNames[1]]: tableData6.tableDataCol2[index],
    [tableData6.columnNames[2]]: tableData6.tableDataCol3[index],
  }));

  return (
    <section className="mt-10">
      <div className="w-full flex justify-center">
        {/* Pass rows and column names to the CapabilityCard */}
        <CapabilityCard rows={rowsData} columnNames={tableData6.columnNames} />
      </div>
    </section>
  );
};

export default RegionCards;
