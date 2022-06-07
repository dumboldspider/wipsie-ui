
import React from "react";
import { IconProps } from "../Icon.types";

export const Lightbulb05Icon = ({
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
<path d="M12 2V3M3 12H2M5.5 5.5L4.8999 4.8999M18.5 5.5L19.1002 4.8999M22 12H21M10 13.5H14M12 13.5V18.5M15.5 16.874C17.0141 15.7848 18 14.0075 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 14.0075 6.98593 15.7848 8.5 16.874V18.8C8.5 19.9201 8.5 20.4802 8.71799 20.908C8.90973 21.2843 9.21569 21.5903 9.59202 21.782C10.0198 22 10.5799 22 11.7 22H12.3C13.4201 22 13.9802 22 14.408 21.782C14.7843 21.5903 15.0903 21.2843 15.282 20.908C15.5 20.4802 15.5 19.9201 15.5 18.8V16.874Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
