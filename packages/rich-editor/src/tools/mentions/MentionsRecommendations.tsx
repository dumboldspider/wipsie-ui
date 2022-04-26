import { Portal } from "@wipsie/ui";
import React, { useEffect, useRef, useState } from "react";
import { BaseRange } from "slate";

import { ReactEditor, useFocused, useSlate } from "slate-react";
import { CHARACTERS_TEMPLATE } from "./MentionsUserList";

export const MentionsRecommendations = ({}) => {
  const ref = useRef<HTMLDivElement | null>();
  const editor = useSlate();
  const inFocus = useFocused();
  const [search, setSearch] = useState("");
  const [target, setTarget] = useState<BaseRange | undefined>();
  const [index, setIndex] = useState(0);

  const chars = CHARACTERS_TEMPLATE.filter((c) =>
    c.toLowerCase().startsWith(search.toLowerCase())
  ).slice(0, 10);

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
      top: `${rect.top + window.pageYOffset + 24}px`,
      opacity: 1,
      left: `${
        rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
      }px`,
    });
  }, [editor, inFocus, selection, ref, window?.getSelection()]);

  return (
    <>
      {/* {target && chars.length > 0 && ( */}
      <Portal id="wipsie-mentions" visible={true}>
        <div
          ref={ref}
          style={{
            position: "absolute",
            pointerEvents: "none",
            zIndex: 1,
            padding: "3px",
            background: "white",
            borderRadius: "4px",
            boxShadow: "0 1px 5px rgba(0,0,0,.2)",
            width: "100px",
            ...style,
          }}
          onMouseDown={(e) => {
            e.preventDefault(); // prevent toolbar from taking focus away from editor
          }}
        >
          {chars.map((char, i) => (
            <div
              key={char}
              style={{
                padding: "1px 3px",
                borderRadius: "3px",
                background: i === index ? "#B4D5FF" : "transparent",
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </Portal>
      {/* )} */}
    </>
  );
};
