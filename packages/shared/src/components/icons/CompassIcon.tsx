import React from "react";
import { useTheme } from "@wipsie/ui";
export function CompassIcon({ color = null, width = "30px", height = "auto" }) {
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
          d="M13.632,14.194a1.935,1.935,0,1,0,2.737,0A1.935,1.935,0,0,0,13.632,14.194ZM15,.563a15,15,0,1,0,15,15A15,15,0,0,0,15,.563Zm7.629,8.955-3.99,8.731a1.932,1.932,0,0,1-.954.954l-8.73,3.99a1.2,1.2,0,0,1-1.585-1.585l3.991-8.731a1.932,1.932,0,0,1,.954-.954l8.73-3.99A1.2,1.2,0,0,1,22.629,9.517Z"
          transform="translate(0 -0.563)"
        />
      </g>
    </svg>
  );
}
