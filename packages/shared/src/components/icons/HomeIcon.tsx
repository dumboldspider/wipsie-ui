import React from "react";
import { useTheme } from "@wipsie/ui";
export function HomeIcon({ color = null, width = "30px", height = "auto" }) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 27.692"
      style={{
        width: width,
        height: height,
        transition: "all 0.3s ease-in-out",
      }}
      fill={color || theme.palette.text}
    >
      <g>
        <path
          d="M14.913,32.192V22.962h6.923v9.231h7.038V18.346h4.5L18.375,4.5l-15,13.846h4.5V32.192Z"
          transform="translate(-3.375 -4.5)"
        />
      </g>
    </svg>
  );
}
