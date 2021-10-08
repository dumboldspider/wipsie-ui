// Ported from Alexander Haniotis' code here: https://codepen.io/haniotis/pen/KwvYLO
import React from "react";
import styles from "./Checkmark.module.scss";

export const Checkmark = () => {
  return (
    <svg className={styles.checkmark} viewBox="0 0 52 52">
      <circle
        className={styles.checkmark__circle}
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className={styles.checkmark__check}
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};
