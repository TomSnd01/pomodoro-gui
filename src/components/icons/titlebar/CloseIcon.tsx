import React from 'react';

type CustomIconProps = {
    size: number;
    color: string;
};

export const CloseIcon = ({size, color}: CustomIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill={color}
         stroke={color}
         strokeWidth="1.7"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
)