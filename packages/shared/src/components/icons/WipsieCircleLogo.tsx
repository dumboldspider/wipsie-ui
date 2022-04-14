import React from "react";

export function WipsieCircleLogo({ width = "30px", height = "auto" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50.475 50.479"
      style={{
        width: width,
        height: height,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <defs>
        <linearGradient
          id="wps-logo-gradient"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#9c0097" />
          <stop offset="0.502" stop-color="#e64c68" />
          <stop offset="1" stop-color="#ffcc29" />
        </linearGradient>
      </defs>
      <path
        d="M8522.829,19537.4a25.239,25.239,0,1,1-25.239,25.244A25.239,25.239,0,0,1,8522.829,19537.4Zm0,45.521h0l-9.942-13.012c-.192-.215-.211-.588.243-.562a7.049,7.049,0,0,0,7.376-6.674,7.357,7.357,0,0,0-4.067-6.57c-.189-.094-.45-.336,0-.531,1.654-.7,6.665-2.061,4.676-10.506-.517-3.729,3.959-3.5,3.427,0-1.733,7.238,1.828,9.266,4.759,10.506.449.2.191.438,0,.527-2.512,1.2-3.862,2.928-4.164,6.365a6.831,6.831,0,0,0,7.393,6.883c.452-.035.437.348.241.559C8531.947,19570.914,8522.83,19582.924,8522.827,19582.924Z"
        transform="translate(-8497.59 -19537.402)"
        fill-rule="evenodd"
        fill="url(#wps-logo-gradient)"
      />
    </svg>
  );
}
