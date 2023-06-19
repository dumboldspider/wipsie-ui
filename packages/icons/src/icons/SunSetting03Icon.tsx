
import React from "react";
import { IconProps } from "../Icon.types";

export const SunSetting03Icon = ({
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

<path d="M6.06006 20.9125C7.27006 21.4625 8.81006 21.4625 10.0201 20.9125C11.2301 20.3625 12.7701 20.3625 13.9801 20.9125C15.1901 21.4625 16.7301 21.4625 17.9401 20.9125M12 3V5M4 13H2M6.31412 7.31412L4.8999 5.8999M17.6855 7.31412L19.0998 5.8999M22 13H20M7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13M2.1001 17.4125C3.3101 16.8625 4.8501 16.8625 6.0601 17.4125C7.2701 17.9625 8.8101 17.9625 10.0201 17.4125C11.2301 16.8625 12.7701 16.8625 13.9801 17.4125C15.1901 17.9625 16.7301 17.9625 17.9401 17.4125C19.1501 16.8625 20.6901 16.8625 21.9001 17.4125"    />


    </svg>
  );
};
