import React from 'react';
import SoftwareCard from '@/components/engineeringcards/SoftwareCard'; // Adjust the import based on your project structure

function ProjectSoftware() {
    // Combine tableData7 and tableData8 into a single array
    const data = [
        {
            columnName: "Project Management Software",
            tableDataCol1: ["Integrated Project Management System", "Scheduling", "Cost Estimation", "Office", "Process Simulation", "Corrosion Evaluation", "RAM Study", "CAD", "HVAC - Thermal Design", "Pressure Vessel Design", "Piping Stress Analysis", "Electrical Design", "Lighting Calculations", "Instrumentation Design", "Civil Structural Design"],
            tableDataCol2: ["Wrench SmartProject", "MS Project Primavera", "ASPEN In-Plant, Excel", "MicroSoft Office", "Aspen, HYSYS, Unisim", "Intercorr", "Maros", "AutoCAD 2D & 3D, SP3, PDS", "Career", "PV Elite", "Ceasar II", "ETAP", "Dialux", "Intools", "SACS, STAAD Pro, Tekla"]
        },
        {
            columnName: "Economic Financial Analysis Software",
            tableDataCol1: ["Financial Modeling", "Electrical Modeling Forecasting & Analysis"],
            tableDataCol2: ["AuroraXMP", "Excel, GAMS"]
        }
    ];

    return (
        <div className='mt-10'>
            {data.map((table, idx) => (
                <div key={idx}>
                    <h2 className={`mb-4 font-bold !leading-tight text-Green dark:text-white mt-10 uppercase text-[23px]`}>
                        {table.columnName}
                    </h2>

                    {/* Adjusted to show 2 cards in a row */}
                    <div className="flex flex-wrap justify-center ">
                        {/* First card with data from tableDataCol1 */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <SoftwareCard
                                title="" // Remove title by passing an empty string or null
                                tools={table.tableDataCol1}
                            />
                        </div>
                        {/* Second card with data from tableDataCol2 */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <SoftwareCard
                                title="" // Remove title by passing an empty string or null
                                tools={table.tableDataCol2}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectSoftware;
