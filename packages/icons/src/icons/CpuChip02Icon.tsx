
import React from "react";
import { IconProps } from "../Icon.types";

export const CpuChip02Icon = ({
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
<path d="M9 2V5M15 2V5M9 19V22M15 19V22M19 9H22M19 14H22M2 9H5M2 14H5M9.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V9.8C19 8.11984 19 7.27976 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C16.7202 5 15.8802 5 14.2 5H9.8C8.11984 5 7.27976 5 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5 7.27976 5 8.11984 5 9.8V14.2C5 15.8802 5 16.7202 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C7.27976 19 8.11984 19 9.8 19Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
