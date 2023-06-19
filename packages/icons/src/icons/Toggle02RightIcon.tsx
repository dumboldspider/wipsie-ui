
import React from "react";
import { IconProps } from "../Icon.types";

export const Toggle02RightIcon = ({
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

<path d="M13.9995 16H6C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8H13.9995M21.9995 12C21.9995 14.7614 19.7609 17 16.9995 17C14.2381 17 11.9995 14.7614 11.9995 12C11.9995 9.23858 14.2381 7 16.9995 7C19.7609 7 21.9995 9.23858 21.9995 12Z"    />


    </svg>
  );
};
