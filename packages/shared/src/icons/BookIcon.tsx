import React from "react";
import { useTheme } from "@wipsie/ui";
export function BookIcon({ color = null, width = "30px", height = "auto" }) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 27.703"
      style={{
        width: width,
        height: height,
        transition: "all 0.3s ease-in-out",
      }}
      fill={color || theme.palette.text}
    >
      <g transform="translate(-3.382 -4.5)">
        <path
          d="M10.266,4.507c3.8,0,7.031,2.013,7.031,5.916v1.154h0V32.061a.138.138,0,0,1-.267.051V32.1a6.668,6.668,0,0,0-5.787-5.087A8.8,8.8,0,0,0,4.7,29.695a.749.749,0,0,1-.464.209H3.916a.516.516,0,0,1-.534-.44V8.555C3.375,6.239,6.462,4.507,10.266,4.507Z"
          transform="translate(0 0)"
        />
        <path
          d="M25.734,4.5c-3.8,0-7.031,2.013-7.031,5.916v1.154h0V32.054a.138.138,0,0,0,.267.051V32.1a6.737,6.737,0,0,1,5.787-5.087A8.788,8.788,0,0,1,31.3,29.688a.79.79,0,0,0,.464.209h.316a.516.516,0,0,0,.534-.44V8.54C32.625,6.232,29.538,4.5,25.734,4.5Z"
          transform="translate(0.764)"
        />
      </g>
    </svg>
  );
}
