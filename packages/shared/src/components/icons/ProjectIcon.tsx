import React from "react";
import { useTheme } from "@wipsie/ui";
export function ProjectIcon({ color = null, width = "30px", height = "auto" }) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      style={{
        width: width,
        height: height,
        transition: "all 0.3s ease-in-out",
      }}
      fill={color || theme.palette.text}
    >
      <g>
        <path
          d="M4.5,21.167H17.833V4.5H4.5ZM4.5,34.5H17.833v-10H4.5Zm16.667,0H34.5V17.833H21.167Zm0-30v10H34.5V4.5Z"
          transform="translate(-4.5 -4.5)"
        />
      </g>
    </svg>
  );
}
