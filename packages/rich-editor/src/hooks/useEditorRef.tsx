import { useState, useEffect } from "react";
import { generateRandom8Chars } from "../utils/generateRandom8Chars";

export const useEditorRef = () => {
  const [id, setId] = useState("wipsie-editor-" + generateRandom8Chars());
  const [editorElement, setEditorElement] = useState<HTMLElement>(null);

  useEffect(() => {
    if (document) {
      const editor = document.getElementById(id);
      if (editor) {
        setEditorElement(editor);
      }
    }
  }, [id]);

  const focus = () => {
    if (editorElement) {
      // focus and position cursor at end of div
      editorElement.focus();

      const range = document.createRange();
      range.selectNodeContents(editorElement);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      // scroll to bottom
      editorElement.scrollTop = editorElement.scrollHeight;
    }
  };

  return {
    id,
    setId,
    current: editorElement,
    focus,
  };
};
