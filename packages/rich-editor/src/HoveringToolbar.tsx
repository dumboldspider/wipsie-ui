import { Popover, Portal } from "@wipsie/ui";
import React, { useEffect, useRef } from "react";
import { Editor } from "slate";
import { useFocused, useSlate } from "slate-react";
import { BaseGroupWrapper } from "./components/BaseGroupWrapper";

export const HoveringToolbar = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>();
  const editor = useSlate();
  const inFocus = useFocused();

  const { selection } = editor;
  const [style, setStyle] = React.useState({});

  useEffect(() => {
    const el = ref?.current;

    if (!el) {
      return;
    }

    try {
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
    } catch (e) {
      setStyle({});
    }
  }, [editor, inFocus, selection, ref, window?.getSelection()]);

  return (
    <Portal visible={true} id="editor-hovering-toolbar">
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
        <Popover
          visible={
            !(!selection || !inFocus || Editor.string(editor, selection) === "")
          }
          spacing={2.5}
          content={
            <BaseGroupWrapper style={{ pointerEvents: "all" }}>
              {children}
            </BaseGroupWrapper>
          }
          position="top"
          arrow
        >
          {/* Empty component for companion */}
          <></>
        </Popover>
      </div>
    </Portal>
  );
};
