
import React from "react";
import { IconProps } from "../Icon.types";

export const RulerIcon = ({
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

<path d="M14.5 5.49989L16 6.99989M11.5 8.49989L13 9.99989M8.49996 11.4999L9.99996 12.9999M5.49996 14.4999L6.99996 15.9999M2.56561 17.5656L6.43424 21.4342C6.63225 21.6322 6.73125 21.7313 6.84542 21.7683C6.94584 21.801 7.05401 21.801 7.15443 21.7683C7.2686 21.7313 7.3676 21.6322 7.56561 21.4342L21.4342 7.56561C21.6322 7.3676 21.7313 7.2686 21.7683 7.15443C21.801 7.05401 21.801 6.94584 21.7683 6.84542C21.7313 6.73125 21.6322 6.63225 21.4342 6.43424L17.5656 2.56561C17.3676 2.3676 17.2686 2.2686 17.1544 2.2315C17.054 2.19887 16.9458 2.19887 16.8454 2.2315C16.7313 2.2686 16.6322 2.3676 16.4342 2.56561L2.56561 16.4342C2.3676 16.6322 2.2686 16.7313 2.2315 16.8454C2.19887 16.9458 2.19887 17.054 2.2315 17.1544C2.2686 17.2686 2.3676 17.3676 2.56561 17.5656Z"    />


    </svg>
  );
};
