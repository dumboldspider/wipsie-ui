
import React from "react";
import { IconProps } from "../Icon.types";

export const GamingPad01Icon = ({
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

<path d="M5.99989 11H9.99989M7.99989 9V13M14.9999 12H15.0099M17.9999 10H18.0099M10.4488 5H13.5509C16.1758 5 17.4883 5 18.5184 5.49743C19.4254 5.9354 20.179 6.63709 20.6805 7.51059C21.2501 8.5027 21.3436 9.81181 21.5306 12.43L21.7766 15.8745C21.8973 17.5634 20.5597 19 18.8664 19C18.0005 19 17.1794 18.6154 16.6251 17.9502L16.2499 17.5C15.9068 17.0882 15.7351 16.8823 15.5398 16.7159C15.1302 16.3672 14.6344 16.1349 14.1043 16.0436C13.8514 16 13.5834 16 13.0473 16H10.9525C10.4164 16 10.1484 16 9.89553 16.0436C9.36539 16.1349 8.86957 16.3672 8.46 16.7159C8.26463 16.8823 8.09305 17.0882 7.74989 17.5L7.37473 17.9502C6.8204 18.6154 5.99924 19 5.13335 19C3.44013 19 2.1025 17.5634 2.22314 15.8745L2.46918 12.43C2.65619 9.81181 2.7497 8.5027 3.31926 7.51059C3.82074 6.63709 4.57433 5.9354 5.48135 5.49743C6.51151 5 7.82396 5 10.4488 5Z"    />


    </svg>
  );
};
