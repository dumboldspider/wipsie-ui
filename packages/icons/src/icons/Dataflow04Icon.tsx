
import React from "react";
import { IconProps } from "../Icon.types";

export const Dataflow04Icon = ({
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
<path d="M4 18V17.8C4 16.1198 4 15.2798 4.32698 14.638C4.6146 14.0735 5.07354 13.6146 5.63803 13.327C6.27976 13 7.11984 13 8.8 13H15.2C16.8802 13 17.7202 13 18.362 13.327C18.9265 13.6146 19.3854 14.0735 19.673 14.638C20 15.2798 20 16.1198 20 17.8V18M4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18ZM20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18ZM12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18ZM12 18V8M6 8H18C18.9319 8 19.3978 8 19.7654 7.84776C20.2554 7.64477 20.6448 7.25542 20.8478 6.76537C21 6.39782 21 5.93188 21 5C21 4.06812 21 3.60218 20.8478 3.23463C20.6448 2.74458 20.2554 2.35523 19.7654 2.15224C19.3978 2 18.9319 2 18 2H6C5.06812 2 4.60218 2 4.23463 2.15224C3.74458 2.35523 3.35523 2.74458 3.15224 3.23463C3 3.60218 3 4.06812 3 5C3 5.93188 3 6.39782 3.15224 6.76537C3.35523 7.25542 3.74458 7.64477 4.23463 7.84776C4.60218 8 5.06812 8 6 8Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
