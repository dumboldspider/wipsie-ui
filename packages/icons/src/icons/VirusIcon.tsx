
import React from "react";
import { IconProps } from "../Icon.types";

export const VirusIcon = ({
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

<path d="M12 2V7M12 2C11.2867 2 10.5909 2.07467 9.91991 2.21663M12 2C12.7132 2 13.4091 2.07467 14.08 2.21663M12 7C9.23855 7 7 9.2386 7 12M12 7C14.7614 7 17 9.2386 17 12M12 17V22M12 17C14.7614 17 17 14.7614 17 12M12 17C9.23855 17 7 14.7614 7 12M12 22C12.7122 22 13.407 21.9255 14.077 21.784M12 22C11.2851 22 10.5878 21.925 9.91545 21.7824M4.92891 4.92893L8.46444 8.46447M15.5355 15.5355L19.071 19.0711M2 12H7M2 12C2 12.7133 2.07466 13.4092 2.21664 14.0802M2 12C2 11.2857 2.07488 10.5888 2.21727 9.91683M17 12H22M22 12C22 11.2867 21.9253 10.5908 21.7833 9.91978M22 12C22 12.7131 21.9254 13.4086 21.7835 14.0794M4.92891 19.0711L8.46444 15.5355M15.5355 8.46447L19.071 4.92893M17.4466 3.61208C18.621 4.37619 19.6249 5.38023 20.3888 6.55469M20.386 17.4496C19.622 18.6229 18.6183 19.626 17.4445 20.3893M6.55371 20.3882C5.38104 19.6252 4.37831 18.623 3.61474 17.4508M3.61171 6.55387C4.37545 5.37994 5.37894 4.37633 6.55275 3.61244"    />


    </svg>
  );
};
