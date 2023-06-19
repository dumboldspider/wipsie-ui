
import React from "react";
import { IconProps } from "../Icon.types";

export const Modem01Icon = ({
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

<path d="M16.2427 4.75732C18.5858 7.10047 18.5858 10.8995 16.2427 13.2426M7.75734 13.2426C5.41419 10.8995 5.41419 7.10047 7.75734 4.75732M4.85829 16C1.02359 12.0894 1.04705 5.81059 4.92869 1.92896M19.0713 1.92896C22.9529 5.81059 22.9764 12.0894 19.1417 16M12 16V9M4.99998 22H19C19.9319 22 20.3978 22 20.7653 21.8478C21.2554 21.6448 21.6447 21.2554 21.8477 20.7654C22 20.3978 22 19.9319 22 19C22 18.0681 22 17.6022 21.8477 17.2346C21.6447 16.7446 21.2554 16.3552 20.7653 16.1522C20.3978 16 19.9319 16 19 16H4.99998C4.06809 16 3.60215 16 3.23461 16.1522C2.74455 16.3552 2.35521 16.7446 2.15222 17.2346C1.99998 17.6022 1.99998 18.0681 1.99998 19C1.99998 19.9319 1.99998 20.3978 2.15222 20.7654C2.35521 21.2554 2.74455 21.6448 3.23461 21.8478C3.60215 22 4.06809 22 4.99998 22Z"    />


    </svg>
  );
};
