import React from 'react';

type CustomIconProps = {
    size: number;
    color: string;
};

export const MinimizeIcon = ({size, color}: CustomIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke={color}
         strokeWidth="1.7"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-chevron-down">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
)

