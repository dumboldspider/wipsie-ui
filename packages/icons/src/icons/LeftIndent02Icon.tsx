
import React from "react";
import { IconProps } from "../Icon.types";

export const LeftIndent02Icon = ({
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
<path d="M21 9.24995H12M21 3.99995L12 3.99995M21 14.75H3M21 20H3M4.28 2.95995L8.14667 5.85995C8.43616 6.07707 8.5809 6.18563 8.63266 6.31872C8.678 6.43529 8.678 6.56462 8.63266 6.68119C8.5809 6.81427 8.43616 6.92283 8.14667 7.13995L4.28 10.04C3.86802 10.3489 3.66203 10.5034 3.48961 10.4998C3.33956 10.4967 3.19885 10.4264 3.10632 10.3082C3 10.1724 3 9.91493 3 9.39995V3.59995C3 3.08498 3 2.82749 3.10632 2.6917C3.19885 2.57354 3.33956 2.50318 3.48961 2.50006C3.66203 2.49648 3.86802 2.65097 4.28 2.95995Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};