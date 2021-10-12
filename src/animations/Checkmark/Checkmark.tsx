// Ported from Alexander Haniotis' code here: https://codepen.io/haniotis/pen/KwvYLO
import React from "react";
import classnames from "classnames";

export const Checkmark = () => {
  return (
    <svg className={classnames("checkmark")} viewBox="0 0 52 52">
      <style jsx>{`
        /* Ported from Alexander Haniotis' code here: https://codepen.io/haniotis/pen/KwvYLO */
        .checkmark {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: block;
          stroke-width: 5;
          stroke: #fff;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #7ac142;
          animation: fill 0.4s ease-in-out 0.4s forwards,
            scale 0.3s ease-in-out 0.9s both;
        }

        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #7ac142;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.2s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards;
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale {
          0%,
          100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }

        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 30px #7ac142;
          }
        }
      `}</style>
      <circle
        className={classnames("checkmark__circle")}
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className={classnames("checkmark__check")}
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};
