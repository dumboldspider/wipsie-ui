import { isValidHttpUrl } from "../utils/isValidHttpUrl";
import { ReactEditor } from "slate-react";
import { wrapLink } from "../tools/link/LinkUtils";

export const withLinks = (editor: ReactEditor): ReactEditor => {
  try {
    const { insertData, insertText, isInline } = editor;

    editor.isInline = (element) => {
      return (element as any).type === "link" ? true : isInline(element);
    };

    editor.insertText = (text) => {
      if (text && isValidHttpUrl(text)) {
        wrapLink(editor, text, true);
      } else {
        insertText(text);
      }
    };

    editor.insertData = (data: DataTransfer) => {
      const text = data.getData("text/plain");

      if (text && isValidHttpUrl(text)) {
        wrapLink(editor, text, true);
      } else {
        insertData(data);
      }
    };

    return editor;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
