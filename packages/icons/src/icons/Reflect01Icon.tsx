
import React from "react";
import { IconProps } from "../Icon.types";

export const Reflect01Icon = ({
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

<path d="M12 3V6M12 10.5V13.5M12 18V21M3.28777 7.99059L7.67567 11.3659C7.95617 11.5817 8.09641 11.6895 8.14681 11.821C8.19098 11.9363 8.19098 12.0637 8.14681 12.179C8.09641 12.3105 7.95617 12.4183 7.67567 12.6341L3.28777 16.0094C2.87415 16.3276 2.66735 16.4867 2.49387 16.4845C2.34295 16.4827 2.20094 16.4128 2.10745 16.2943C2 16.1581 2 15.8971 2 15.3753V8.62469C2 8.10286 2 7.84195 2.10745 7.70574C2.20094 7.58724 2.34295 7.51732 2.49387 7.51547C2.66735 7.51334 2.87415 7.67243 3.28777 7.99059ZM20.7122 7.99059L16.3243 11.3659C16.0438 11.5817 15.9036 11.6895 15.8532 11.821C15.809 11.9363 15.809 12.0637 15.8532 12.179C15.9036 12.3105 16.0438 12.4183 16.3243 12.6341L20.7122 16.0094C21.1258 16.3276 21.3327 16.4867 21.5061 16.4845C21.6571 16.4827 21.7991 16.4128 21.8925 16.2943C22 16.1581 22 15.8971 22 15.3753V8.62469C22 8.10286 22 7.84195 21.8925 7.70574C21.7991 7.58724 21.6571 7.51732 21.5061 7.51547C21.3327 7.51334 21.1258 7.67243 20.7122 7.99059Z"    />


    </svg>
  );
};
