
import React from "react";
import { IconProps } from "../Icon.types";

export const Headphones02Icon = ({
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

<path d="M22 17V13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13V17M7.5 21C6.11929 21 5 19.8807 5 18.5V15.5C5 14.1193 6.11929 13 7.5 13C8.88071 13 10 14.1193 10 15.5V18.5C10 19.8807 8.88071 21 7.5 21ZM16.5 21C15.1193 21 14 19.8807 14 18.5V15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V18.5C19 19.8807 17.8807 21 16.5 21Z"    />


    </svg>
  );
};
