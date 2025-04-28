import React from 'react';

type CapabilityCardProps = {
    title: string;      // The title of the card
    points?: string[];  // Array of points to display (optional with default value)
};

const ResourcesCard: React.FC<CapabilityCardProps> = ({ title, points = [] }) => {
    return (
        <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold dark:text-white mb-4">{title}</h3>
            <ul className="list-disc ml-4">
                {points.map((point, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 mb-1 text-lg">{point}</li>
                ))}
            </ul>
        </div>
    );
};

export const resources = [
    "Multi-discipline Engineering, and Advisory services",
    "Facilities Improvement, HSE",
    "EPCM, Fabrication Management, Project Controls",
    "LNG and Gas Processing, Chemicals, Refining",
    "ESG, CCUS, Methane Abatement, Hydrogen",
    "Project Development, and Definition"
];

export default ResourcesCard;
