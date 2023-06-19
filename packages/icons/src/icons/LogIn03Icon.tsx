
import React from "react";
import { IconProps } from "../Icon.types";

export const LogIn03Icon = ({
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

<path d="M6 17C6 17.3513 6 17.5269 6.01567 17.6796C6.14575 18.9474 7.0626 19.9946 8.30206 20.2911C8.45134 20.3268 8.6255 20.35 8.97368 20.3965L15.5656 21.2754C17.442 21.5256 18.3803 21.6507 19.1084 21.3611C19.7478 21.1069 20.2803 20.6407 20.6168 20.0406C21 19.357 21 18.4105 21 16.5175V7.48244C21 5.5894 21 4.64288 20.6168 3.95935C20.2803 3.35923 19.7478 2.893 19.1084 2.6388C18.3803 2.34926 17.442 2.47435 15.5656 2.72455L8.97368 3.60347C8.62546 3.6499 8.45135 3.67311 8.30206 3.70883C7.0626 4.00532 6.14575 5.05254 6.01567 6.3203C6 6.47301 6 6.64866 6 6.99996M12 7.99996L16 12M16 12L12 16M16 12H3"    />


    </svg>
  );
};
