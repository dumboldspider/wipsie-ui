
import React from "react";
import { IconProps } from "../Icon.types";

export const Cursor01Icon = ({
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

<path d="M12.9999 12.9999L18.9999 18.9999M17.964 10.7512L12.9533 12.4531C12.8163 12.4996 12.7478 12.5229 12.6908 12.562C12.6404 12.5967 12.5967 12.6404 12.562 12.6908C12.5229 12.7478 12.4996 12.8163 12.4531 12.9533L10.7512 17.964C10.5402 18.5854 10.4346 18.896 10.2696 18.99C10.1267 19.0713 9.95281 19.0772 9.80468 19.0056C9.63374 18.923 9.50756 18.6201 9.25521 18.0144L3.74699 4.79312C3.51283 4.23109 3.39576 3.95007 3.45272 3.77426C3.50214 3.62172 3.62172 3.50214 3.77426 3.45272C3.95007 3.39576 4.23109 3.51283 4.79312 3.74699L18.0144 9.25521C18.6201 9.50756 18.923 9.63374 19.0056 9.80468C19.0772 9.95281 19.0713 10.1267 18.99 10.2696C18.896 10.4346 18.5854 10.5402 17.964 10.7512Z"    />


    </svg>
  );
};
