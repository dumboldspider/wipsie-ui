
import React from "react";
import { IconProps } from "../Icon.types";

export const Flag04Icon = ({
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

<path d="M13.5 6.5H19.7056C20.1342 6.5 20.3485 6.5 20.4776 6.59027C20.5903 6.6691 20.6655 6.79086 20.6856 6.92692C20.7086 7.08273 20.6128 7.27442 20.4211 7.65777L19.1688 10.1623C19.1068 10.2864 19.0758 10.3485 19.0626 10.4137C19.051 10.4714 19.0496 10.5308 19.0586 10.5891C19.0688 10.6548 19.097 10.7182 19.1533 10.845L20.5 13.8751C20.6667 14.25 20.75 14.4374 20.7227 14.5888C20.6988 14.721 20.6227 14.8381 20.5116 14.9136C20.3844 15 20.1793 15 19.769 15H12.1C11.5399 15 11.2599 15 11.046 14.891C10.8578 14.7951 10.7049 14.6422 10.609 14.454C10.5 14.2401 10.5 13.9601 10.5 13.4V11M3 21L3 3.5M3 11H11.9C12.4601 11 12.7401 11 12.954 10.891C13.1422 10.7951 13.2951 10.6422 13.391 10.454C13.5 10.2401 13.5 9.96005 13.5 9.4V4.1C13.5 3.53995 13.5 3.25992 13.391 3.04601C13.2951 2.85785 13.1422 2.70487 12.954 2.60899C12.7401 2.5 12.4601 2.5 11.9 2.5L4.6 2.5C4.03995 2.5 3.75992 2.5 3.54601 2.60899C3.35785 2.70487 3.20487 2.85785 3.10899 3.04601C3 3.25992 3 3.53995 3 4.1V11Z"    />


    </svg>
  );
};
