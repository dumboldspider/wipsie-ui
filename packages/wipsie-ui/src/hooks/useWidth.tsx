import { useEffect, useState } from "react";

/**
 * Check the screen width
 * @param {number} initialWidth - Define the initial width number to consider if the screen flics
 */
export default function useWidth(initialWidth = 0): Number {
  // width window
  const [width, setWidth] = useState(initialWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    window.addEventListener("DOMContentLoaded", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("DOMContentLoaded", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange, width]);
  // end width hook

  return width;
}
