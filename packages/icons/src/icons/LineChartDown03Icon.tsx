
import React from "react";
import { IconProps } from "../Icon.types";

export const LineChartDown03Icon = ({
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
<path d="M17 15L11.5657 9.56569C11.3677 9.36768 11.2687 9.26867 11.1545 9.23158C11.0541 9.19895 10.9459 9.19895 10.8455 9.23158C10.7313 9.26867 10.6323 9.36768 10.4343 9.56569L8.56569 11.4343C8.36768 11.6323 8.26867 11.7313 8.15451 11.7684C8.05409 11.8011 7.94591 11.8011 7.84549 11.7684C7.73133 11.7313 7.63232 11.6323 7.43431 11.4343L3 7M17 15H13M17 15V11M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" 
strokeWidth={strokeWidth} 
strokeLinecap={strokeLinecap} 
strokeLinejoin={strokeLinejoin}/>
</svg>

  );
};
