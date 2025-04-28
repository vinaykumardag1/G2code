import React from 'react';

type WaterCardProps = {
  title: string;
  items: string[];
  style?: React.CSSProperties; // Allow optional style prop
};

const WaterCard: React.FC<WaterCardProps> = ({ title, items, style }) => {
  return (
    <div 
      className="border-2 border-LightBlue bg-white dark:bg-bg-color-dark rounded-lg p-6 w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={style} // Apply the style prop here
    >
      <h2 className="text-xl font-semibold dark:text-white mb-4">
        {title}
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WaterCard;
