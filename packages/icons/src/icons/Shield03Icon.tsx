
import React from "react";
import { IconProps } from "../Icon.types";

export const Shield03Icon = ({
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
<path d="M12 2.50011V21.5001M20 12.0001C20 16.9086 14.646 20.4785 12.698 21.615C12.4766 21.7442 12.3659 21.8087 12.2097 21.8422C12.0884 21.8682 11.9116 21.8682 11.7903 21.8422C11.6341 21.8087 11.5234 21.7442 11.302 21.615C9.35396 20.4785 4 16.9086 4 12.0001V7.21772C4 6.4182 4 6.01845 4.13076 5.67482C4.24627 5.37126 4.43398 5.10039 4.67766 4.88564C4.9535 4.64255 5.3278 4.50219 6.0764 4.22146L11.4382 2.21079C11.6461 2.13283 11.75 2.09385 11.857 2.07839C11.9518 2.06469 12.0482 2.06469 12.143 2.07839C12.25 2.09385 12.3539 2.13283 12.5618 2.21079L17.9236 4.22146C18.6722 4.50219 19.0465 4.64255 19.3223 4.88564C19.566 5.10039 19.7537 5.37126 19.8692 5.67482C20 6.01845 20 6.4182 20 7.21772V12.0001Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
