
import React from "react";
import { IconProps } from "../Icon.types";

export const Truck02Icon = ({
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
<path d="M16 16V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H16ZM16 16H20.4C20.9601 16 21.2401 16 21.454 15.891C21.6422 15.7951 21.7951 15.6422 21.891 15.454C22 15.2401 22 14.9601 22 14.4V11.6627C22 11.4182 22 11.2959 21.9724 11.1808C21.9479 11.0787 21.9075 10.9812 21.8526 10.8917C21.7908 10.7908 21.7043 10.7043 21.5314 10.5314L19.4686 8.46863C19.2957 8.29568 19.2092 8.2092 19.1083 8.14736C19.0188 8.09253 18.9213 8.05213 18.8192 8.02763C18.7041 8 18.5818 8 18.3373 8H16M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5ZM20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
