
import React from "react";
import { IconProps } from "../Icon.types";

export const Percent01Icon = ({
  size = "1em", 
  stroke = "inherit", 
  fill, 
  align = "bottom",
  strokeWidth = 2, 
  strokeLinecap = "round", 
  strokeLinejoin = "round"
}: IconProps) => {

  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill={fill || "none"} 
      style={{ 
        stroke: stroke,
        display: "inline-block",
        verticalAlign: align,
        transition: "all 0.3s ease-in-out",
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      }}
    >

<path d="M19 5L5 19M7.5 6.5C7.5 7.05228 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.05228 5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5C7.05228 5.5 7.5 5.94772 7.5 6.5ZM18.5 17.5C18.5 18.0523 18.0523 18.5 17.5 18.5C16.9477 18.5 16.5 18.0523 16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5C18.0523 16.5 18.5 16.9477 18.5 17.5Z"    />


    </svg>
  );
};
