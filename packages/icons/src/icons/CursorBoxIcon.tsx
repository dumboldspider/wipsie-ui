
import React from "react";
import { IconProps } from "../Icon.types";

export const CursorBoxIcon = ({
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
<path d="M21 9.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9.5M17.3862 17.7113L15.6879 20.8653C15.4103 21.3808 15.2715 21.6386 15.1023 21.7059C14.9555 21.7643 14.7896 21.7498 14.6551 21.6668C14.5001 21.5712 14.4081 21.2933 14.2241 20.7375L11.5004 12.5113C11.3392 12.0245 11.2586 11.7812 11.3166 11.6191C11.367 11.478 11.478 11.367 11.6191 11.3166C11.7812 11.2586 12.0245 11.3392 12.5113 11.5004L20.7374 14.2241C21.2933 14.4082 21.5712 14.5002 21.6668 14.6551C21.7498 14.7897 21.7642 14.9555 21.7058 15.1024C21.6386 15.2715 21.3808 15.4103 20.8652 15.6879L17.7113 17.3862C17.6328 17.4285 17.5935 17.4497 17.5591 17.4768C17.5286 17.501 17.501 17.5286 17.4768 17.5591C17.4497 17.5935 17.4285 17.6328 17.3862 17.7113Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
