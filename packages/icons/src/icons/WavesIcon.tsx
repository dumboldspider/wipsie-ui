
import React from "react";
import { IconProps } from "../Icon.types";

export const WavesIcon = ({
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
<path d="M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C10.8 5 11.4 5.5 12 6C12.6 6.5 13.2 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C10.8 17 11.4 17.5 12 18C12.6 18.5 13.2 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C10.8 11 11.4 11.5 12 12C12.6 12.5 13.2 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
