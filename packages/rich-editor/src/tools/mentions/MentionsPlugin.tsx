import { Transforms } from "slate";
import { isMod } from "../../utils/isMod";
import { createParagraphNode } from "../../utils/createParagraphNode";
import { createMentionsNode } from "./createMentionsNode";
import { Portal } from "@wipsie/ui";
import React, { useEffect, useRef, useState } from "react";
import { BaseRange } from "slate";

import { ReactEditor, useFocused, useSlate } from "slate-react";
import { CHARACTERS_TEMPLATE } from "./MentionsUserList";
import { insertMention } from "./MentionsUtils";

export const MentionsPlugin = (...options: any) => {
  // const ref = useRef<HTMLDivElement | null>();
  // const editor = useSlate();
  // const inFocus = useFocused();
  // const [search, setSearch] = useState("");
  // const [target, setTarget] = useState<BaseRange | undefined>();
  // const [index, setIndex] = useState(0);

  // const chars = CHARACTERS_TEMPLATE.filter((c) =>
  //   c.toLowerCase().startsWith(search.toLowerCase())
  // ).slice(0, 10);

  // const { selection } = editor;
  // const [style, setStyle] = React.useState({});

  // useEffect(() => {
  //   const el = ref.current;

  //   if (!el) {
  //     return;
  //   }

  //   const domSelection = window.getSelection();
  //   const domRange = domSelection.getRangeAt(0);
  //   const rect = domRange.getBoundingClientRect();
  //   setStyle({
  //     top: `${rect.top + window.pageYOffset + 24}px`,
  //     opacity: 1,
  //     left: `${
  //       rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
  //     }px`,
  //   });
  // }, [editor, inFocus, selection, ref, window?.getSelection()]);

  // const render = ({}) => {
  //   return (
  //     <>
  //       {target && chars.length > 0 && (
  //         <Portal id="wipsie-mentions" visible={true}>
  //           <div
  //             ref={ref}
  //             style={{
  //               position: "absolute",
  //               pointerEvents: "none",
  //               zIndex: 1,
  //               padding: "3px",
  //               background: "white",
  //               borderRadius: "4px",
  //               boxShadow: "0 1px 5px rgba(0,0,0,.2)",
  //               width: "100px",
  //               ...style,
  //             }}
  //             onMouseDown={(e) => {
  //               e.preventDefault(); // prevent toolbar from taking focus away from editor
  //             }}
  //           >
  //             {chars.map((char, i) => (
  //               <div
  //                 key={char}
  //                 style={{
  //                   padding: "1px 3px",
  //                   borderRadius: "3px",
  //                   background: i === index ? "#B4D5FF" : "transparent",
  //                 }}
  //               >
  //                 {char}
  //               </div>
  //             ))}
  //           </div>
  //         </Portal>
  //       )}
  //     </>
  //   );
  // };

  return {
    onKeyDown(event, editor) {
      // if (target) {
      //   switch (event.key) {
      //     case "ArrowDown":
      //       event.preventDefault();
      //       const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
      //       setIndex(prevIndex);
      //       break;
      //     case "ArrowUp":
      //       event.preventDefault();
      //       const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
      //       setIndex(nextIndex);
      //       break;
      //     case "Tab":
      //     case "Enter":
      //       event.preventDefault();
      //       Transforms.select(editor, target);
      //       insertMention(editor, chars[index]);
      //       setTarget(null);
      //       break;
      //     case "Escape":
      //       event.preventDefault();
      //       setTarget(null);
      //       break;
      //   }
      // }
      // if current block is a heading and press enter, it will create a new paragraph
      // if (event.key === "Enter" && !event.shiftKey) {
      //   event.preventDefault();
      //   Transforms.insertNodes(editor, createMentionsNode());
      // }
    },
    // render,
  };
};
