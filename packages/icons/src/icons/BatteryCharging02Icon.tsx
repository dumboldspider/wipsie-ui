
import React from "react";
import { IconProps } from "../Icon.types";

export const BatteryCharging02Icon = ({
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
<path d="M9.5 18L13.5 12H7.5L11.5 6M22 13V11M14 18H14.2C15.8802 18 16.7202 18 17.362 17.673C17.9265 17.3854 18.3854 16.9265 18.673 16.362C19 15.7202 19 14.8802 19 13.2V10C19 9.07003 19 8.60504 18.8978 8.22354C18.6204 7.18827 17.8117 6.37962 16.7765 6.10222C16.395 6 15.93 6 15 6M7 6H6.8C5.11984 6 4.27976 6 3.63803 6.32698C3.07354 6.6146 2.6146 7.07354 2.32698 7.63803C2 8.27976 2 9.11984 2 10.8V14C2 14.93 2 15.395 2.10222 15.7765C2.37962 16.8117 3.18827 17.6204 4.22354 17.8978C4.60504 18 5.07003 18 6 18" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};