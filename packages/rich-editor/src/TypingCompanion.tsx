import { Portal } from "@wipsie/ui";
import React, { useEffect, useRef } from "react";

import { useFocused, useSlate } from "slate-react";

export const TypingCompanion = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>();
  const editor = useSlate();
  const inFocus = useFocused();

  const { selection } = editor;
  const [style, setStyle] = React.useState({});

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    setStyle({
      top: `${rect.top + window.pageYOffset}px`,
      opacity: 1,
      left: `${
        rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
      }px`,
    });
  }, [editor, inFocus, selection, ref, window?.getSelection()]);

  return (
    <Portal visible={true} id="editor-companion-widget">
      <div
        ref={ref}
        style={{
          position: "absolute",
          pointerEvents: "none",
          ...style,
        }}
        onMouseDown={(e) => {
          e.preventDefault(); // prevent toolbar from taking focus away from editor
        }}
      >
        {/* Empty component for companion */}
        {children}
      </div>
    </Portal>
  );
};
