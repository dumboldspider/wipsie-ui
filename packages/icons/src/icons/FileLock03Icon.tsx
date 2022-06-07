
import React from "react";
import { IconProps } from "../Icon.types";

export const FileLock03Icon = ({
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
<path d="M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8M14 2L20 8M14 2V8H20M13.75 14V12.25C13.75 11.2835 12.9665 10.5 12 10.5C11.0335 10.5 10.25 11.2835 10.25 12.25V14M10.1 18H13.9C14.4601 18 14.7401 18 14.954 17.891C15.1422 17.7951 15.2951 17.6422 15.391 17.454C15.5 17.2401 15.5 16.9601 15.5 16.4V15.6C15.5 15.0399 15.5 14.7599 15.391 14.546C15.2951 14.3578 15.1422 14.2049 14.954 14.109C14.7401 14 14.4601 14 13.9 14H10.1C9.53995 14 9.25992 14 9.04601 14.109C8.85785 14.2049 8.70487 14.3578 8.60899 14.546C8.5 14.7599 8.5 15.0399 8.5 15.6V16.4C8.5 16.9601 8.5 17.2401 8.60899 17.454C8.70487 17.6422 8.85785 17.7951 9.04601 17.891C9.25992 18 9.53995 18 10.1 18Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
