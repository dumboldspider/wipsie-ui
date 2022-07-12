
import React from "react";
import { IconProps } from "../Icon.types";

export const Toggle01LeftIcon = ({
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
}} xmlns="http://www.w3.org/2000/svg">
<path d="M7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H7M7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
