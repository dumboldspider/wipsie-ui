
import React from "react";
import { IconProps } from "../Icon.types";

export const Sliders02Icon = ({
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

<path d="M5 21L5 15M5 15C6.10457 15 7 14.1046 7 13C7 11.8954 6.10457 11 5 11C3.89543 11 3 11.8954 3 13C3 14.1046 3.89543 15 5 15ZM5 7V3M12 21V15M12 7V3M12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7ZM19 21V17M19 17C20.1046 17 21 16.1046 21 15C21 13.8954 20.1046 13 19 13C17.8954 13 17 13.8954 17 15C17 16.1046 17.8954 17 19 17ZM19 9V3"    />


    </svg>
  );
};
