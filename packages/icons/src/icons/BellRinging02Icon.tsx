
import React from "react";
import { IconProps } from "../Icon.types";

export const BellRinging02Icon = ({
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

<path d="M14.0003 21H10.0003M2.29414 5.81989C2.27979 4.36854 3.06227 3.01325 4.32635 2.3M21.7025 5.8199C21.7169 4.36855 20.9344 3.01325 19.6703 2.3M18.0003 8C18.0003 6.4087 17.3682 4.88258 16.2429 3.75736C15.1177 2.63214 13.5916 2 12.0003 2C10.409 2 8.88288 2.63214 7.75766 3.75736C6.63244 4.88258 6.0003 6.4087 6.0003 8C6.0003 11.0902 5.22077 13.206 4.34996 14.6054C3.61542 15.7859 3.24816 16.3761 3.26162 16.5408C3.27653 16.7231 3.31516 16.7926 3.46207 16.9016C3.59476 17 4.19289 17 5.38915 17H18.6114C19.8077 17 20.4058 17 20.5385 16.9016C20.6854 16.7926 20.7241 16.7231 20.739 16.5408C20.7524 16.3761 20.3852 15.7859 19.6506 14.6054C18.7798 13.206 18.0003 11.0902 18.0003 8Z"    />


    </svg>
  );
};
