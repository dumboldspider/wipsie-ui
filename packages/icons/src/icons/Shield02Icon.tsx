
import React from "react";
import { IconProps } from "../Icon.types";

export const Shield02Icon = ({
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

<path d="M11.302 21.6149C11.5234 21.7441 11.6341 21.8087 11.7903 21.8422C11.9116 21.8682 12.0884 21.8682 12.2097 21.8422C12.3659 21.8087 12.4766 21.7441 12.698 21.6149C14.646 20.4785 20 16.9085 20 12.0001V8.20007C20 7.12617 20 6.58923 19.8345 6.20807C19.6662 5.82067 19.4986 5.61458 19.1536 5.37097C18.8141 5.13129 18.1486 4.99289 16.8177 4.71609C15.3508 4.41101 14.2243 3.8601 13.1944 3.06339C12.7005 2.68133 12.4536 2.49031 12.2603 2.43821C12.0564 2.38323 11.9436 2.38323 11.7397 2.43821C11.5464 2.49031 11.2995 2.68134 10.8056 3.06339C9.77572 3.8601 8.6492 4.41101 7.1823 4.71609C5.85137 4.99289 5.18591 5.13129 4.84645 5.37097C4.50142 5.61458 4.33379 5.82067 4.16554 6.20807C4 6.58923 4 7.12617 4 8.20007V12.0001C4 16.9085 9.35396 20.4785 11.302 21.6149Z"    />


    </svg>
  );
};
