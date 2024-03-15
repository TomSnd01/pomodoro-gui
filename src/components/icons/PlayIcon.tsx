import React from "react";

type CustomIconProps = {
  size: number;
};

export const PlayIcon = ({ size }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-play"
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);
