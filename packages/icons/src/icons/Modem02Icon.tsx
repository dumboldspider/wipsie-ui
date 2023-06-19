
import React from "react";
import { IconProps } from "../Icon.types";

export const Modem02Icon = ({
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

<path d="M6.20472 10.5578C5.72578 8.76952 6.08709 6.80306 7.28865 5.28366M17.7952 10.5577C18.2742 8.76947 17.9129 6.80301 16.7113 5.28361M2.34183 11.5996C1.50387 8.47481 2.20543 5.02318 4.44651 2.4458M21.6547 11.5996C22.4926 8.47485 21.7911 5.02322 19.55 2.44584M12 14.9999V8.99992M5.49998 18.4999H9.49998M5.19998 21.9999H18.8C19.9201 21.9999 20.4801 21.9999 20.908 21.7819C21.2843 21.5902 21.5902 21.2842 21.782 20.9079C22 20.4801 22 19.92 22 18.7999V18.1999C22 17.0798 22 16.5198 21.782 16.0919C21.5902 15.7156 21.2843 15.4097 20.908 15.2179C20.4801 14.9999 19.9201 14.9999 18.8 14.9999H5.19998C4.07987 14.9999 3.51982 14.9999 3.092 15.2179C2.71567 15.4097 2.40971 15.7156 2.21796 16.0919C1.99998 16.5198 1.99998 17.0798 1.99998 18.1999V18.7999C1.99998 19.92 1.99998 20.4801 2.21796 20.9079C2.40971 21.2842 2.71567 21.5902 3.092 21.7819C3.51982 21.9999 4.07987 21.9999 5.19998 21.9999Z"    />


    </svg>
  );
};
