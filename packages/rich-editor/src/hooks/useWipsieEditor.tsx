import { useEffect, useState } from "react";
import { Editor, Node, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { generateRandom8Chars } from "../utils/generateRandom8Chars";

export const useWipsieEditor = () => {
  const [id, setId] = useState("wipsie-editor-" + generateRandom8Chars());
  const [editorElement, setEditorElement] = useState<HTMLElement>(null);
  const [currentEditor, setCurrentEditor] = useState<ReactEditor | null>(null);

  useEffect(() => {
    if (document) {
      const editor = document.getElementById(id);
      if (editor) {
        setEditorElement(editor);
      }
    }
  }, [id]);

  const editorFocus = () => {
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

  // reset the editor
  const editorReset = () => {
    if (currentEditor) {
      Transforms.delete(currentEditor, {
        at: {
          anchor: Editor.start(currentEditor, []),
          focus: Editor.end(currentEditor, []),
        },
      });

      Transforms.insertText(currentEditor, "");

      // position at the end of the editor
      editorFocus();
      // Transforms.setSelection(currentEditor, {
      //   anchor: { path: [0, 0], offset: 0 },
      //   focus: { path: [0, 0], offset: 1 },
      // });
    } else {
      console.log("No editor to reset, you must initialize it first");
    }
  };

  // return plain string containing editor nodes
  const serializeNodes = () => {
    if (currentEditor) {
      const nodes = Array.from(
        Editor.nodes(currentEditor, {
          at: [],
          // match: (n) => Text.isText(n),
        })
      );
      return nodes.map((n) => Node.string(n[0])).join("\n") || "";
    } else {
      console.log("No editor to serialize, you must initialize it first");
      return "";
    }
  };

  return {
    id,
    editorRef: editorElement,
    editor: currentEditor,
    initializer: { id, setCurrentEditor, setId },
    options: {
      editorReset,
      serializeNodes,
      editorFocus,
    },
    classes: {
      Editor,
      Node,
      Transforms,
    },
  };
};

export type UseWipsieEditorReturn = ReturnType<typeof useWipsieEditor>;
