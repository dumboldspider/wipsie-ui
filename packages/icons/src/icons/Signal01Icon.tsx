
import React from "react";
import { IconProps } from "../Icon.types";

export const Signal01Icon = ({
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
<path d="M16.2426 7.75738C18.5858 10.1005 18.5858 13.8995 16.2426 16.2427M7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75735M4.92893 19.0711C1.02369 15.1658 1.02369 8.8342 4.92893 4.92896M19.0711 4.929C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
