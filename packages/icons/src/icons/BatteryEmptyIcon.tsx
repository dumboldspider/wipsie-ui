
import React from "react";
import { IconProps } from "../Icon.types";

export const BatteryEmptyIcon = ({
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
<path d="M22 13V11M6.8 18H14.2C15.8802 18 16.7202 18 17.362 17.673C17.9265 17.3854 18.3854 16.9265 18.673 16.362C19 15.7202 19 14.8802 19 13.2V10.8C19 9.11984 19 8.27976 18.673 7.63803C18.3854 7.07354 17.9265 6.6146 17.362 6.32698C16.7202 6 15.8802 6 14.2 6H6.8C5.11984 6 4.27976 6 3.63803 6.32698C3.07354 6.6146 2.6146 7.07354 2.32698 7.63803C2 8.27976 2 9.11984 2 10.8V13.2C2 14.8802 2 15.7202 2.32698 16.362C2.6146 16.9265 3.07354 17.3854 3.63803 17.673C4.27976 18 5.11984 18 6.8 18Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
