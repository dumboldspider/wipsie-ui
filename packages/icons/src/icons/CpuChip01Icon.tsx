
import React from "react";
import { IconProps } from "../Icon.types";

export const CpuChip01Icon = ({
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
<path d="M9 2V4M15 2V4M9 20V22M15 20V22M20 9H22M20 14H22M2 9H4M2 14H4M8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V8.8C20 7.11984 20 6.27976 19.673 5.63803C19.3854 5.07354 18.9265 4.6146 18.362 4.32698C17.7202 4 16.8802 4 15.2 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20ZM10.6 15H13.4C13.9601 15 14.2401 15 14.454 14.891C14.6422 14.7951 14.7951 14.6422 14.891 14.454C15 14.2401 15 13.9601 15 13.4V10.6C15 10.0399 15 9.75992 14.891 9.54601C14.7951 9.35785 14.6422 9.20487 14.454 9.10899C14.2401 9 13.9601 9 13.4 9H10.6C10.0399 9 9.75992 9 9.54601 9.10899C9.35785 9.20487 9.20487 9.35785 9.10899 9.54601C9 9.75992 9 10.0399 9 10.6V13.4C9 13.9601 9 14.2401 9.10899 14.454C9.20487 14.6422 9.35785 14.7951 9.54601 14.891C9.75992 15 10.0399 15 10.6 15Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
