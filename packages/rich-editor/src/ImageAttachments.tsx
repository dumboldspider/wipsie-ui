import React from "react";
import { useEffect } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export const ImageAttachments = ({ onUpdate }) => {
  const editor = useSlate();

  useEffect(() => {
    const imageNodes = Editor.nodes(editor, {
      match: (n) => (n as any).type === "image",
    });

    onUpdate(imageNodes);

    console.log(imageNodes.return());
  }, [editor]);

  return <></>;
};
