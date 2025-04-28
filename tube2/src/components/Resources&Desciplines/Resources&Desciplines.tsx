import TotalUserPieChart from '../PieChart/Pie';
import TotalUserBarChart from '../BarChart/BarChart';
import Table from '../Table/table';
import tableData6 from '@/app/engineering/tableData6';
import RegionCards from '@/components/engineeringcards/RegionCard';
import Image from 'next/image';
import ResourcesCard, { resources } from '@/components/engineeringcards/ResourcesCard';

function ResourcesDesciplines() {
    // const resources = ["Multi-discipline Engineering, and Advisory services", "Facilities Improvement, HSE", "EPCM, Fabrication Management, Project Controls", "LNG and Gas Processing, Chemicals, Refining", "ESG, CCUS, Methane Abatement, Hydrogen ", "Project Development, and Definition"]
    const resources2 = ["Project Management", "Process", "Mechanical", "Piping", "Civil and Structural", "Electrical and Instruments", "Others, and SME advisory team"]

    const label1 = ["pms, 28", "Process, 9", "Piping, 14", "Mech, 11", "E&I, 7", "CSA, 13 ", "SME, 8"];
    const data1 = [28, 9, 14, 11, 7, 13, 8];
    const backgroundColor1 = [
        'rgba(41, 128, 185)',
        'rgba(231, 76, 60)',
        'rgba(204, 209, 209)',
        'rgba(244, 208, 63)',
        'rgba(31, 97, 141)',
        'rgba(46, 204, 113)',
        'rgba(142, 68, 173)',
    ];

    const labels2 = ["PM, 27", "Process, 36", "Piping, 104", "Mech, 27", "E&I, 64", "C&S, 36 ", "Other, 158"];
    const data2 = [27, 36, 104, 27, 64, 36, 158];
    const backgroundColor2 = [
        'rgba(41, 128, 185)',
        'rgba(231, 76, 60)',
        'rgba(204, 209, 209)',
        'rgba(244, 208, 63)',
        'rgba(31, 97, 141)',
        'rgba(46, 204, 113)',
        'rgba(142, 68, 173)',
    ];
    return (
        <>
            <div className='flex flex-row flex-wrap justify-center mt-10'>
                <div>
                    {/* <h2 className={`uppercase mb-4 font-bold !leading-tight text-green-900 dark:text-white mt-10 text-[23px]`}>
                            Engineering and advisory resources
                        </h2> */}
                    <h2 className={`uppercase mb-4 mt-9 font-bold !leading-tight text-SkyBlue dark:text-white text-[30px]`}>
                        Capabilities and disciplines
                    </h2>
                    {/* Placeholder image using Next.js Image component */}
                    {/* <Image
                        src="/images/addedImg/Capabilities-disciplines.png"
                        alt="Capabilities disciplines"
                        width={300}
                        height={200}
                        className="my-4"
                    /> */}
                    {/* <h2 className={`uppercase mb-4 font-bold !leading-tight dark:text-white underline text-[23px]`}>
                        Resources
                    </h2> */}
                    {/* {resources.map((resource, index) => (
                            <li key={index} className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>{resource}</li>
                        ))} */}

                    {/* Single Card for All Capabilities */}
                    <div className="flex justify-center p-4 mt-10">
                        <ResourcesCard
                            title="Resources"
                            points={resources}
                        />
                    </div>

                </div>
                <div className='mt-10'>
                    <h2 className={`uppercase mb-4 font-bold text-Green !leading-tight dark:text-white text-[23px]`}>
                        Core Team by Numbers, Houston
                    </h2>
                    <TotalUserPieChart label={label1} data={data1} backgroundColor={backgroundColor1} />
                </div>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                <div>
                    <h2 className={`uppercase mb-4 font-bold !leading-tight text-SkyBlue dark:text-white text-[30px]`}>
                        Resources Discipline breakdown
                    </h2>
                    <h2 className={`uppercase mb-4 font-bold text-Green !leading-tight dark:text-white  text-[23px]`}>
                        Multi-discipline Engineering Resources
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        <div>
                            {/* {resources2.map((resource, index) => (
                                    <li key={index} className='mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg'>{resource}</li>
                                ))} */}

                            <div>
                                <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105">
                                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300">
                                        {resources2.map((capability, index) => (
                                            <li
                                                key={index}
                                                className="mb-2"
                                                style={{ textIndent: '-1.2em', paddingLeft: '1.2em' }}
                                            >
                                                {capability}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                        {/* Placeholder image using Next.js Image component */}
                        <Image
                            src="/images/addedImg/Resources-discipline-breakdown.png"
                            alt="Placeholder for Resources Discipline breakdown"
                            width={400}
                            height={200}
                            className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
                <div style={{ width: "100%", height: "400px" }}>
                    <h2 className={`uppercase mb-4 font-bold text-Green !leading-tight dark:text-white text-[23px]`}>
                        Global Team by Numbers
                    </h2>
                    <TotalUserBarChart labels={labels2} data={data2} label="Global Team by Numbers" backgroundColor={backgroundColor2} />
                </div>
                <div className='w-full mt-10'>
                    {/* <Table isBold={true} columnName={tableData6.columnName} tableDataCol1={tableData6.tableDataCol1} tableDataCol2={tableData6.tableDataCol2} tableDataCol3={tableData6.tableDataCol3} /> */}
                    <RegionCards />
                </div>
            </div>
        </>
    )
}

export default ResourcesDesciplines;