import React from "react";
import "quill/dist/quill.snow.css"; // Add css
import ReactQuill, { ReactQuillProps } from "react-quill";
import EditorToolbar, { formats, ToolbarFormats } from "./QuillEditorToolbar";
import { BoxProps } from "@wipsie/ui";
import { useRef } from "react";
import quillEditorLinkHandler from "./handlers/quillEditorLinkHandler";
import quillEditorImageHandler from "./handlers/quillEditorImageHandler";
import quillEditorUndoHandler from "./handlers/quillEditorUndoHandler";
import quillEditorRedoHandler from "./handlers/quillEditorRedoHandler";
import QuillRootStyle from "./QuillRootStyle";

// ----------------------------------------------------------------------

export interface QuillEditorProps extends ReactQuillProps {
  id?: string;
  error?: boolean;
  toolbar?: ToolbarFormats;
  boxProps?: BoxProps;
  toolbarBackgroundColor?: string;
  editorBackgroundColor?: string;
  backgroundColor?: string;
  uploaderUrl?: string;
  showDebug?: boolean;
}

export const defaultToolbar: ToolbarFormats = {
  header: true,
  align: true,
  bold: true,
  italic: true,
  underline: true,
  // color: true,
  image: true,
  link: true,
  // video: true,
  // background: true,
  bullet: true,
  list: true,
  indent: true,
  history: true,
  strike: true,
};

export function QuillEditor({
  id = "minimal-quill",
  error,
  value,
  onChange,
  boxProps,
  toolbar = defaultToolbar,
  editorBackgroundColor = "transparent",
  toolbarBackgroundColor = "transparent",
  uploaderUrl,
  showDebug = false,
  ...other
}: QuillEditorProps) {
  const editorRef = useRef<ReactQuill>(null);

  const modules = {
    toolbar: {
      container: `#${id}`,
      handlers: {
        undo: quillEditorUndoHandler,
        redo: quillEditorRedoHandler,
        link: quillEditorLinkHandler,
        image: quillEditorImageHandler,
      },
      uploader: {
        url: uploaderUrl,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: false,
    clipboard: {
      matchVisual: false,
    },
    /* This is a quill module that counts the number of words in the editor. */
    // counter: {
    //   container: "#counter",
    //   unit: "word",
    // },
  };

  return (
    <QuillRootStyle editorBackgroundColor={editorBackgroundColor} {...boxProps}>
      <EditorToolbar
        id={id}
        formats={toolbar}
        toolbarBackgroundColor={toolbarBackgroundColor}
      />
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        ref={editorRef}
        formats={formats}
        placeholder="Write something awesome..."
        {...other}
      />
      {showDebug && <code>{JSON.stringify(value, null, 2)}</code>}
    </QuillRootStyle>
  );
}
