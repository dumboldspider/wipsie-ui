
import React from "react";
import { IconProps } from "../Icon.types";

export const Umbrella01Icon = ({
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

<path d="M17 19.4C17 20.8359 15.8807 22 14.5 22C13.1193 22 12 20.8359 12 19.4V12M2.12627 10.4063C2.88948 5.64091 7.01953 2 12 2C16.9804 2 21.1104 5.64091 21.8737 10.4063C21.9482 10.8714 21.9854 11.1039 21.8919 11.3523C21.8175 11.55 21.6353 11.7636 21.4519 11.8684C21.2214 12 20.9476 12 20.4 12H3.59997C3.05232 12 2.7785 12 2.54801 11.8684C2.36463 11.7636 2.18246 11.55 2.10805 11.3523C2.01453 11.1039 2.05178 10.8714 2.12627 10.4063Z"    />


    </svg>
  );
};
