import { isValidHttpUrl } from "../utils/isValidHttpUrl";
import { ReactEditor } from "slate-react";
import { insertImage } from "../tools/image/insertImage";

const imageExtensions = ["jpg", "jpeg", "png", "gif"];

const isImageUrl = (url: any) => {
  try {
    if (!url) return false;
    if (!isValidHttpUrl(url)) return false;

    const ext = new URL(url).pathname.split(".").pop();
    return ext !== undefined ? imageExtensions.includes(ext) : false;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};

export const withImages = (editor: ReactEditor): ReactEditor => {
  try {
    const { insertData, isVoid } = editor;

    editor.isVoid = (element) => {
      return (element as any).type === "image" ? true : isVoid(element);
    };

    editor.insertData = (data: DataTransfer) => {
      const text = data.getData("text/plain");
      const { files } = data;

      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
          const [mime] = file.type.split("/");

          if (mime === "image") {
            reader.addEventListener("load", () => {
              // reader.readAsDataURL() results in a url of type string
              // see https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result
              const url = reader.result as string;
              insertImage(editor, url);
            });

            reader.readAsDataURL(file);
          }
        }
      } else if (isImageUrl(text)) {
        insertImage(editor, text);
      } else {
        insertData(data);
      }
    };

    return editor;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
