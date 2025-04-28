import React from 'react';

type SoftwareCardProps = {
    title: string;
    tools: string[];
};

const SoftwareCard: React.FC<SoftwareCardProps> = ({ title, tools }) => {
    return (
        <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full lg:w-2/3 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold dark:text-white mb-2">{title}</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                ))}
            </ul>
        </div>
    );
};

export default SoftwareCard;
