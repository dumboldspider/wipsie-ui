
import React from "react";
import { IconProps } from "../Icon.types";

export const Signal02Icon = ({
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

<path d="M16.2427 5.75732C18.5858 8.10047 18.5858 11.8995 16.2427 14.2426M7.75734 14.2426C5.41419 11.8995 5.41419 8.10047 7.75734 5.75732M4.92869 17.0711C1.02345 13.1658 1.02345 6.8342 4.92869 2.92896M19.0713 2.92896C22.9765 6.8342 22.9765 13.1658 19.0713 17.0711M12 12C13.1045 12 14 11.1046 14 10C14 8.89543 13.1045 8 12 8C10.8954 8 9.99998 8.89543 9.99998 10C9.99998 11.1046 10.8954 12 12 12ZM12 12V21"    />


    </svg>
  );
};
