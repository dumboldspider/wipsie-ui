
import React from "react";
import { IconProps } from "../Icon.types";

export const Contrast03Icon = ({
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
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
<path d="M16 8.5C16 12.6421 12.6421 16 8.5 16C7.88534 16 7.28795 15.9261 6.71623 15.7866C7.89585 17.4297 9.82294 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 9.82294 17.4297 7.89585 15.7866 6.71623C15.9261 7.28795 16 7.88534 16 8.5Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
