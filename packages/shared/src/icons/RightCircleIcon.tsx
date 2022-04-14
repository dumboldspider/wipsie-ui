import React from "react";
import { useTheme } from "@wipsie/ui";
export function RightCircleIcon({
  color = null,
  width = "30px",
  height = "auto",
}) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.006 27.006"
      style={{
        width: width,
        height: height,
        transition: "all 0.3s ease-in-out",
      }}
      fill={color || theme.palette.text}
    >
      <g>
        <path
          d="M14.065.562a13.5,13.5,0,1,1-13.5,13.5A13.5,13.5,0,0,1,14.065.562ZM7.75,16.461h6.316v3.86a.654.654,0,0,0,1.116.463L21.4,14.528a.647.647,0,0,0,0-.92L15.182,7.347a.653.653,0,0,0-1.116.463v3.86H7.75a.655.655,0,0,0-.653.653v3.485A.655.655,0,0,0,7.75,16.461Z"
          transform="translate(-0.563 -0.563)"
        />
      </g>
    </svg>
  );
}
