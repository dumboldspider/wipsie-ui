import { useEffect, useState } from "react";

// Hook
export const useRangeSelection = (conditions = []) => {
  const [range, setRange] = useState<Range | null>(null);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [selectedText, setSelectionText] = useState<string>("");

  useEffect(() => {
    if (window) {
      try {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const selText = range.toString();

        setRange(range);
        setSelection(selection);
        setSelectionText(selText);
      } catch {}
    }
  }, [window, window?.getSelection(), ...conditions]);

  return { range, selectedText, selection };
};
