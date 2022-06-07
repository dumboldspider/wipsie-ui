
import React from "react";
import { IconProps } from "../Icon.types";

export const CoinsStacked04Icon = ({
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
<path d="M20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5M20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5M20 9.6666C20 11.3235 16.4183 12.6666 12 12.6666C7.58172 12.6666 4 11.3235 4 9.6666M20 14.33C20 15.9869 16.4183 17.33 12 17.33C7.58172 17.33 4 15.9869 4 14.33" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
