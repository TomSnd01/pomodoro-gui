import React from "react";
import { COLORS } from "@/values/colors";

type CustomIconProps = {
  size: number;
};

export const VolumeIcon = ({ size }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={COLORS.mainhighlight}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-volume"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
  </svg>
);
