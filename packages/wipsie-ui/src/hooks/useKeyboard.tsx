import { useEffect } from "react";
export default function useKeyboard(
  targetKey: string,
  callback: (event: KeyboardEvent) => void
): void {
  // If pressed key is our target key then set to true
  function downHandler(event: KeyboardEvent): void {
    const { key } = event;
    if (key === targetKey) {
      callback && callback(event);
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount

  return;
}
