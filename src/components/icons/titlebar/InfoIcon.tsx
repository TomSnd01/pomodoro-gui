import React from 'react';

type CustomIconProps = {
    size: number;
    color: string;
};

export const InfoIcon = ({size, color}: CustomIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke={color}
         strokeWidth="1.7"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-info">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
)

