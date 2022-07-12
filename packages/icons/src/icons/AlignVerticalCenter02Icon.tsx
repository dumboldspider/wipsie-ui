
import React from "react";
import { IconProps } from "../Icon.types";

export const AlignVerticalCenter02Icon = ({
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
<path d="M10 18V6C10 5.06812 10 4.60218 9.84776 4.23463C9.64477 3.74458 9.25542 3.35523 8.76537 3.15224C8.39782 3 7.93188 3 7 3C6.06812 3 5.60218 3 5.23463 3.15224C4.74458 3.35523 4.35523 3.74458 4.15224 4.23463C4 4.60218 4 5.06812 4 6V18C4 18.9319 4 19.3978 4.15224 19.7654C4.35523 20.2554 4.74458 20.6448 5.23463 20.8478C5.60218 21 6.06812 21 7 21C7.93188 21 8.39782 21 8.76537 20.8478C9.25542 20.6448 9.64477 20.2554 9.84776 19.7654C10 19.3978 10 18.9319 10 18Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
<path d="M20 16V8C20 7.06812 20 6.60218 19.8478 6.23463C19.6448 5.74458 19.2554 5.35523 18.7654 5.15224C18.3978 5 17.9319 5 17 5C16.0681 5 15.6022 5 15.2346 5.15224C14.7446 5.35523 14.3552 5.74458 14.1522 6.23463C14 6.60218 14 7.06812 14 8V16C14 16.9319 14 17.3978 14.1522 17.7654C14.3552 18.2554 14.7446 18.6448 15.2346 18.8478C15.6022 19 16.0681 19 17 19C17.9319 19 18.3978 19 18.7654 18.8478C19.2554 18.6448 19.6448 18.2554 19.8478 17.7654C20 17.3978 20 16.9319 20 16Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
