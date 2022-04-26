import { BaseEditor } from "slate";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";

// Italic plugin
export const ItalicPlugin = (...options: any) => ({
  onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, editor: BaseEditor) {
    if (isMod(event) && event.key === "i") {
      event.preventDefault();
      return toggleMark(editor, "italic");
    }
    return;
  },
});
