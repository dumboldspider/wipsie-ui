import React from "react";
import { useTheme } from "@wipsie/ui";
export function NoUserIcon({
  width = "30px",
  height = "auto",
  color = null,
  accent = null,
}) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      style={{ width, height, transition: "all 0.3s ease-in-out" }}
    >
      <g transform="translate(-1698 -32)">
        <circle
          cx="25"
          cy="25"
          r="25"
          transform="translate(1698 32)"
          fill={color || theme.palette.primary[500]}
        />
        <path
          data-name="Interseção 69"
          d="M5837.58-3682.256c3.96-4.365,13.905-6.581,19.42-6.581s15.46,2.215,19.421,6.581A24.952,24.952,0,0,1,5857-3673,24.951,24.951,0,0,1,5837.58-3682.256Zm8.862-22.418A10.59,10.59,0,0,1,5857-3715.231a10.589,10.589,0,0,1,10.558,10.558A10.588,10.588,0,0,1,5857-3694.116,10.589,10.589,0,0,1,5846.442-3704.673Z"
          transform="translate(-4134 3755)"
          fill={accent || theme.palette.primary[700]}
        />
      </g>
    </svg>
  );
}
