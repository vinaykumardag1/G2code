import React from 'react';

type HomePageCardProps = {
    points: string[];   // Array of points to display
};

const HomePageCard: React.FC<HomePageCardProps> = ({ points }) => {
    // Split the points array into two parts
    const leftPoints = points.slice(0, 3);  // First 3 points
    const rightPoints = points.slice(3);    // Remaining points (next 3)

    return (
        <div className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex gap-6">
                {/* Left side */}
                <div>
                    <ul className="list-disc pl-4 flex flex-col gap-4">
                        {leftPoints.map((point, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300 text-lg">{point}</li>
                        ))}
                    </ul>
                </div>

                {/* Right side */}
                <div className="flex-1">
                    <ul className="list-disc pl-4 flex flex-col gap-4">
                        {rightPoints.map((point, index) => (
                            <li key={index} className="text-gray-700 dark:text-gray-300 text-lg">{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const HomePageCardData = [
    {
        points: [
            "Operations support",
            "Engineering",
            "Project consulting",
            "Construction management",
            "Project Management Consulting",
            "Advanced Digital Technology",
        ],
    }
];

export default HomePageCard;
