
import React from "react";
import { IconProps } from "../Icon.types";

export const Lock02Icon = ({
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
        strokeWidth: strokeWidth,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      }}
    >

<path d="M17 11V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V11M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"    />


    </svg>
  );
};
