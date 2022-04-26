import { BaseEditor } from "slate";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";

// Underline plugin
export const UnderlinePlugin = (...options: any) => ({
  onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, editor: BaseEditor) {
    if (isMod(event) && event.key === "u") {
      event.preventDefault();
      return toggleMark(editor, "underline");
    }
    return;
  },
});
